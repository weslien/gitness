// Copyright 2023 Harness, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package repo

import (
	"context"
	"fmt"

	"github.com/harness/gitness/app/api/controller"
	"github.com/harness/gitness/app/auth"
	"github.com/harness/gitness/app/services/protection"
	"github.com/harness/gitness/git"
	"github.com/harness/gitness/types"
	"github.com/harness/gitness/types/enum"
)

// DeleteCommitTag deletes a tag from the repo.
func (c *Controller) DeleteCommitTag(ctx context.Context,
	session *auth.Session,
	repoRef,
	tagName string,
	bypassRules bool,
	dryRunRules bool,
) (types.DeleteCommitTagOutput, []types.RuleViolations, error) {
	repo, err := c.getRepoCheckAccess(ctx, session, repoRef, enum.PermissionRepoPush)
	if err != nil {
		return types.DeleteCommitTagOutput{}, nil, err
	}

	rules, isRepoOwner, err := c.fetchTagRules(ctx, session, repo)
	if err != nil {
		return types.DeleteCommitTagOutput{}, nil, err
	}

	violations, err := rules.RefChangeVerify(ctx, protection.RefChangeVerifyInput{
		ResolveUserGroupID: c.userGroupService.ListUserIDsByGroupIDs,
		Actor:              &session.Principal,
		AllowBypass:        bypassRules,
		IsRepoOwner:        isRepoOwner,
		Repo:               repo,
		RefAction:          protection.RefActionDelete,
		RefType:            protection.RefTypeTag,
		RefNames:           []string{tagName},
	})
	if err != nil {
		return types.DeleteCommitTagOutput{}, nil, fmt.Errorf("failed to verify protection rules: %w", err)
	}

	if dryRunRules {
		return types.DeleteCommitTagOutput{
			DryRunRulesOutput: types.DryRunRulesOutput{
				DryRunRules:    true,
				RuleViolations: violations,
			},
		}, nil, nil
	}

	if protection.IsCritical(violations) {
		return types.DeleteCommitTagOutput{}, violations, nil
	}

	writeParams, err := controller.CreateRPCInternalWriteParams(ctx, c.urlProvider, session, repo)
	if err != nil {
		return types.DeleteCommitTagOutput{}, nil, fmt.Errorf("failed to create RPC write params: %w", err)
	}

	err = c.git.DeleteTag(ctx, &git.DeleteTagParams{
		Name:        tagName,
		WriteParams: writeParams,
	})
	if err != nil {
		return types.DeleteCommitTagOutput{}, nil, err
	}

	return types.DeleteCommitTagOutput{
		DryRunRulesOutput: types.DryRunRulesOutput{
			RuleViolations: violations,
		}}, nil, nil
}
