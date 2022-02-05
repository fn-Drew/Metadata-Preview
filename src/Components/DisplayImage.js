const DisplayImage = (props) => {

  if (props.userInput.hasOwnProperty('image')) {
    return (
      <div class="flex justify-around flex-col bg-green-300">
        <img class="place-self-center w-4/5 bg-green-500" src={`https://ipfs.io/ipfs/${props.userInput.image.slice(7)}`} />
        <div class="grid bg-purple-300 grid-cols-2">
          {props.userInput.attributes.map((attribute) =>
            <div> {attribute.trait_type} : {attribute.value} </div>
          )}
        </div>
      </div>
    )
  } else {
    return (
      <div class="bg-green-300 text-center"> No image. </div>
    )
  }
}
export default DisplayImage 