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
    let JSON_input = JSON.parse(event.target.value)
    setUserInput(JSON_input)
    // forceUpdate()
  }

  return (
    <div class="h-screen grid grid-cols-2 bg-slate-400">
      <Input userInput={userInput} handleUserInput={handleUserInput} />
      <DisplayImage userInput={userInput} />
    </div>
  )
}

export default App
