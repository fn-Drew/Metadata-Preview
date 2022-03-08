const Attributes = ({ attributes }) => {
  if (!attributes) {
    return null
  }

  return (
    <div className="grid gap-8 grid-cols-2 bg-inherit">
      {attributes.map((attribute) => (
        <div className="truncate px-6 rounded-md border-[1px] border-solid border-[#69cdee] bg-[#edf9fe] py-4 shadow-md">
          <div className="text-sm font-bold text-[#15b2e5]">
            {attribute.trait_type.toUpperCase()}
          </div>
          <div className="font-body text-2xl text-black"> {attribute.value}</div>
        </div>
      ))}
    </div>
  )
}

export default Attributes
