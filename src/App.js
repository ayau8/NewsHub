import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from "./components/NewsGrid"
import SideBar from './components/SideBar'
import Pagination from './components/Pagination'
import { Typewriter } from 'react-simple-typewriter'
import { current } from '@reduxjs/toolkit'

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [country, setCountry] = useState("us")
  const [category, setCategory] = useState("general")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex)

  const MY_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?pageSize=36&country=${country}&category=${category}&apiKey=${MY_KEY}`)
      .then(res => res.json())
      .then(data => setItems(data.articles))
  }, [country, category])

  return (
    <div className="App">
      <div className="flex overflow-hidden items-center bg-white dark:bg-sky-950 dark:text-white">
        <SideBar
          country={country}
          setCountry={setCountry}
          currentPage={currentPage}
          postsPerpPage={postsPerPage}
          currentPosts={currentPosts} />
        <div className="flex-1 h-screen mt-9 overflow-y-auto">
          <div className='relative'>
            <Menu
              active={active}
              setActive={setActive}
              setCategory={setCategory} />
            <h1 className="subtitle">
              <Typewriter
                words={['Top Headlines']}
                loop={1}
                cursor
                typeSpeed={170}
                deleteSpeed={150}
              />
            </h1>
            <Pagination totalPosts={items.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
          </div>
          <NewsGrid items={currentPosts} />
        </div>
      </div>
    </div >
  );
}

export default App;
