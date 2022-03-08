import ClipLoader from "react-spinners/ClipLoader"

const AnimationUrl = ({ animationUrl, loading }) => {
  if (!animationUrl) {
    return null
  }

  if (animationUrl.substring(0, 7) === "ipfs://") {
    animationUrl = `https://ipfs.io/ipfs/${animationUrl.slice(7)}`
  }

  return (
    <div className="flex place-items-center flex-col">
      {
        (!loading) ?
          <video
            id="animation-url"
            onLoadStart={() => document.getElementById('animation-url').volume = 0.1}
            className="w-64"
            controls
          >
            <source src={animationUrl} />
          </video>
          :
          // <ClipLoader loading={loading} size={150} />
          <div className="bg-slate-700 animate-pulse shadow rounded-md aspect-video w-1/2 my-12"> </div>
      }
    </div>
  )
}

export default AnimationUrl