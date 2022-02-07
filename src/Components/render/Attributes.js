const Attributes = ({ attributes }) => {
  if (!attributes) { return null; }

  return (
  <div class="grid grid-cols-2 gap-4 bg-slate-200">
    {attributes.map((attribute) => (
      <div class="m-4 rounded-md border-solid border-teal-500 bg-teal-100">
        <div class="text-md font-thin text-teal-700">
          {attribute.trait_type.toUpperCase()}{" "}
        </div>
        <div class="text-lg font-bold"> {attribute.value}</div>
      </div>
    ))}
  </div>
  );
  
};

export default Attributes;
