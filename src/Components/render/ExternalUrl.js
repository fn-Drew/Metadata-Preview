import { Link32 } from "@carbon/icons-react"

const ExternalUrl = ({ externalUrl }) => {
  if (!externalUrl) {
    return null
  }

  return <a className="text-blue-600 pt-8" href={externalUrl} target="_blank"> <Link32 /> </a>
}

export default ExternalUrl
