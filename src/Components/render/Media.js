import ExternalUrl from "./ExternalUrl"
import AnimationUrl from "./AnimationUrl"
import { SpinnerLarge } from "../Spinners"
import Heart256 from "../../images/heart_256.avif"

const Media = ({ jsonMetadata, loading, setLoading }) => {

  // if there is no image, display this placeholder instead
  if (!jsonMetadata.hasOwnProperty("image"))
    return (
      <div className="flex flex-col place-items-center gap-14">
        <div className="pt-8 text-3xl text-center"> Token #00 </div>
        <img
          alt=""
          className="w-64 shadow-lg"
          src={Heart256}
        />
      </div>
    )

  let nftPicture = jsonMetadata.image

  if (nftPicture.substring(0, 7) === "ipfs://") {
    nftPicture = `https://cloudflare-ipfs.com/ipfs/${nftPicture.slice(7)}`
  }

  return (
    <div className="flex flex-col pt-12 items-center">
      <div className="flex gap-6 pb-12 items-center">
        <div className="text-4xl">
          {jsonMetadata.name}
        </div>
        <div>
          <ExternalUrl externalUrl={jsonMetadata.external_url} />
        </div>
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
    </div>
  )
}

export default Media