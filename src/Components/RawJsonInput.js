const RawJsonInput = ({ handleRawJsonInput }) => {
  return (
    <div class="pt-12">
      <textarea
        class="resize-y border-[1px] border-solid rounded-b-lg border-[#69cdee] bg-[#edf9fe] p-4"
        rows="5"
        placeholder="Input Metadata..."
        onInput={handleRawJsonInput}
      />
    </div>
  )
}

export default RawJsonInput
