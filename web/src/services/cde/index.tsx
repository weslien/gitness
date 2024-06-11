/* Generated by restful-react */

import React from 'react'
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react'

import { getConfig } from '../config'
export const SPEC_VERSION = '0.0.0'
export type EnumCodeRepoAccessType = 'PRIVATE' | 'PUBLIC'

export type EnumCodeRepoType = 'GITHUB' | 'GITLAB' | 'HARNESS_CODE' | 'BITBUCKET' | 'UNKNOWN'

export type EnumGitspaceAccessType = 'JWT_TOKEN' | 'PASSWORD'

export type EnumGitspaceActionType = 'START' | 'STOP'

export type EnumGitspaceStateType = 'RUNNING' | 'STOPPED' | 'UNKNOWN' | 'ERROR'

export type EnumIDEType = 'VSCODE' | 'VSCODEWEB'

export type EnumProviderType = 'HARNESS_GCP' | 'K8S' | 'HARNESS_OVHCLOUD' | 'DOCKER'

export interface OpenapiCreateGitspaceInstanceEventRequest {
  state?: EnumGitspaceStateType
}

export interface OpenapiCreateGitspaceRequest {
  branch?: string
  code_repo_id?: string
  code_repo_type?: EnumCodeRepoType
  code_repo_url?: string
  devcontainer_path?: string
  id?: string
  ide?: EnumIDEType
  infra_provider_resource_id?: string
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  prebuild_repo_id?: string
}

export interface OpenapiCreateGitspaceResponse {
  access_key?: string
  access_type?: EnumGitspaceAccessType
  code_server_password?: string
  config?: TypesGitspaceConfigResponse
  created?: number
  id?: string
  last_used?: number
  machine_user?: string
  resource_usage?: string
  ssh_key?: string
  status?: EnumGitspaceStateType
  total_time_used?: number
  tracked_changes?: string
  url?: string
}

export interface OpenapiCreateInfraProviderRequest {
  id?: string
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  type?: EnumProviderType
}

export interface OpenapiCreateInfraProviderResourceResponse {
  resources?: TypesInfraProviderResourceRequest[] | null
}

export interface OpenapiCreateInfraProviderResponse {
  created?: number
  id?: string
  metadata?: string
  name?: string
  scope?: string
  type?: EnumProviderType
  updated?: number
}

export interface OpenapiCreateInfraProviderTemplateRequest {
  created?: number
  data?: string
  description?: string
  identifier?: string
  space_id?: number
  updated?: number
}

export interface OpenapiCreateInfraProviderTemplateResponse {
  created?: number
  data?: string
  description?: string
  identifier?: string
  space_id?: number
  updated?: number
}

export interface OpenapiGetCodeRepositoryRequest {
  connector_ref?: string
  url?: string
}

export interface OpenapiGetCodeRepositoryResponse {
  access_type?: EnumCodeRepoAccessType
  branch?: string
  repo_type?: EnumCodeRepoType
  url?: string
}

export type OpenapiGetGitspaceLogsResponse = string | null

export interface OpenapiGetGitspaceResponse {
  access_key?: string
  access_type?: EnumGitspaceAccessType
  code_server_password?: string
  config?: TypesGitspaceConfigResponse
  created?: number
  id?: string
  last_used?: number
  machine_user?: string
  resource_usage?: string
  ssh_key?: string
  status?: EnumGitspaceStateType
  total_time_used?: number
  tracked_changes?: string
  url?: string
}

export interface OpenapiGitspaceActionRequest {
  action?: EnumGitspaceActionType
}

export type OpenapiListInfraProviderResourceResponse = TypesInfraProviderResourceResponse[] | null

export interface TypesGitspaceConfigResponse {
  branch?: string
  code_repo_id?: string
  code_repo_type?: EnumCodeRepoType
  code_repo_url?: string
  created?: number
  devcontainer_path?: string
  id?: string
  ide?: EnumIDEType
  infra_provider_resource_id?: string
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  prebuild_repo_id?: string
  scope?: string
  status_code?: string
  updated?: number
  user_id?: string
}

export interface TypesInfraProviderResourceRequest {
  cpu?: string
  disk?: string
  gateway_host?: string
  gateway_port?: string
  id?: string
  infra_provider_type?: EnumProviderType
  memory?: string
  name?: string
  network?: string
  opentofu_params?: {
    [key: string]: string
  } | null
  region?: string[] | null
  scope?: string
  template_id?: string
}

