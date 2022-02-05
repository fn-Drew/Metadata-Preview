const Input = (props) => {
  return (
    <div class="p-12 w-full justify-self-center ">
      <textarea class="w-5/6" rows="20" placeholder="Input Metadata..." onInput={props.handleUserInput} />
    </div>
  )
}

export default Input 