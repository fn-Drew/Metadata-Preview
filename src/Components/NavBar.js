import { Link } from "react-router-dom"
import { Code24 } from "@carbon/icons-react"
import { Link24 } from "@carbon/icons-react"
import { Upload24 } from "@carbon/icons-react"

const NavBar = () => {
  return (
    <div className="bg-background-blue border-accent-blue text-lg rounded-lg rounded-b-none border-[1px] border-b-0 ">
      <ul className="flex divide-x divide-solid text-center overflow-auto divide-accent-blue">
        <li className="hover:shadow-inner group p-2 truncate basis-1/3 active:shadow-slate-300">
          <Link
            className="navbar-link"
            to="/RawJsonInput"
          >
            <span className="group-hover:inline hidden">JSON</span>
            <span className="group-hover:hidden flex justify-center"><Code24 /></span>
          </Link>
        </li>
        <li className="hover:shadow-inner py-2 group basis-1/3 active:shadow-slate-300">
          <Link
            className="navbar-link"
            to="/IPFSinput"
          >
            <span className="group-hover:inline hidden">IPFS</span>
            <span className="group-hover:hidden flex justify-center"><Link24 /></span>
          </Link>
        </li>
        <li className="hover:shadow-inner py-2 group basis-1/3 active:shadow-slate-300">
          <Link
            className="navbar-link"
            to="/FileInput"
          >
            <span className="group-hover:inline hidden">File Input</span>
            <span className="group-hover:hidden flex justify-center"><Upload24 /></span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar