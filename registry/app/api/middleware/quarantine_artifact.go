//  Copyright 2023 Harness, Inc.
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

package middleware

import (
	"net/http"

	"github.com/harness/gitness/app/api/render"
	"github.com/harness/gitness/registry/app/api/handler/packages"

	"github.com/rs/zerolog/log"
)

func CheckQuarantineStatus(
	packageHandler packages.Handler,
) func(next http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(
			func(w http.ResponseWriter, r *http.Request) {
				ctx := r.Context()
				sw := &StatusWriter{ResponseWriter: w}
				err := packageHandler.CheckQuarantineStatus(ctx)
				if err != nil {
					log.Ctx(ctx).Error().Stack().Str("middleware",
						"CheckQuarantineStatus").Err(err).Msgf("error while putting download stat of artifact, %v",
						err)
					render.TranslatedUserError(r.Context(), w, err)
					return
				}
				next.ServeHTTP(sw, r)
			},
		)
	}
}
