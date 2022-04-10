const Description = ({ description }) => {
  if (!description) {
    return null
  }

  return (
    <div className="my-10">
      <textarea
        className="my-2 shadow-inner outline-none rounded-lg p-4 bg-background-white w-4/5 resize-none border-none bg-inherit text-left font-body leading-relaxed"
        rows="5"
        value={description}
        readOnly
      />
    </div>
  )
}

export default Description
