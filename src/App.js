import './App.css'
import { useState } from 'react'
import Input from './Components/Input.js'

function App() {
  const [userInput, setUserInput] = useState([])

  const handleUserInput = (event) => {
    event.preventDefault()
    console.log(event)
    setUserInput(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div class="h-screen bg-slate-400">
      <p>test</p>
      <Input userInput={userInput} handleUserInput={handleUserInput} />
    </div>
  )
}

export default App