export interface TypesInfraProviderResourceResponse {
  cpu?: string
  created?: number
  disk?: string
  gateway_host?: string
  gateway_port?: string
  id?: string
  infra_provider_config_id?: string
  infra_provider_type?: EnumProviderType
  memory?: string
  name?: string
  network?: string
  opentofu_params?: {
    [key: string]: string
  } | null
  region?: string
  scope?: string
  template_id?: string
  updated?: number
}

export interface GetCodeRepositoryPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type GetCodeRepositoryProps = Omit<
  MutateProps<
    OpenapiGetCodeRepositoryResponse,
    unknown,
    void,
    OpenapiGetCodeRepositoryRequest,
    GetCodeRepositoryPathParams
  >,
  'path' | 'verb'
> &
  GetCodeRepositoryPathParams

/**
 * Get Code Repository
 */
export const GetCodeRepository = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: GetCodeRepositoryProps) => (
  <Mutate<OpenapiGetCodeRepositoryResponse, unknown, void, OpenapiGetCodeRepositoryRequest, GetCodeRepositoryPathParams>
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/coderepository`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGetCodeRepositoryProps = Omit<
  UseMutateProps<
    OpenapiGetCodeRepositoryResponse,
    unknown,
    void,
    OpenapiGetCodeRepositoryRequest,
    GetCodeRepositoryPathParams
  >,
  'path' | 'verb'
> &
  GetCodeRepositoryPathParams

/**
 * Get Code Repository
 */
export const useGetCodeRepository = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseGetCodeRepositoryProps) =>
  useMutate<
    OpenapiGetCodeRepositoryResponse,
    unknown,
    void,
    OpenapiGetCodeRepositoryRequest,
    GetCodeRepositoryPathParams
  >(
    'POST',
    (paramsInPath: GetCodeRepositoryPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/coderepository`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface DeleteGitspacePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type DeleteGitspaceProps = Omit<
  MutateProps<void, unknown, void, string, DeleteGitspacePathParams>,
  'path' | 'verb'
> &
  DeleteGitspacePathParams

/**
 * Delete gitspace config
 */
export const DeleteGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: DeleteGitspaceProps) => (
  <Mutate<void, unknown, void, string, DeleteGitspacePathParams>
    verb="DELETE"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseDeleteGitspaceProps = Omit<
  UseMutateProps<void, unknown, void, string, DeleteGitspacePathParams>,
  'path' | 'verb'
> &
  DeleteGitspacePathParams

/**
 * Delete gitspace config
 */
export const useDeleteGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseDeleteGitspaceProps) =>
  useMutate<void, unknown, void, string, DeleteGitspacePathParams>(
    'DELETE',
    (paramsInPath: DeleteGitspacePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface GetGitspacePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspaceIdentifier: string
}

export type GetGitspaceProps = Omit<
  GetProps<OpenapiGetGitspaceResponse, unknown, void, GetGitspacePathParams>,
  'path'
> &
  GetGitspacePathParams

/**
 * Get gitspace
 */
export const GetGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspaceIdentifier,
  ...props
}: GetGitspaceProps) => (
  <Get<OpenapiGetGitspaceResponse, unknown, void, GetGitspacePathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspaceIdentifier}`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGetGitspaceProps = Omit<
  UseGetProps<OpenapiGetGitspaceResponse, unknown, void, GetGitspacePathParams>,
  'path'
> &
  GetGitspacePathParams

/**
 * Get gitspace
 */
export const useGetGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspaceIdentifier,
  ...props
}: UseGetGitspaceProps) =>
  useGet<OpenapiGetGitspaceResponse, unknown, void, GetGitspacePathParams>(
    (paramsInPath: GetGitspacePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspaceIdentifier}`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspaceIdentifier },
      ...props
    }
  )

export interface GitspaceActionPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspaceIdentifier: string
}

export type GitspaceActionProps = Omit<
  MutateProps<void, unknown, void, OpenapiGitspaceActionRequest, GitspaceActionPathParams>,
  'path' | 'verb'
> &
  GitspaceActionPathParams

/**
 * Gitspace action
 */
export const GitspaceAction = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspaceIdentifier,
  ...props
}: GitspaceActionProps) => (
  <Mutate<void, unknown, void, OpenapiGitspaceActionRequest, GitspaceActionPathParams>
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspaceIdentifier}/action`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGitspaceActionProps = Omit<
  UseMutateProps<void, unknown, void, OpenapiGitspaceActionRequest, GitspaceActionPathParams>,
  'path' | 'verb'
> &
  GitspaceActionPathParams

/**
 * Gitspace action
 */
export const useGitspaceAction = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspaceIdentifier,
  ...props
}: UseGitspaceActionProps) =>
  useMutate<void, unknown, void, OpenapiGitspaceActionRequest, GitspaceActionPathParams>(
    'POST',
    (paramsInPath: GitspaceActionPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspaceIdentifier}/action`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspaceIdentifier },
      ...props
    }
  )

