import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="bg-gray-200 border-r-2 border-black min-h-screen px-2">
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="/dashboard/overview">OverView</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;