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
	"net/http"

	"github.com/harness/gitness/app/api/controller/repo"
	"github.com/harness/gitness/app/api/render"
	"github.com/harness/gitness/app/api/request"
)

func HandleDeleteCommitTag(repoCtrl *repo.Controller) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		session, _ := request.AuthSessionFrom(ctx)

		repoRef, err := request.GetRepoRefFromPath(r)
		if err != nil {
			render.TranslatedUserError(ctx, w, err)
			return
		}

		tagName, err := request.GetRemainderFromPath(r)
		if err != nil {
			render.TranslatedUserError(ctx, w, err)
			return
		}

		bypassRules, err := request.ParseBypassRulesFromQuery(r)
		if err != nil {
			render.TranslatedUserError(ctx, w, err)
			return
		}

		dryRunRules, err := request.ParseDryRunRulesFromQuery(r)
		if err != nil {
			render.TranslatedUserError(ctx, w, err)
			return
		}

		out, violations, err := repoCtrl.DeleteCommitTag(ctx, session, repoRef, tagName, bypassRules, dryRunRules)
		if err != nil {
			render.TranslatedUserError(ctx, w, err)
			return
		}
		if violations != nil {
			render.Violations(w, violations)
			return
		}

		render.JSON(w, http.StatusOK, out)
	}
}
