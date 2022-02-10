const AnimationUrl = ({ animationUrl }) => {
  if (!animationUrl) { return null };

  return (
    <div class="flex flex-col">
      <video onLoadStart="video.volume=0.01" class="w-1/2 py-12 place-self-center" controls> <source src={`https://ipfs.io/ipfs/${animationUrl.slice(7)}`} /> </video>
    </div>
  )
}

export default AnimationUrl