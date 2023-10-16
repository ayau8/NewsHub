import React, { useState, useEffect } from 'react'
import NewsGrid from "../components/NewsGrid"
import SideBar from '../components/SideBar'
import Footer from "../components/Footer"
import Pagination from '../components/Pagination'

function TechCrunch() {
  const [country, setCountry] = useState("us")
  const [techCrunchNews, setTechCrunchNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = techCrunchNews.slice(firstPostIndex, lastPostIndex)

  const MY_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${MY_KEY}`)
      .then(res => res.json())
      .then(data => setTechCrunchNews(data.articles))
  }, [country])


  return (
    <div className="App mx-auto">
      <div className="items-center dark:bg-sky-950">
        <SideBar
          country={country}
          setCountry={setCountry} />
        <div className="mt-9 w-11/12 mx-auto">
          <h1 className="font-extrabold mt-16 ml-3 text-5xl dark:text-white">TechCrunch News</h1>
          <Pagination totalPosts={techCrunchNews.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
          <NewsGrid items={currentPosts} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TechCrunch
