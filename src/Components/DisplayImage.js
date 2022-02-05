import { useState } from 'react'
import ShowAttributes from './ShowAttributes'

const DisplayImage = ({ userInput }) => {

  if (userInput.hasOwnProperty('image')) {
    return (
      <div class="flex py-8 flex-col">
        <div class="text-center text-5xl"> {userInput.name} </div>
        <img class="place-self-center py-8 w-4/5" src={`https://ipfs.io/ipfs/${userInput.image.slice(7)}`} />
        <div class="p-14"> {userInput.description} </div>
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