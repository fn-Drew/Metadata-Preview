const DisplayImage = ({ userInput }) => {

  if (userInput.hasOwnProperty('image')) {
    return (
      <div class="flex py-8 flex-col">
        <div class="text-center text-5xl"> {userInput.name} </div>
        <img class="place-self-center py-8 w-4/5" src={`https://ipfs.io/ipfs/${userInput.image.slice(7)}`} />
        <div class="p-14"> {userInput.description} </div>
        <div class="grid gap-4 grid-cols-2 text-center">
          {userInput.attributes.map((attribute) =>
            <div> {attribute.trait_type} : {attribute.value} </div>
          )}
        </div>
      </div>
    )
  } else {
    return (
      <div class="text-center"> No image. </div>
    )
  }
}
export default DisplayImage 