import React, { useState, useEffect } from 'react'
import { UilAngleRight } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';
import Logo from "../image/logo.png"
import Bookmark from "../image/bookmark.png"
import GrayBookmark from "../image/bookmark_gray.png"
import TechCrunch from "../image/techcrunch.png"
import Search from "../image/search.png"
import Sun from "../image/sun.png"
import GraySun from "../image/sun_gray.png"
import Moon from "../image/moon.png"
import Menu from "../image/menu.png"
import GrayMenu from "../image/menu_gray.png"
import Cross from "../image/cross.png"
import GrayCross from "../image/cross_gray.png"

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
    <>
      <div className="flex justify-between bg-gray-700 dark:bg-sky-50 h-28 w-12/12 mx-auto p-4 z-10 w-screen sidebar relative">
        {/* < UilAngleRight
        className={`absolute cursor-pointer rounded-full -right-5 top-20 w-7 border-4 border-sky-950 p-2 bg-gray-200 ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        style={{ color: "#362f9d", width: '40px', height: '40px' }} /> */}
        <div className="flex gap-x-4 items-center logo-info ml-4">
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
            <div className="text-gray-300 text-middle flex items-center cursor-pointer rounded-md hover:bg-sky-200 bookmark-phone">
              <img
                src={`${theme === "dark" ? GrayBookmark : Bookmark}`}
                className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125`}
                alt=" " />
              <span className={`text-gray-300 pl-4 mt-1 flex text-xl dark:text-black`}>Bookmark</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center">
          <img
            src={`${theme === "dark" ? GraySun : Moon}`}
            className={`cursor-pointer duration-500 h-9 w-9 hover:scale-125 mode`}
            onClick={handleThemeSwitch}
            alt=" " />
          {/* <span className={` text-slate-500 pl-6 flex text-xl`}>Mode</span> */}
        </div>
        <div className="flex items-center">
          <div className="text-gray-300 text-middle flex items-center cursor-pointer rounded-md menubar">
            <img
              src={`${open && theme === "dark" ? GrayCross : !open && theme === "dark" ? GrayMenu : Menu}`}
              className={`cursor-pointer duration-500 h-8 w-8 hover:scale-125`}
              onClick={() => setOpen(!open)}
              alt=" " />
          </div>
        </div>
        <div className={`h-fit bg-gray-100 ${open ? "w-64" : "w-0"} backdrop-filter backdrop-blur-xl bg-opacity-50 duration-500 flex absolute z-0 rounded-xl`}>
          <div className="flex-col m-5">
            <Link to="/search">
              <img
                src={Search}
                className={`cursor-pointer duration-500 h-8 w-8 hover:scale-125 fill-white mt-5 mb-3`}
                alt=" " />
              <span className={`text-gray-300 text-xl dark:text-black ${open ? "text-gray-800" : "hidden"}`}>Search</span>
            </Link>
            <Link to="/bookmark">
              <img
                src={Bookmark}
                className={`cursor-pointer duration-500 h-8 w-8 hover:scale-125 fill-white mt-5 mb-3`}
                alt=" " />
              <span className={`text-gray-300 text-xl dark:text-black ${open ? "text-gray-800" : "hidden"}`}>Bookmark</span>
            </Link>
            <img
              src={`${theme === "dark" ? Sun : Moon}`}
              className={`cursor-pointer duration-500 h-8 w-8 hover:scale-125 fill-white mt-5 mb-3`}
              onClick={handleThemeSwitch}
              alt=" " />
            <span className={`text-gray-300 text-xl dark:text-black ${open ? "text-gray-800" : "hidden"}`}>Mode</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
