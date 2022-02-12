const RawJsonInput = (props) => {
  return (
    <div class="py-12 mx-14 w-full">
      <textarea class="w-5/6 h-5/6 resize-y" rows="20" value={props.RawJsonInput} placeholder="Input Metadata..." onInput={props.handleUserInput} />
    </div>
  )
}

export default RawJsonInput 