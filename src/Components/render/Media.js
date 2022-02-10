const Media = ({ userInput }) => {
  if (!userInput.hasOwnProperty('image')) return <div class="text-center">No image.</div>

  let nftPicture = userInput.image

  if (nftPicture.substring(0, 7) === 'ipfs://') {
    nftPicture = `https://ipfs.io/ipfs/${nftPicture.slice(7)}`
  }

  return (
    <div class="flex gap-14 flex-col">
      <div class="text-center pt-8 text-3xl"> {userInput.name} </div>
      <img alt="" class="shadow-md w-1/2 place-self-center" src={nftPicture} />
    </div>
  )
}

export default Media 