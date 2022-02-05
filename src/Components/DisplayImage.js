const DisplayImage = (props) => {

  if (props.userInput.image === true) {
    return (
      <div>
        <img src={`https://ipfs.io/ipfs/${props.userInput.image.slice(7)}`} />
      </div>
    )
  } else {
    return (
      <div> No image. {console.log(props.userInput.image)} </div>
    )
  }
}

export default DisplayImage 