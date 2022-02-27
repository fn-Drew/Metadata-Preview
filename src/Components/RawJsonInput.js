const RawJsonInput = ({ handleStringToJson, rawJson }) => {

  return (
    <div className="row-span-5 w-2/3">
      <textarea
        className="resize-none p-2 border-[1px] w-full focus:border-sky-500 transition-colors focus:shadow-inner focus:outline-none border-solid rounded-b-lg border-[#69cdee] bg-[#edf9fe]"
        rows="5"
        placeholder="Input Metadata..."
        onInput={handleStringToJson}
        value={rawJson}
      />
    </div>
  )
}

export default RawJsonInput
