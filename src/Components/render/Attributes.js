import { SpinnerSmall } from "../Spinners"

const Attributes = ({ attributes, loading }) => {
  if (!attributes) {
    return null
  }

  return (
    <div className="grid gap-8 grid-cols-2 p-8 rounded-lg shadow-inner shadow-gray-300 bg-background-white">
      {attributes.map((attribute) => (
        <div className="last:odd:col-span-2 truncate p-4 rounded-lg border-[1px] border-solid border-accent-blue bg-background-blue shadow-md">

          <div className={loading ? "block" : "hidden"}>
            <div className="px-14">
              <SpinnerSmall />
            </div>
          </div>

          <div className={loading ? "hidden" : "block"}>
            <div className="text-sm  font-bold text-[#15b2e5]">
              {attribute.trait_type.toUpperCase()}
            </div>
            <div className="text-2xl"> {attribute.value}</div>
          </div>

        </div>
      ))
      }
    </div >
  )
}

export default Attributes