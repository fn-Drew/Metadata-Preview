const Description = ({ description }) => {
  if (!description) { return null; }

  return (
    <div class="my-6">
      <div class="text-2xl"> Description </div>
      <textarea class="bg-inherit border-none my-2 leading-relaxed font-body text-left w-4/5 resize-none" rows="5" value={description} readOnly />
    </div>
  )
}

export default Description 