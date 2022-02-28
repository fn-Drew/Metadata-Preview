const RawJsonInput = ({ handleStringToJson, rawJson }) => {

  return (
    <div className="row-span-5 w-2/3">
      <textarea
        className="string-input"
        rows="5"
        placeholder="Input Metadata..."
        onInput={handleStringToJson}
        value={rawJson}
      />
    </div>
  )
}

export default RawJsonInput
