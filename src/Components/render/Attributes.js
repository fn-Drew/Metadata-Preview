import { SpinnerSmall } from "../Spinners"

const Attributes = ({ attributes, loading, setLoading }) => {
  if (!attributes) {
    return null
  }

  return (
    <div className="grid gap-8 grid-cols-2 p-4 shadow-inner shadow-gray-300 bg-background-white">
      {attributes.map((attribute) => (
        <div className="truncate last:odd:col-span-2 px-6 rounded-md border-[1px] border-solid border-accent-blue bg-background-blue py-4 shadow-md">

          <div className={loading ? "block" : "hidden"}>
            <div className="px-14">
              <SpinnerSmall />
            </div>
          </div>

          <div className={loading ? "hidden" : "block"}>
            <div className="text-sm  font-bold text-[#15b2e5]">
              {attribute.trait_type.toUpperCase()}
            </div>
            <div className="font-body text-2xl text-black"> {attribute.value}</div>
          </div>

        </div>
      ))
      }
    </div >
  )
}

export default Attributes