const ExternalUrl = ({ externalUrl }) => {
  if (!externalUrl) {
    return null
  }

  return <a className="text-blue-600 text-center hover:underline" href={externalUrl}> {externalUrl} </a>
}

export default ExternalUrl
