const Media = ({ userInput }) => {
  if (!userInput.hasOwnProperty("image"))
    return <div class="text-center">No image.</div>

  let nftPicture = userInput.image

  if (nftPicture.substring(0, 7) === "ipfs://") {
    nftPicture = `https://ipfs.io/ipfs/${nftPicture.slice(7)}`
  }

  return (
    <div class="flex flex-col gap-14">
      <div class="pt-8 text-center text-3xl"> {userInput.name} </div>
      <img alt="" class="w-1/2 place-self-center shadow-md" src={nftPicture} />
    </div>
  )
}

export default Media
