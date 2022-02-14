import { Outlet, NavLink } from "react-router-dom"

const NavBar = () => {

  return (
    <div>
      <ul class="flex border-b">
        <li class="-mb-px-px mr-1">
          <NavLink activeClassName="text-red-500" className="inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" to="/RawJsonInput">Raw JSON</NavLink>
        </li>
        <li class="mr-1">
          <NavLink className="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/IPFSinput">Ipfs</NavLink>
        </li>
        <li class="mr-1">
          <NavLink className="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/FileInput">File</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default NavBar