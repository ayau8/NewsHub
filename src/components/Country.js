function Country({ activeCountry, setActiveCountry, setCountry }) {
  const countries = [
    { id: 1, name: "US", value: "us" },
    { id: 2, name: "China", value: "cn" },
    { id: 3, name: "Hong Kong", value: "hk" },
    { id: 4, name: "Japan", value: "jp" },
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
            className={activeCountry === country.id ? "active" : "inactive"}
            onClick={() => onClick(country.id, country.value)}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Country
