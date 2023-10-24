import React, { useState } from 'react'
import USA from "../image/usa.png"
import China from "../image/china.png"
import Hong from "../image/hong.png"
import UK from "../image/UK.png"
import Japan from "../image/japan.png"

function Country({ country, setCountry }) {
  const [activeCountry, setActiveCountry] = useState(1)

  const countries = [
    { id: 1, name: "US", value: "us", src: USA },
    { id: 2, name: "CN", value: "cn", src: China },
    { id: 3, name: "HK", value: "hk", src: Hong },
    { id: 4, name: "JP", value: "jp", src: Japan },
  ]

  function onClick(id, value) {
    setActiveCountry(id)
    setCountry(value)
  }

  return (
    <div>
      <nav className="country mt-10">
        <ul className="flex justify-start ml-4">
          {countries.map(country => (
            <li
              key={country.id}
              className={`text-gray-300 cursor-pointer`}
              onClick={() => onClick(country.id, country.value)}
            >
              <div className={`flex mr-8 text-center justify-center items-center rounded-md country`}>
                <img
                  src={country.src}
                  className={`cursor-pointer duration-500 h-12 w-12 hover:scale-125 ${activeCountry === country.id ? "grayscale-0" : "grayscale"}`}
                  alt=" " />
                <span className={` text-slate-500 text-xl ml-4 country-name dark:text-white`}>{country.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav >
    </div>
  )
}

export default Country
