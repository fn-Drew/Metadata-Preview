import './App.css'
import { useState } from 'react'
import Input from './Components/Input.js'
import DisplayImage from './Components/DisplayImage.js'
import { useReducer } from "react"

function App() {
  const [userInput, setUserInput] = useState([])
  const [, forceUpdate] = useReducer(x => x + 1, 0)

  const handleUserInput = (event) => {
    event.preventDefault()
    let input = event.target.value
    let JSON_input = JSON.parse(input)
    setUserInput(JSON_input)
    console.log(userInput.hasOwnProperty('image'))
    forceUpdate()
  }

  return (
    <div class="h-screen bg-slate-400">
      <p>test</p>
      <Input userInput={userInput} handleUserInput={handleUserInput} />
      <DisplayImage userInput={userInput} />
      {/* <img src={`https://ipfs.io/ipfs/${userInput.image.slice(7)}`} alt="NFT preview" /> */}
    </div>
  )
}

export default App
