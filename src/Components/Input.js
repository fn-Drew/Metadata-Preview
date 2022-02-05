const Input = (props) => {
  return (
    <div class="p-12 bg-blue-400">
      <textarea class="w-3/5" rows="20" placeholder="Input Metadata..." onInput={props.handleUserInput} />
    </div>
  )
}

export default Input 