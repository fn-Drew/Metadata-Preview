import './App.css'
import { useState, useReducer } from 'react'

import Input from './Components/Input'
import DisplayImage from './Components/DisplayImage'

function App() {
  const [userInput, setUserInput] = useState([])

  const handleUserInput = (event) => {
    event.preventDefault()
    const JSON_input = JSON.parse(event.target.value)
    setUserInput(JSON_input)
  }

  return (
    <div class="h-screen w-screen grid grid-cols-2 bg-slate-400">
      <Input userInput={userInput} handleUserInput={handleUserInput} />
      <DisplayImage userInput={userInput} />
    </div>
  )
}

export default App
