import { SpinnerMedium } from "../Spinners"

const AnimationUrl = ({ animationUrl, loading, setLoading }) => {
  if (!animationUrl) {
    return null
  }

  if (animationUrl.substring(0, 7) === "ipfs://") {
    animationUrl = `https://cloudflare-ipfs.com/ipfs/${animationUrl.slice(7)}`
  }

  return (
    <div className="flex flex-col place-items-center">
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