export interface CreateGitspaceEventPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspaceIdentifier: string
}

export type CreateGitspaceEventProps = Omit<
  MutateProps<void, unknown, void, OpenapiCreateGitspaceInstanceEventRequest, CreateGitspaceEventPathParams>,
  'path' | 'verb'
> &
  CreateGitspaceEventPathParams

/**
 * Create gitspace instance event
 */
export const CreateGitspaceEvent = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspaceIdentifier,
  ...props
}: CreateGitspaceEventProps) => (
  <Mutate<void, unknown, void, OpenapiCreateGitspaceInstanceEventRequest, CreateGitspaceEventPathParams>
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspaceIdentifier}/events`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseCreateGitspaceEventProps = Omit<
  UseMutateProps<void, unknown, void, OpenapiCreateGitspaceInstanceEventRequest, CreateGitspaceEventPathParams>,
  'path' | 'verb'
> &
  CreateGitspaceEventPathParams

/**
 * Create gitspace instance event
 */
export const useCreateGitspaceEvent = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspaceIdentifier,
  ...props
}: UseCreateGitspaceEventProps) =>
  useMutate<void, unknown, void, OpenapiCreateGitspaceInstanceEventRequest, CreateGitspaceEventPathParams>(
    'POST',
    (paramsInPath: CreateGitspaceEventPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspaceIdentifier}/events`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspaceIdentifier },
      ...props
    }
  )

export interface GetGitspaceInstanceLogsPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspaceIdentifier: string
}

export type GetGitspaceInstanceLogsProps = Omit<
  GetProps<OpenapiGetGitspaceLogsResponse, unknown, void, GetGitspaceInstanceLogsPathParams>,
  'path'
> &
  GetGitspaceInstanceLogsPathParams

/**
 * Get gitspace instance logs
 */
export const GetGitspaceInstanceLogs = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspaceIdentifier,
  ...props
}: GetGitspaceInstanceLogsProps) => (
  <Get<OpenapiGetGitspaceLogsResponse, unknown, void, GetGitspaceInstanceLogsPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspaceIdentifier}/logs`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGetGitspaceInstanceLogsProps = Omit<
  UseGetProps<OpenapiGetGitspaceLogsResponse, unknown, void, GetGitspaceInstanceLogsPathParams>,
  'path'
> &
  GetGitspaceInstanceLogsPathParams

/**
 * Get gitspace instance logs
 */
export const useGetGitspaceInstanceLogs = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspaceIdentifier,
  ...props
}: UseGetGitspaceInstanceLogsProps) =>
  useGet<OpenapiGetGitspaceLogsResponse, unknown, void, GetGitspaceInstanceLogsPathParams>(
    (paramsInPath: GetGitspaceInstanceLogsPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspaceIdentifier}/logs`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspaceIdentifier },
      ...props
    }
  )

export interface ListInfraProvidersPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type ListInfraProvidersProps = Omit<
  GetProps<OpenapiCreateInfraProviderResponse[], unknown, void, ListInfraProvidersPathParams>,
  'path'
> &
  ListInfraProvidersPathParams

/**
 * List infraproviders
 */
