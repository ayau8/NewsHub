import React from 'react'

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center mt-8">
      {
        pages.map((page, index) => {
          return <button key={index} className={`text-white dark:text-gray-900 bg-gray-700 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-100 dark:hover:bg-gray-200 focus:outline-none dark:focus:ring-gray-800 mx-2`} onClick={() => setCurrentPage(page)}>
            {page}</button>
        })
      }
    </div >
  )
}

export default Pagination
