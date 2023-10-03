import React from 'react'

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center">
      {
        pages.map((page, index) => {
          return <button key={index} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-2`} onClick={() => setCurrentPage(page)}>
            {page}</button>
        })
      }
    </div >
  )
}

export default Pagination
