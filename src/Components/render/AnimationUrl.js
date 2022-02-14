const AnimationUrl = ({ animationUrl }) => {
  if (!animationUrl) {
    return null
  }

  return (
    <div class="flex flex-col">
      <video
        onLoadStart="video.volume=0.01"
        class="w-1/2 place-self-center py-12"
        controls
      >
        {" "}
        <source src={`https://ipfs.io/ipfs/${animationUrl.slice(7)}`} />{" "}
      </video>
    </div>
  )
}

export default AnimationUrl
