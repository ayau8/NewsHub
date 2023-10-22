import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import Footer from "../components/Footer"
import Pagination from '../components/Pagination'
import NewsGrid from '../components/NewsGrid'

function Bookmark() {
  const [country, setCountry] = useState("us")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = techCrunchNews.slice(firstPostIndex, lastPostIndex
  let bookmark_deserialized = JSON.parse(localStorage.getItem("Bookmarks"));


  return (
    <div className="App mx-auto">
      <div className="items-center dark:bg-sky-950 dark:text-white">
        <SideBar
          country={country}
          setCountry={setCountry} />
        <div className="mt-9 w-11/12 mx-auto">
          <h1 className="font-extrabold mt-8 ml-3 text-5xl headlines dark:text-white">Bookmarks</h1>
          {/* <Pagination totalPosts={techCrunchNews.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} /> */}
          {/* <NewsGrid items={currentPosts} /> */}
          <div>
            <ul className="news-grid relative">
              {bookmark_deserialized
                .filter(article => article !== null)
                .reverse()
                .map((article) => (
                  <li key={article.id}>
                    <div className="article  bg-orange-50/90 dark:bg-gray-500">
                      <div className="article-image">
                        <img src={article.image} alt={article.title} />
                      </div>
                      <div className="article-title rounded-br-2xl font-extrabold bg-gray-700 text-white p-3 mt-2 text-xl">{article.title}</div>
                      <p className="article-description dark:text-white text-left pl-3 mt-3">{article.description}</p>
                      <div className="flex justify-end mr-3 mt-2">
                        <a href={article.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800 dark:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-80 w-fit">
                          For details
                          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Bookmark
