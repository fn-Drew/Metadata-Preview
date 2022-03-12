import { SpinnerMedium } from "../Spinners"

const AnimationUrl = ({ animationUrl, loading, setLoading }) => {
  if (!animationUrl) {
    return null
  }

  if (animationUrl.substring(0, 7) === "ipfs://") {
    animationUrl = `https://heartnfts.mypinata.cloud/ipfs/${animationUrl.slice(7)}`
  }

  return (
    <div className="flex place-items-center flex-col">
      <div className={loading ? "block" : "hidden"}>
        <SpinnerMedium />
      </div>
      <div className={loading ? "hidden" : "block"}>
        <video
          id="animation-url"
          onLoadStart={() => document.getElementById('animation-url').volume = 0.1}
          onLoad={() => setLoading(false)}
          className="w-64"
          controls
        >
          <source src={animationUrl} />
        </video>
      </div>
    </div>
  )
}

export default AnimationUrl