export const ListInfraProviders = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: ListInfraProvidersProps) => (
  <Get<OpenapiCreateInfraProviderResponse[], unknown, void, ListInfraProvidersPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListInfraProvidersProps = Omit<
  UseGetProps<OpenapiCreateInfraProviderResponse[], unknown, void, ListInfraProvidersPathParams>,
  'path'
> &
  ListInfraProvidersPathParams

/**
 * List infraproviders
 */
export const useListInfraProviders = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseListInfraProvidersProps) =>
  useGet<OpenapiCreateInfraProviderResponse[], unknown, void, ListInfraProvidersPathParams>(
    (paramsInPath: ListInfraProvidersPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface CreateInfraProviderPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type CreateInfraProviderProps = Omit<
  MutateProps<
    OpenapiCreateInfraProviderResponse,
    unknown,
    void,
    OpenapiCreateInfraProviderRequest,
    CreateInfraProviderPathParams
  >,
  'path' | 'verb'
> &
  CreateInfraProviderPathParams

/**
 * Create InfraProvider
 */
export const CreateInfraProvider = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: CreateInfraProviderProps) => (
  <Mutate<
    OpenapiCreateInfraProviderResponse,
    unknown,
    void,
    OpenapiCreateInfraProviderRequest,
    CreateInfraProviderPathParams
  >
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseCreateInfraProviderProps = Omit<
  UseMutateProps<
    OpenapiCreateInfraProviderResponse,
    unknown,
    void,
    OpenapiCreateInfraProviderRequest,
    CreateInfraProviderPathParams
  >,
  'path' | 'verb'
> &
  CreateInfraProviderPathParams

/**
 * Create InfraProvider
 */
export const useCreateInfraProvider = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseCreateInfraProviderProps) =>
  useMutate<
    OpenapiCreateInfraProviderResponse,
    unknown,
    void,
    OpenapiCreateInfraProviderRequest,
    CreateInfraProviderPathParams
  >(
    'POST',
    (paramsInPath: CreateInfraProviderPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface DeleteInfraProviderPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type DeleteInfraProviderProps = Omit<
  MutateProps<void, unknown, void, string, DeleteInfraProviderPathParams>,
  'path' | 'verb'
> &
  DeleteInfraProviderPathParams

/**
 * Delete infraprovider
 */
export const DeleteInfraProvider = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: DeleteInfraProviderProps) => (
  <Mutate<void, unknown, void, string, DeleteInfraProviderPathParams>
    verb="DELETE"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseDeleteInfraProviderProps = Omit<
  UseMutateProps<void, unknown, void, string, DeleteInfraProviderPathParams>,
  'path' | 'verb'
> &
  DeleteInfraProviderPathParams

/**
 * Delete infraprovider
 */
export const useDeleteInfraProvider = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseDeleteInfraProviderProps) =>
  useMutate<void, unknown, void, string, DeleteInfraProviderPathParams>(
    'DELETE',
    (paramsInPath: DeleteInfraProviderPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface ListInfraProviderResourcesPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * infra Provider Config Identifier.
   */
  infraProviderConfigIdentifier: string
}

export type ListInfraProviderResourcesProps = Omit<
  GetProps<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesPathParams>,
  'path'
> &
  ListInfraProviderResourcesPathParams

/**
 * List infraProvider Resources
 */
export const ListInfraProviderResources = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraProviderConfigIdentifier,
  ...props
}: ListInfraProviderResourcesProps) => (
  <Get<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders/${infraProviderConfigIdentifier}/resources`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListInfraProviderResourcesProps = Omit<
  UseGetProps<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesPathParams>,
  'path'
> &
  ListInfraProviderResourcesPathParams

/**
 * List infraProvider Resources
 */
export const useListInfraProviderResources = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraProviderConfigIdentifier,
  ...props
}: UseListInfraProviderResourcesProps) =>
  useGet<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesPathParams>(
    (paramsInPath: ListInfraProviderResourcesPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders/${paramsInPath.infraProviderConfigIdentifier}/resources`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, infraProviderConfigIdentifier },
      ...props
    }
  )

export interface CreateInfraProviderResourcePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * infra Provider Config Identifier.
   */
  infraProviderConfigIdentifier: string
}

export type CreateInfraProviderResourceProps = Omit<
  MutateProps<OpenapiCreateInfraProviderResourceResponse, unknown, void, void, CreateInfraProviderResourcePathParams>,
  'path' | 'verb'
> &
  CreateInfraProviderResourcePathParams

/**
 * Create InfraProvider Resource
 */
export const CreateInfraProviderResource = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraProviderConfigIdentifier,
  ...props
}: CreateInfraProviderResourceProps) => (
  <Mutate<OpenapiCreateInfraProviderResourceResponse, unknown, void, void, CreateInfraProviderResourcePathParams>
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders/${infraProviderConfigIdentifier}/resources`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseCreateInfraProviderResourceProps = Omit<
  UseMutateProps<
    OpenapiCreateInfraProviderResourceResponse,
    unknown,
    void,
    void,
    CreateInfraProviderResourcePathParams
  >,
  'path' | 'verb'
> &
  CreateInfraProviderResourcePathParams

/**
 * Create InfraProvider Resource
 */
export const useCreateInfraProviderResource = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraProviderConfigIdentifier,
  ...props
}: UseCreateInfraProviderResourceProps) =>
  useMutate<OpenapiCreateInfraProviderResourceResponse, unknown, void, void, CreateInfraProviderResourcePathParams>(
    'POST',
    (paramsInPath: CreateInfraProviderResourcePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders/${paramsInPath.infraProviderConfigIdentifier}/resources`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, infraProviderConfigIdentifier },
      ...props
    }
  )

export interface CreateInfraProviderTemplatePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * infra Provider Config Identifier.
   */
  infraProviderConfigIdentifier: string
}

