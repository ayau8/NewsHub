import React, { useState } from 'react'
import USA from "../image/usa.png"
import China from "../image/china.png"
import Japan from "../image/japan.png"

function Country({ country, setCountry }) {
  const [activeCountry, setActiveCountry] = useState(1)

  const countries = [
    { id: 1, name: "USA", value: "us", src: USA },
    { id: 2, name: "China", value: "cn", src: China },
    { id: 3, name: "Japan", value: "jp", src: Japan },
  ]

  function onClick(id, value) {
    setActiveCountry(id)
    setCountry(value)
  }

  return (
    <div>
      <nav className="country">
        <ul className="m-5 flex">
          {countries.map(country => (
            <li
              key={country.id}
              className={`text-gray-300 cursor-pointer rounded-md hover:bg-sky-200 mt-5 `}
              onClick={() => onClick(country.id, country.value)}
            >
              <div className="flex-col mr-12 text-center">
                <img
                  src={country.src}
                  className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125`}
                  alt=" " />
                <span className={` text-slate-500 text-xl`}>{country.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav >
    </div>
  )
}

export default Country
