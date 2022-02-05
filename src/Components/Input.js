const Input = (props) => {
  return (
    <div>
      <textarea vlaue={props.userInput} onInput={props.handleUserInput} />
    </div>
  )
}

export default Input 