/*
 * Copyright 2024 Harness, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import type { PropsWithChildren } from 'react'
import { Button, Formik, FormikForm, Text } from '@harnessio/uicore'
import type { VirtualRegistryRequest } from '@ar/pages/repository-details/types'

interface RepositoryFormComponentProps {
  initialValues: VirtualRegistryRequest
  onSubmit: (values: VirtualRegistryRequest) => void
}

export const RepositoryFormComponent = (props: PropsWithChildren<RepositoryFormComponentProps>) => {
  return (
    <Formik<VirtualRegistryRequest>
      formName="stepTestUtilForm"
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}>
      {({ errors, submitForm }) => {
        return (
          <>
            <FormikForm>{props.children}</FormikForm>
            <Text>Errors</Text>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
            <Button
              text="Submit"
              intent="primary"
              onClick={e => {
                e.stopPropagation()
                submitForm()
              }}
            />
          </>
        )
      }}
    </Formik>
  )
}
