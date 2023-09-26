import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import Menu from './components/Menu'
import Country from './components/Country'
import Search from './components/Search'
import NewsGrid from "./components/NewsGrid"

function App() {
  const [items, setItems] = useState([])
  const [techCrunchNews, setTechCrunchNews] = useState([])
  const [activeCountry, setActiveCountry] = useState(1)
  const [country, setCountry] = useState("us")
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6e09b99946874e6fbbc5b4b9aea77c73`)
      .then(res => res.json())
      .then(data => setItems(data.articles))

    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6e09b99946874e6fbbc5b4b9aea77c73`)
      .then(res => res.json())
      .then(data => setTechCrunchNews(data.articles))
  }, [country, category])

  return (
    <div className="App">
      <div className="Landing">
        <h1 className="title">
          <FontAwesomeIcon
            icon={faNewspaper}
            className="bounce"
            style={{ color: "#362f9d" }} /> Daily Hits
        </h1>
        <div className="search-bar-container">
          <Search />
        </div>
      </div>
      <Country activeCountry={activeCountry} setActiveCountry={setActiveCountry} setCountry={setCountry} />
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <h1 className="subtitle">Global News</h1>
      <NewsGrid items={items} />
      <h1 className="subtitle">TechCrunch News</h1>
      <NewsGrid items={techCrunchNews} />
    </div>
  );
}

export default App;
