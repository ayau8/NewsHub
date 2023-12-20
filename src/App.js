import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import Menu from './components/Menu'
import NewsGrid from "./components/NewsGrid"
import Footer from "./components/Footer"
import SideBar from './components/SideBar'
import Pagination from './components/Pagination'
import { Typewriter } from 'react-simple-typewriter'
import { current } from '@reduxjs/toolkit'
import Logo from "./image/logo.png"
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [country, setCountry] = useState("us")
  const [category, setCategory] = useState("general")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)
  // const [loading, setLoading] = useState(false)

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex)

  const TESTING_KEY = process.env.REACT_APP_TESTING_KEY

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)
  // }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        // setLoading(true)
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&max=1&apikey=${TESTING_KEY}`)
        if (!response.ok) {
          throw new Error('Network response was not ok.')
        } else {
          const data = await response.json()
          setItems(data.articles)
          // setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [country, category])

  // .then(res => res.json())
  // .then(data => setItems(data.articles))
  // fetch(`https://newsapi.org/v2/top-headlines?pageSize=36&country=${country}&category=&apiKey=${MY_KEY}`)

  return (
    <div className="App mx-auto dark:bg-sky-900 flex flex-col min-h-screen">
               <div className="items-center dark:text-white">
            <SideBar
              currentPage={currentPage}
              postsPerpPage={postsPerPage}
              currentPosts={currentPosts} />
            <div className=" mt-9 w-11/12 mx-auto">
              <div className='relative text-left'>
                {/* <div className="flex justify-between items-start"> */}
                <h1 className="font-extrabold mt-8 ml-3 text-5xl headlines dark:text-white">
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
            <Footer />
          </div>
    </div >
  );
}

export default App;


// {loading ?
//   <div>
//     <BounceLoader
//       color={'#F37A24'}
//       loading={loading}
//       size={80}
//     />
//     {/* <Typewriter
//       words={['NewsHub']}
//       loop={1}
//       cursor
//       typeSpeed={180}
//       deleteSpeed={150}
//       size={100}
//     /> */}
//   </div> :
