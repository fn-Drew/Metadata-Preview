import { useState } from 'react'

const DisplayImage = ({ userInput }) => {

  const ShowDescription = () => {
    const [showDescription, setShowDescription] = useState(true)
    const onClick = () => setShowDescription(!showDescription)

    if (userInput.hasOwnProperty('description')) {
      return (
        <div class="">
          <input class="w-full border-none bg-white" type="submit" value="Description" onClick={onClick} />
          {showDescription ? <Description /> : null}
        </div>
      )
    } else {
      return null
    }
  }

  const Description = () => <div class="text-left"> {userInput.description} </div>

  const ShowAttributes = () => {
    const [showAttributes, setShowAttributes] = useState(true)
    const onClick = () => setShowAttributes(!showAttributes)

    if (userInput.hasOwnProperty('attributes')) {
      return (
        <div class="">
          <input class="w-full bg-white" type="submit" value="Attributes" onClick={onClick} />
          {showAttributes ? <Attributes /> : null}
        </div>
      )
    } else {
      return null
    }
  }

  const Attributes = () => (
    <div class="grid grid-cols-2">
      {userInput.attributes.map((attribute) =>
        <div class="">
          <div class="font-thin text-md" > {attribute.trait_type.toUpperCase()}  </div>
          <div class="font-bold text-lg"> {attribute.value}</div>
        </div>
      )}
    </div>
  )

  const ShowExternalUrl = () => {
    if (userInput.hasOwnProperty('external_url')) {
      return <a href={userInput.external_url}> External Url </a>
    } else
      return null
  }

  if (userInput.hasOwnProperty('image')) {
    return (
      <div class="flex flex-col">
        <div class="text-center text-3xl"> {userInput.name} </div>
        <img class="w-1/2" src={`https://ipfs.io/ipfs/${userInput.image.slice(7)}`} />
        <ShowExternalUrl />
        <div class="text-center">
          <ShowDescription />
          <ShowAttributes />
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