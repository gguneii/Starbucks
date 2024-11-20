import { NavLink } from "react-router-dom"

function MenuLists() {
  return (
    <nav className="bg-[#f9f9f9] w-full border-y ">
    <div className="lg:max-w-[1500px] mx-auto custom:pl-[115px] px-[1rem]">
      <ul className="menu-lists flex gap-3 w-full py-1">
        <li>
          <NavLink
            to={"/menu"}
            className="inline-block pb-2 my-[.6rem] text-[#000000de] text-[14px] font-semibold"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/featured"}
            className="inline-block pb-2 my-[.6rem] text-[#000000de] text-[14px] font-semibold"
          >
            Featured
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/previous"}
            className="inline-block pb-2 my-[.6rem] text-[#000000de] text-[14px] font-semibold"
          >
            Previous
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="inline-block pb-2 my-[.6rem] text-[#000000de] text-[14px] font-semibold"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>

  )
}

export default MenuLists