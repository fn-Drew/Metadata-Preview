const RawJsonInput = (props) => {
  return (
    <div class="py-12 mx-14 w-full">
      <textarea class="bg-[#edf9fe] border-[#69cdee] border-[1px] p-8 border-solid w-5/6 h-5/6 resize-y" rows="10" value={props.RawJsonInput} placeholder="Input Metadata..." onInput={props.handleUserInput} />
    </div>
  )
}

export default RawJsonInput 