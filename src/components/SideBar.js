import React from 'react'
import { UilAngleRight } from '@iconscout/react-unicons'
import Logo from "../image/logo.png"

function SideBar({ open, setOpen }) {
  return (
      <div className={`${open ? "w-72" : "w-28"} duration-300 h-screen p-5 pt-12 bg-sky-950 relative`}>
        < UilAngleRight
          className={`absolute cursor-pointer rounded-full -right-5 top-20 w-7 border-2 border-sky-950 p-2 bg-gray-200 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          style={{ color: "#362f9d", width: '40px', height: '40px' }} />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            className={`cursor-pointer duration-500 h-14 w-14`}
            alt=" " />
          <h1 className={`text-white origin-left font-bold text-3xl duration-300 ${!open && "scale-0"}`}>NewsHub</h1>

        </div>
      </div>
  )
}

export default SideBar
