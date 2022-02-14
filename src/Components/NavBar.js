import { Outlet, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <ul class="flex border-b">
        <li class="-mb-px-px mr-1">
          <NavLink
            activeClassName="text-red-500"
            className="inline-block rounded-t border-l border-t border-r py-2 px-4 font-semibold text-blue-700"
            to="/RawJsonInput"
          >
            Raw JSON
          </NavLink>
        </li>
        <li class="mr-1">
          <NavLink
            className="inline-block py-2 px-4 font-semibold text-blue-500 hover:text-blue-800"
            to="/IPFSinput"
          >
            Ipfs
          </NavLink>
        </li>
        <li class="mr-1">
          <NavLink
            className="inline-block py-2 px-4 font-semibold text-blue-500 hover:text-blue-800"
            to="/FileInput"
          >
            File
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default NavBar
