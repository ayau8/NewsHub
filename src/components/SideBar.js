import React, { useState, useEffect } from 'react'
import { UilAngleRight } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';
import Logo from "../image/logo.png"
import USA from "../image/usa.png"
import China from "../image/china.png"
import Japan from "../image/japan.png"
import Bookmark from "../image/bookmark.png"
import TechCrunch from "../image/techcrunch.png"
import Sun from "../image/sun.png"
import Moon from "../image/moon.png"

function SideBar({ country, setCountry }) {
  const [activeCountry, setActiveCountry] = useState(1)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  const countries = [
    { id: 1, name: "USA", value: "us", src: USA },
    { id: 2, name: "China", value: "cn", src: China },
    { id: 3, name: "Japan", value: "jp", src: Japan },
  ]

  function onClick(id, value) {
    setActiveCountry(id)
    setCountry(value)
  }

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
    <div className={`${open ? "w-72" : "w-28"} duration-300 ml-5 h-screen rounded-3xl p-5 pt-12 bg-sky-900/90 dark:bg-gray-400/80 relative `}>
      < UilAngleRight
        className={`absolute cursor-pointer rounded-full -right-5 top-20 w-7 border-4 border-sky-950 p-2 bg-gray-200 ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        style={{ color: "#362f9d", width: '40px', height: '40px' }} />
      <div className="flex gap-x-4 items-center">
        <Link to="/">
          <div className="flex items-center">
            <img
              src={Logo}
              className={`cursor-pointer duration-500 h-16 w-16`}
              alt=" " />
            <h1 className={`text-white origin-left font-bold text-3xl pl-4 duration-300 ${!open && "scale-0"}`}>NewsHub</h1>
          </div>
        </Link>
      </div>

      <div className="mt-20">
        <nav className="country">
          <ul>
            {countries.map(country => (
              <li
                key={country.id}
                className={`text-gray-300 text-middle flex items-center gap-x-8 cursor-pointer p-2 rounded-md hover:bg-sky-200 mt-4`}
                onClick={() => onClick(country.id, country.value)}
              >
                <img
                  src={country.src}
                  className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125`}
                  alt=" " />
                <span className={`${!open && "hidden"} text-slate-500 text-xl`}>{country.name}</span>
              </li>
            ))}
          </ul>
        </nav >
      </div>
      <div className="flex gap-x-4 items-center pt-64">
        <ul>
          <li
            className={`text-gray-300 text-middle flex items-center gap-x-8 cursor-pointer p-2 rounded-md hover:bg-sky-200 mt-4`}>
            <Link to="/techcrunch">
              <div className="flex items-center">
                <img
                  src={TechCrunch}
                  className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125`}
                  alt=" " />
                <span className={`${!open && "hidden"} text-slate-500 pl-6 flex text-xl`}>TechCrunch</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-x-4 items-center pt-64 pl-2">
        <Link to="/bookmark">
          <div className="flex items-center hover:bg-sky-200 ">
            <img
              src={Bookmark}
              className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125`}
              alt=" " />
            <span className={`${!open && "hidden"} text-slate-500 pl-6 flex text-xl`}>Bookmark</span>
          </div>
        </Link>
      </div>

      <div className="flex gap-x-4 items-center pt-8 pl-4">
        <img
          src={`${theme === "dark" ? Sun : Moon}`}
          className={`cursor-pointer duration-500 h-9 w-9 hover:scale-125`}
          onClick={handleThemeSwitch}
          alt=" " />
        <span className={`${!open && "hidden"} text-slate-500 pl-6 flex text-xl`}>Mode</span>
      </div>
    </div>
  )
}

export default SideBar
