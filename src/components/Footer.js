import React, { useState, useEffect } from 'react'
// import { UilAngleRight } from '@iconscout/react-unicons'
// import { Link } from 'react-router-dom';
import Telephone from "../image/telephone.png"

function Footer() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }

  return (
    <div className="flex justify-end bg-gray-700 dark:bg-sky-50 h-28 w-11/12 mx-auto rounded-lg p-8 my-16 ">
      <div className="flex items-center">
        <ul>
          <li
            className={`text-gray-300 text-middle flex items-center cursor-pointer p-2 rounded-md hover:bg-sky-200 mr-3`}>
            <div className="flex items-center">
              <img
                src={Telephone}
                className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125`}
                alt=" " />
              <span className={`text-gray-300 pl-4 mt-1 flex text-xl dark:text-black contactus`}>Contact Us</span>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Footer
