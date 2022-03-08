import ClipLoader from "react-spinners/ClipLoader"
import ExternalUrl from "./ExternalUrl"
import AnimationUrl from "./AnimationUrl"
import Attributes from "./Attributes"

const Media = ({ jsonMetadata, loading }) => {

  if (!jsonMetadata.hasOwnProperty("image"))
    return (
      <div className="flex flex-col place-items-center gap-14">
        <div className="pt-8 text-center text-3xl"> Your NFT #00 </div>
        <img alt="" className="w-64 shadow-lg" src='https://ipfs.io/ipfs/QmNctds8VQKxnZ5K4onxoAnUY1adsoPnbUgsKFDAPw294k' />
      </div>
    )

  let nftPicture = jsonMetadata.image

  if (nftPicture.substring(0, 7) === "ipfs://") {
    nftPicture = `https://ipfs.io/ipfs/${nftPicture.slice(7)}`
  }

  return (
    <div className="flex flex-col place-items-center gap-8 pb-10">
      <div className="pt-8 text-center text-3xl"> {jsonMetadata.name} </div>
      <ExternalUrl externalUrl={jsonMetadata.external_url} />
      {
        (!loading) ?
          <img alt="" className="w-64 shadow-lg" src={nftPicture} /> :
          <ClipLoader loading={loading} size={50} />
        // <div className="bg-slate-700 animate-pulse shadow-lg rounded-md aspect-video w-64"> </div>
      }
      <AnimationUrl animationUrl={jsonMetadata.animation_url} loading={loading} />
      <div className="text-center">
        {/* <Description description={jsonMetadata.description} /> */}
        <Attributes attributes={jsonMetadata.attributes} />
      </div>
    </div>
  )
}

export default Media
