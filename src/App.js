import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from "./components/NewsGrid"

function App() {
  const [items, setItems] = useState([])
  const [techCrunchNews, setTechCrunchNews] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6e09b99946874e6fbbc5b4b9aea77c73`)
      .then(res => res.json())
      .then(data => setItems(data.articles))

    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6e09b99946874e6fbbc5b4b9aea77c73`)
      .then(res => res.json())
      .then(data => setTechCrunchNews(data.articles))
  }, [category])

  return (
    <div className="App">
      <h1 className="title">NEWS</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
      <NewsGrid items={techCrunchNews} />
    </div>
  );
}

export default App;
