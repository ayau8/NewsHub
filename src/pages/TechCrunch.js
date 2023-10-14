import React, { useState, useEffect } from 'react'
import NewsGrid from "../components/NewsGrid"
import SideBar from '../components/SideBar'
import Pagination from '../components/Pagination'

function TechCrunch() {
  const [country, setCountry] = useState("us")
  const [techCrunchNews, setTechCrunchNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = techCrunchNews.slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d886ff34004349b3ae4d9a6024c48407`)
      .then(res => res.json())
      .then(data => setTechCrunchNews(data.articles))
  }, [country])


  return (
    <div className="App">
      <div className="flex overflow-hidden items-center bg-white dark:bg-sky-950 dark:text-white">
        <SideBar
          country={country}
          setCountry={setCountry} />
        <div className="flex-1 h-screen mt-9 overflow-y-auto">
          <h1 className="subtitle">TechCrunch News</h1>
          <Pagination totalPosts={techCrunchNews.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
          <NewsGrid items={currentPosts} />
        </div>
      </div>
    </div>
  )
}

export default TechCrunch
