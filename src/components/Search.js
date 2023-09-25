import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=68d30108d9ba47ddb7184f4ad79e9f97`)
      .then(res => res.json())
      .then(data => {
        setFilterData(data.articles);
      })
  })

  const handleFilter = value => {
    const res = filterData.filter(f => f.title.includes(value))
    setData(res)
  }

  return (
    // <form onSubmit={(e) => e.preventDefault()}>
    <div className="search-top">
      <div className="searchwrapper">
        <FaSearch />
        <input
          type="text"
          placeholder="Type to search..."
          onChange={e => handleFilter(e.target.value)}
        />
      </div>
      <div>
        {data.map((d, index) => (
          <div key={index} className="search-result">
            {d.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
