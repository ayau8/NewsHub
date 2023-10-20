import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import Menu from './components/Menu'
import NewsGrid from "./components/NewsGrid"
import Footer from "./components/Footer"
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
  const [postsPerPage] = useState(8)

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex)

  const TESTING_KEY = process.env.REACT_APP_TESTING_KEY

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&max=1&apikey=${TESTING_KEY}`)
        if (!response.ok) {
          throw new Error('Network response was not ok.')
        }
        const data = await response.json()
        setItems(data.articles)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [country, category])

  // .then(res => res.json())
  // .then(data => setItems(data.articles))
  // fetch(`https://newsapi.org/v2/top-headlines?pageSize=36&country=${country}&category=&apiKey=${MY_KEY}`)

  return (
    <div className="App mx-auto dark:bg-sky-900">
      <div className="items-center dark:text-white">
        <SideBar
          currentPage={currentPage}
          postsPerpPage={postsPerPage}
          currentPosts={currentPosts} />
        <div className=" mt-9 w-11/12 mx-auto">
          <div className='relative'>
            {/* <div className="flex justify-between items-start"> */}
            <h1 className="font-extrabold mt-8 ml-3 text-5xl headlines">
              {/* <Typewriter
              words={['Top Headlines']}
                loop={1}
              cursor
                typeSpeed={170}
                deleteSpeed={150} */}
              Top Headlines
            </h1>
            <Country
              country={country}
              setCountry={setCountry} />
            <Menu
              active={active}
              setActive={setActive}
              setCategory={setCategory} />
            {/* <p className="text-center my-5">::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::</p> */}
            {/* <div className="flex justify-between w-7/12 mx-auto items-center"> */}
            <Pagination
              totalPosts={items.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
            />
            {/* </div> */}
          </div>
          <NewsGrid items={currentPosts} />
        </div>
      </div>
      <Footer />
    </div >

  );
}

export default App;
