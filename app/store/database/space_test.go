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

package database_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestDatabase_GetRootSpace(t *testing.T) {
	db, teardown := setupDB(t)
	defer teardown()

	principalStore, spaceStore, spacePathStore, _ := setupStores(t, db)

	ctx := context.Background()

	createUser(ctx, t, principalStore)

	numSpaces := createNestedSpaces(ctx, t, spaceStore, spacePathStore)

	for i := 1; i <= numSpaces; i++ {
		rootSpc, err := spaceStore.GetRootSpace(ctx, int64(i))
		if err != nil {
			t.Fatalf("failed to get root space %v", err)
		}
		if rootSpc.ID != 1 {
			t.Errorf("rootSpc.ID = %v, want %v", rootSpc.ID, 1)
		}
	}
}

func TestSpaceStore_FindByIDs(t *testing.T) {
	db, teardown := setupDB(t)
	defer teardown()

	principalStore, spaceStore, spacePathStore, _ := setupStores(t, db)

	ctx := context.Background()

	createUser(ctx, t, principalStore)

	_ = createNestedSpaces(ctx, t, spaceStore, spacePathStore)

	spaces, err := spaceStore.FindByIDs(ctx, 4, 5, 6)
	require.NoError(t, err)

	require.Len(t, spaces, 3)
	require.Equal(t, int64(4), spaces[0].ID)
	require.Equal(t, int64(5), spaces[1].ID)
	require.Equal(t, int64(6), spaces[2].ID)
}
