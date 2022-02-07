import { useState } from 'react'

const DisplayImage = ({ userInput }) => {

  const ShowDescription = () => {
    const [showDescription, setShowDescription] = useState(false)
    const onClick = () => setShowDescription(!showDescription)

    if (userInput.hasOwnProperty('description')) {
      return (
        <div class="">
          <input class="bg-teal-300 w-5/6 mt-6 " type="submit" value="Description" onClick={onClick} />
          {showDescription ? <Description /> : null}
        </div>
      )
    } else {
      return null
    }
  }

  const Description = () => <div> {userInput.description} </div>

  const ShowAttributes = () => {
    const [showAttributes, setShowAttributes] = useState(true)
    const onClick = () => setShowAttributes(!showAttributes)

    if (userInput.hasOwnProperty('attributes')) {
      return (
        <div class="flex-row ">
          <input class="bg-teal-300" type="submit" value="Attributes" onClick={onClick} />
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
        <div class="outline outline-teal-400 p-4 m-4 rounded-lg">
          <div class="text-md text-teal-600" > {attribute.trait_type.toUpperCase()}  </div>
          <div class="text-3xl"> {attribute.value}</div>
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
      <div class="flex py-8 bg-green-300 flex-col">
        <div class="text-center text-5xl"> {userInput.name} </div>
        <img class="place-self-center my-8 w-1/2" src={`https://ipfs.io/ipfs/${userInput.image.slice(7)}`} />
        <ShowExternalUrl />
        <div class="flex flex-col">
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