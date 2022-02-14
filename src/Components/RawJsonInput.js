const RawJsonInput = ({ handleRawJsonInput }) => {
  return (
    <div class="mx-14 w-full py-12">
      <textarea
        class="h-5/6 w-5/6 resize-y border-[1px] border-solid border-[#69cdee] bg-[#edf9fe] p-8"
        rows="10"
        placeholder="Input Metadata..."
        onInput={handleRawJsonInput}
      />
    </div>
  )
}

export default RawJsonInput
