interface CodeCommentHeaderProps extends Pick<GitInfoProps, 'repoMetadata' | 'pullReqMetadata'> {
  pullReqMetadata
              pullRequestId: String(pullReqMetadata?.number),