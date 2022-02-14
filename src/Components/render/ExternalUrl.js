const ExternalUrl = ({ externalUrl }) => {
  if (!externalUrl) {
    return null
  }

  return <a href={externalUrl}> External Url </a>
}

export default ExternalUrl
