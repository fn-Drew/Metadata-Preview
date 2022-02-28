import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="w-11/12 bg-[#edf9fe] border-[#69cdee] rounded-lg rounded-b-none border-[1px] border-b-0 ">
      <ul className="flex justify-around divide-x divide-solid text-center overflow-auto divide-[#69cdee]">
        <li className="hover:shadow-inner truncate w-2/3 active:shadow-slate-300">
          <Link
            className="navbar-link"
            to="/RawJsonInput"
          >
            Raw JSON
          </Link>
        </li>
        <li className="hover:shadow-inner w-1/3 active:shadow-slate-300">
          <Link
            className="navbar-link"
            to="/IPFSinput"
          >
            Ipfs
          </Link>
        </li>
        <li className="hover:shadow-inner w-1/3 active:shadow-slate-300">
          <Link
            className="navbar-link"
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
