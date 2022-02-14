import { Outlet, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <ul class="flex border-b">
        <li class="-mb-px-px mr-1">
          <Link
            className="inline-block rounded-t border-l border-t border-r py-2 px-4 font-semibold text-blue-700"
            to="/RawJsonInput"
          >
            Raw JSON
          </Link>
        </li>
        <li class="mr-1">
          <Link
            className="inline-block py-2 px-4 font-semibold text-blue-500 hover:text-blue-800"
            to="/IPFSinput"
          >
            Ipfs
          </Link>
        </li>
        <li class="mr-1">
          <Link
            className="inline-block py-2 px-4 font-semibold text-blue-500 hover:text-blue-800"
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
