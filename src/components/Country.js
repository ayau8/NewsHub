import USA from "../image/usa.png"
import China from "../image/china.png"
import Japan from "../image/japan.png"

function Country({ open, setActiveCountry, setCountry }) {
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
            <span className={`${!open && "hidden"} text-slate-500`}>{country.name}</span>
          </li>
        ))}
      </ul>
    </nav >
  )
}

export default Country
