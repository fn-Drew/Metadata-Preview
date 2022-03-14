import ExternalUrl from "./ExternalUrl"
import AnimationUrl from "./AnimationUrl"
import Attributes from "./Attributes"
import { SpinnerLarge } from "../Spinners"

const Media = ({ jsonMetadata, loading, setLoading }) => {

  // if there is no image, display this placeholder instead
  if (!jsonMetadata.hasOwnProperty("image"))
    return (
      <div className="flex flex-col place-items-center gap-14">
        <div className="pt-8 text-center text-3xl"> Your NFT #00 </div>
        <img
          alt=""
          className="w-64 shadow-lg"
          src='https://ipfs.io/ipfs/QmNctds8VQKxnZ5K4onxoAnUY1adsoPnbUgsKFDAPw294k'
        />
      </div>
    )

  let nftPicture = jsonMetadata.image

  if (nftPicture.substring(0, 7) === "ipfs://") {
    nftPicture = `https://heartnfts.mypinata.cloud/ipfs/${nftPicture.slice(7)}`
  }

  return (
    <div className="flex flex-col place-items-center gap-8 pb-10">
      <div className="flex gap-2 place-items-center">
        <div className="pt-8 text-center text-3xl"> {jsonMetadata.name} </div>
        <ExternalUrl externalUrl={jsonMetadata.external_url} />
      </div>
      <div className={loading ? "block" : "hidden"}>
        <SpinnerLarge />
      </div>
      <div className={loading ? "hidden" : "block"}>
        <img
          alt=""
          className="w-64 shadow-lg"
          src={nftPicture}
          onLoad={() => setLoading(false)}
        />
      </div>
      <AnimationUrl animationUrl={jsonMetadata.animation_url} loading={loading} setLoading={setLoading} />
      <div className="text-center">
        {/* <Description description={jsonMetadata.description} /> */}
        <Attributes attributes={jsonMetadata.attributes} loading={loading} setLoding={setLoading} />
      </div>
    </div>
  )
}

export default Media