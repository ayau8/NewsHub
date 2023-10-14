import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
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
    <div className="App">
      <div className="flex overflow-hidden items-center bg-white dark:bg-sky-950 dark:text-white">
        <SideBar
          country={country}
          setCountry={setCountry} />
        <div className="flex-1 h-screen mt-9 overflow-y-auto">
          <h1 className="subtitle">Bookmarks</h1>
          {/* <Pagination totalPosts={techCrunchNews.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} /> */}
          {/* <NewsGrid items={currentPosts} /> */}
          <div>

            <ul className="grid grid-cols-3 gap-8 h-1/6 m-20">
              {bookmark_deserialized
                .filter(article => article !== null)
                .reverse()
                .map((article) => (
                  <li key={article.id}>
                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.description}</p>
                      <a href={article.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        For details
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmark
