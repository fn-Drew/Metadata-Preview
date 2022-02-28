import { Outlet, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="w-2/3 bg-[#edf9fe] border-[#69cdee] rounded-lg rounded-b-none border-[1px] border-b-0 ">
      <ul className="flex justify-around divide-x divide-solid text-center min-h-0 overflow-x-hidden divide-[#69cdee]">
        <li className="hover:shadow-inner truncate w-2/3 active:shadow-slate-300">
          <Link
            className="inline-block w-full font-semibold text-[#69cdee] hover:text-sky-500"
            to="/RawJsonInput"
          >
            Raw JSON
          </Link>
        </li>
        <li className="hover:shadow-inner w-1/3 active:shadow-slate-300">
          <Link
            className="inline-block w-full font-semibold text-[#69cdee] hover:text-sky-500"
            to="/IPFSinput"
          >
            Ipfs
          </Link>
        </li>
        <li className="hover:shadow-inner w-1/3 active:shadow-slate-300">
          <Link
            className="inline-block w-full font-semibold text-[#69cdee]  hover:text-sky-500"
            to="/FileInput"
          >
            File
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
