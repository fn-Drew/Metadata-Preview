const RawJsonInput = ({ handleStringToJson, rawJson }) => {

  return (
    <div className="row-span-9 h-[20vh] w-11/12">
      <textarea
        className="font-mono string-input"
        placeholder="Input Metadata..."
        onInput={handleStringToJson}
        value={rawJson}
      />
    </div>
  )
}

export default RawJsonInput
