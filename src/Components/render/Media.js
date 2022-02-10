const Media = ({ userInput }) => {
  if (userInput.hasOwnProperty('image')) {
    return (
      <div class="flex gap-14 flex-col">
        <div class="text-center text-3xl"> {userInput.name} </div>
        <img alt="" class="w-1/2 place-self-center" src={`https://ipfs.io/ipfs/${userInput.image.slice(7)}`} />
      </div>
    )
  } else {
    return (
      <div class="text-center">No image.</div>
    )
  }
}

export default Media 