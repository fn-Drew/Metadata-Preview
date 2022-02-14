const Description = ({ description }) => {
  if (!description) {
    return null
  }

  return (
    <div class="my-6">
      <div class="text-2xl"> Description </div>
      <textarea
        class="my-2 w-4/5 resize-none border-none bg-inherit text-left font-body leading-relaxed"
        rows="5"
        value={description}
        readOnly
      />
    </div>
  )
}

export default Description
