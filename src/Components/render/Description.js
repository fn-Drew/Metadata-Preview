const Description = ({ description }) => {
  if (!description) { return null; }

  return (
    <div>
      <div class="text-2xl"> Description </div>
      <textarea class="font-body border-none text-left w-2/3 resize-none" rows="5" value={description} readOnly />
    </div>
  )
}

export default Description 