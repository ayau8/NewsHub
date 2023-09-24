import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  // const [input, setInput] = useState("");

  // const fetchData = value => {
  //   fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=6e09b99946874e6fbbc5b4b9aea77c73`),
  //   .then ((response) => response.json())
  // }

  // const handleChange = value => {
  //   setInput(value)
  //   fetchData(value)
  // }

  return (
    // <form onSubmit={(e) => e.preventDefault()}>
    <div className="searchwrapper">
      <FaSearch />
      <input
        type="text"
        placeholder="Type to search..."
      // value={input}
      // onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default Search
