import React, { useState, useEffect } from 'react'
import { UilAngleRight } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';
import Logo from "../image/logo.png"
import Bookmark from "../image/bookmark.png"
import TechCrunch from "../image/techcrunch.png"
import Search from "../image/search.png"
import Sun from "../image/sun.png"
import Moon from "../image/moon.png"

function SideBar({ country, setCountry }) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex justify-between bg-gray-700 dark:bg-sky-50 h-28 w-11/12 mt-10 mx-auto relative rounded-lg p-8">
      {/* < UilAngleRight
        className={`absolute cursor-pointer rounded-full -right-5 top-20 w-7 border-4 border-sky-950 p-2 bg-gray-200 ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        style={{ color: "#362f9d", width: '40px', height: '40px' }} /> */}
      <div className="flex gap-x-4 items-center">
        <Link to="/">
          <div className="flex items-center">
            <img
              src={Logo}
              className={`cursor-pointer duration-500 h-16 w-16`}
              alt=" " />
            <h1 className={`text-white origin-left font-bold text-3xl pl-4 dark:text-black`}>NewsHub</h1>
          </div>
        </Link>
      </div>

      {/* <div className="flex items-center">
        <ul>
          <li
            className={`text-gray-300 text-middle flex items-center cursor-pointer p-2 rounded-md hover:bg-sky-200`}>
            <Link to="/techcrunch">
              <div className="flex items-center">
                <img
                  src={TechCrunch}
                  className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125`}
                  alt=" " />
                <span className={`text-gray-300 pl-4 mt-1 flex text-xl dark:text-black`}>TechCrunch</span>
              </div>
            </Link>
          </li>
        </ul>
      </div> */}

      <div className="flex items-center">
        <ul>
          <li
            className={`text-gray-300 text-middle flex items-center gap-x-8 cursor-pointer p-2 rounded-md hover:bg-sky-200 search`}>
            <Link to="/search">
              <div className="flex items-center">
                <img
                  src={Search}
                  className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125 fill-white`}
                  alt=" " />
                <span className={`text-gray-300 pl-4 mt-1 flex text-xl dark:text-black`}>Search</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <Link to="/bookmark">
          <div className="text-gray-300 text-middle flex items-center cursor-pointer rounded-md hover:bg-sky-200 bookmark">
            <img
              src={Bookmark}
              className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125`}
              alt=" " />
            <span className={`text-gray-300 pl-4 mt-1 flex text-xl dark:text-black`}>Bookmark</span>
          </div>
        </Link>
      </div>

      <div className="flex items-center">
        <img
          src={`${theme === "dark" ? Sun : Moon}`}
          className={`cursor-pointer duration-500 h-9 w-9 hover:scale-125 mode`}
          onClick={handleThemeSwitch}
          alt=" " />
        {/* <span className={` text-slate-500 pl-6 flex text-xl`}>Mode</span> */}
      </div>
    </div >
  )
}

export default SideBar
