const RawJsonInput = ({ handleStringToJson }) => {

  return (
    <div className="pt-12 ml-6 mt-8">
      <textarea
        className="resize-y border-[1px] focus:border-sky-500 transition-colors focus:shadow-inner focus:outline-none border-solid rounded-b-lg border-[#69cdee] bg-[#edf9fe] p-[.95rem]"
        rows="5"
        placeholder="Input Metadata..."
        onInput={handleStringToJson}
      // onInputCapture={(event) => {
      //   console.log(event)
      //   setLoading(true)
      // }}
      />
    </div>
  )
}

export default RawJsonInput
