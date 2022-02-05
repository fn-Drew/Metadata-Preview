import { useState } from "react"

const ShowAttributes = ({ }) => {
  const [showAttributes, setShowAttributes] = useState(false)
  const onClick = () => setShowAttributes(!showAttributes)
  return (
    <div>
      <input type="submit" value="Attributes" onClick={onClick} />
      {showAttributes ? <Attributes /> : null}
    </div>
  )
}

const Attributes = ({ userInput }) => (
  <div class="grid gap-4 grid-cols-2 text-center">
    {userInput.attributes.map((attribute) =>
      <div> {attribute.trait_type} : {attribute.value} </div>
    )}
  </div>
)

export default ShowAttributes