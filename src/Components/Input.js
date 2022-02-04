const Input = (props) => {
  return (
    <div>
      <form>
        <input
          value={props.userInput}
          onInput={props.handleUserInput}
        />
      </form>
    </div>
  )
}

export default Input 