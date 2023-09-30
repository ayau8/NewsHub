import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from "./components/NewsGrid"
import SideBar from './components/SideBar'

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [country, setCountry] = useState("us")
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6e09b99946874e6fbbc5b4b9aea77c73`)
      .then(res => res.json())
      .then(data => setItems(data.articles))
  }, [country, category])

  return (
    <div className="App">
      <div className="flex overflow-hidden bg-white dark:bg-sky-950 dark:text-white">
        <SideBar
          country={country}
          setCountry={setCountry} />
        <div className="flex-1 h-screen mt-9 overflow-y-auto">
          <Menu
            active={active}
            setActive={setActive}
            setCategory={setCategory} />
          <h1 className="subtitle">Global News</h1>
          <NewsGrid items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