export type CreateInfraProviderTemplateProps = Omit<
  MutateProps<
    OpenapiCreateInfraProviderTemplateResponse,
    unknown,
    void,
    OpenapiCreateInfraProviderTemplateRequest,
    CreateInfraProviderTemplatePathParams
  >,
  'path' | 'verb'
> &
  CreateInfraProviderTemplatePathParams

/**
 * Create InfraProvider Template
 */
export const CreateInfraProviderTemplate = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraProviderConfigIdentifier,
  ...props
}: CreateInfraProviderTemplateProps) => (
  <Mutate<
    OpenapiCreateInfraProviderTemplateResponse,
    unknown,
    void,
    OpenapiCreateInfraProviderTemplateRequest,
    CreateInfraProviderTemplatePathParams
  >
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders/${infraProviderConfigIdentifier}/templates`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseCreateInfraProviderTemplateProps = Omit<
  UseMutateProps<
    OpenapiCreateInfraProviderTemplateResponse,
    unknown,
    void,
    OpenapiCreateInfraProviderTemplateRequest,
    CreateInfraProviderTemplatePathParams
  >,
  'path' | 'verb'
> &
  CreateInfraProviderTemplatePathParams

/**
 * Create InfraProvider Template
 */
export const useCreateInfraProviderTemplate = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraProviderConfigIdentifier,
  ...props
}: UseCreateInfraProviderTemplateProps) =>
  useMutate<
    OpenapiCreateInfraProviderTemplateResponse,
    unknown,
    void,
    OpenapiCreateInfraProviderTemplateRequest,
    CreateInfraProviderTemplatePathParams
  >(
    'POST',
    (paramsInPath: CreateInfraProviderTemplatePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders/${paramsInPath.infraProviderConfigIdentifier}/templates`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, infraProviderConfigIdentifier },
      ...props
    }
  )

export interface ListGitspacesPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type ListGitspacesProps = Omit<
  GetProps<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesPathParams>,
  'path'
> &
  ListGitspacesPathParams

/**
 * List gitspaces
 */
export const ListGitspaces = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: ListGitspacesProps) => (
  <Get<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}gitspaces`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListGitspacesProps = Omit<
  UseGetProps<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesPathParams>,
  'path'
> &
  ListGitspacesPathParams

/**
 * List gitspaces
 */
export const useListGitspaces = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseListGitspacesProps) =>
  useGet<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesPathParams>(
    (paramsInPath: ListGitspacesPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface CreateGitspacePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type CreateGitspaceProps = Omit<
  MutateProps<OpenapiCreateGitspaceResponse, unknown, void, OpenapiCreateGitspaceRequest, CreateGitspacePathParams>,
  'path' | 'verb'
> &
  CreateGitspacePathParams

/**
 * Create gitspace config
 */
export const CreateGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: CreateGitspaceProps) => (
  <Mutate<OpenapiCreateGitspaceResponse, unknown, void, OpenapiCreateGitspaceRequest, CreateGitspacePathParams>
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}gitspaces`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseCreateGitspaceProps = Omit<
  UseMutateProps<OpenapiCreateGitspaceResponse, unknown, void, OpenapiCreateGitspaceRequest, CreateGitspacePathParams>,
  'path' | 'verb'
> &
  CreateGitspacePathParams

/**
 * Create gitspace config
 */
export const useCreateGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseCreateGitspaceProps) =>
  useMutate<OpenapiCreateGitspaceResponse, unknown, void, OpenapiCreateGitspaceRequest, CreateGitspacePathParams>(
    'POST',
    (paramsInPath: CreateGitspacePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface ListGitspacesForAccountPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
}

export type ListGitspacesForAccountProps = Omit<
  GetProps<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesForAccountPathParams>,
  'path'
> &
  ListGitspacesForAccountPathParams

/**
 * List gitspaces for account
 */
export const ListGitspacesForAccount = ({ accountIdentifier, ...props }: ListGitspacesForAccountProps) => (
  <Get<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesForAccountPathParams>
    path={`/accounts/${accountIdentifier}gitspaces`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListGitspacesForAccountProps = Omit<
  UseGetProps<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesForAccountPathParams>,
  'path'
> &
  ListGitspacesForAccountPathParams

/**
 * List gitspaces for account
 */
export const useListGitspacesForAccount = ({ accountIdentifier, ...props }: UseListGitspacesForAccountProps) =>
  useGet<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesForAccountPathParams>(
    (paramsInPath: ListGitspacesForAccountPathParams) => `/accounts/${paramsInPath.accountIdentifier}gitspaces`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier }, ...props }
  )