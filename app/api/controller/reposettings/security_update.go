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

package reposettings

import (
	"context"
	"fmt"

	"github.com/harness/gitness/app/auth"
	"github.com/harness/gitness/types/enum"
)

// SecurityUpdate updates the security settings of the repo.
func (c *Controller) SecurityUpdate(
	ctx context.Context,
	session *auth.Session,
	repoRef string,
	in *SecuritySettings,
) (*SecuritySettings, error) {
	repo, err := c.getRepoCheckAccess(ctx, session, repoRef, enum.PermissionRepoEdit, false)
	if err != nil {
		return nil, err
	}

	err = c.settings.RepoSetMany(ctx, repo.ID, GetSecuritySettingsAsKeyValues(in)...)
	if err != nil {
		return nil, fmt.Errorf("failed to set settings: %w", err)
	}

	// read all settings and return complete config
	out := GetDefaultSecuritySettings()
	mappings := GetSecuritySettingsMappings(out)
	err = c.settings.RepoMap(ctx, repo.ID, mappings...)
	if err != nil {
		return nil, fmt.Errorf("failed to map settings: %w", err)
	}

	return out, nil
}
