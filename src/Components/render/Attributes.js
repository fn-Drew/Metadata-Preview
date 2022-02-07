const Attributes = ({ attributes }) => {
  if (!attributes) { return null }

  return (
    <div class="grid grid-cols-2 bg-[#fbfdff]">
      {attributes.map((attribute) => (
        <div class="my-4 shadow-md mx-8 py-4 rounded-md border-solid border-[1px] border-[#69cdee] bg-[#edf9fe]">
          <div class="text-sm font-bold text-[#15b2e5]">
            {attribute.trait_type.toUpperCase()}
          </div>
          <div class="text-2xl text-black font-body"> {attribute.value}</div>
        </div>
      ))}
    </div>
  )
}

export default Attributes;