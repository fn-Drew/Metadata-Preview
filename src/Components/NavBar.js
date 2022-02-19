import { Outlet, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div class="top-0 mt-2 border-[#69cdee] rounded-lg rounded-b-none border-[1px] border-b-0 absolute">
      <ul class="flex divide-x divide-solid divide-[#69cdee]">
        <li class="">
          <Link
            className="inline-block px-4 py-2 font-semibold text-[#69cdee] hover:text-sky-500"
            to="/RawJsonInput"
          >
            Raw JSON
          </Link>
        </li>
        <li class="">
          <Link
            className="inline-block px-[.9rem] py-2 font-semibold text-[#69cdee] hover:text-sky-500"
            to="/IPFSinput"
          >
            Ipfs
          </Link>
        </li>
        <li class="">
          <Link
            className="inline-block px-[.9rem] py-2 font-semibold text-[#69cdee]  hover:text-sky-500"
            to="/FileInput"
          >
            File
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default NavBar
