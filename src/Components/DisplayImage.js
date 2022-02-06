import { useState } from 'react'

const DisplayImage = ({ userInput }) => {

  const ShowDescription = () => {

    const [showDescription, setShowDescription] = useState(false)
    const onClick = () => setShowDescription(!showDescription)

    if (userInput.hasOwnProperty('description')) {
      return (
        <div>
          <input type="submit" value="Description" onClick={onClick} />
          {showDescription ? <Description /> : null}
        </div>
      )
    } else {
      return null
    }

  }

  const Description = () => <div> {userInput.description} </div>

  const ShowAttributes = () => {
    const [showAttributes, setShowAttributes] = useState(false)
    const onClick = () => setShowAttributes(!showAttributes)

    if (userInput.hasOwnProperty('attributes')) {
      return (
        <div>
          <input type="submit" value="Attributes" onClick={onClick} />
          {showAttributes ? <Attributes /> : null}
        </div>
      )
    } else {
      return null
    }
  }

  const Attributes = () => (
    <div class="grid gap-4 grid-cols-2 text-center">
      {userInput.attributes.map((attribute) =>
        <div>
          <div> {attribute.trait_type}  </div>
          <div> {attribute.value}</div>
        </div>
      )}
    </div>
  )

  const ShowExternalUrl = () => <a href={userInput.external_url}> External Url </a>

  if (userInput.hasOwnProperty('image')) {
    return (
      <div class="flex py-8 flex-col">
        <div class="text-center text-5xl"> {userInput.name} </div>
        <img class="place-self-center py-8 w-4/5" src={`https://ipfs.io/ipfs/${userInput.image.slice(7)}`} />
        <ShowExternalUrl />
        <ShowDescription />
        <ShowAttributes />
      </div>
    )
  } else {
    return (
      <div class="text-center"> No image. </div>
    )
  }
}
export default DisplayImage 