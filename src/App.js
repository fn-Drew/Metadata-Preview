import './App.css'
import { useCallback, useState } from 'react'
import Input from './Components/Input.js'
import DisplayImage from './Components/DisplayImage.js'

function App() {
  const [userInput, setUserInput] = useState([])

  const handleUserInput = (event) => {
    event.preventDefault()
    let input = event.target.value
    let JSON_input = JSON.parse(input)
    setUserInput(JSON_input)
  }

  return (
    <div class="h-screen bg-slate-400">
      <p>test</p>
      <Input userInput={userInput} handleUserInput={handleUserInput} />
      <DisplayImage userInput={userInput} />
      {/* <img src={`https://ipfs.io/ipfs/${userInput.image.slice(7)}`} /> */}
    </div>
  )
}

export default App
