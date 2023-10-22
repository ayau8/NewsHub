import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import NewsGrid from '../components/NewsGrid'
import Footer from '../components/Footer'

function AnySearch({ country, setCountry }) {
  const [searchResult, setSearchResult] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchHide, setSearchHide] = useState(true)
  const [filterData, setFilterData] = useState([])
  const [startDate, setStartDate] = useState(Date.now())
  const [endDate, setEndDate] = useState(Date.now())
  const [sortBy, setSortBy] = useState('publishedAt')
  const [searchInputFromSubmit, setSearchInputFromSubmit] = useState('')

  const TESTING_KEY = process.env.REACT_APP_TESTING_KEY

  useEffect(() => {
    const searchTerm = searchInputFromSubmit || 'Apple'
    async function fetchData() {
      try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=${searchTerm}&lang=en&country=us&max=1&sortby=${sortBy}&from=${startDate}&to=${endDate}&apikey=${TESTING_KEY}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResult(data.articles);
        setFilterData(data.articles)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [searchInputFromSubmit, startDate, endDate, sortBy])

  // fetch(`https://newsapi.org/v2/everything?language=en&pageSize=10&q="${searchTerm}"&from=${startDate}&to=${endDate}&sortBy=${sortBy}&apiKey=${MY_KEY}`)
  // .then(res => res.json())
  // .then(data => {
  //   setSearchResult(data.articles)
  //   setFilterData(data.articles)
  // })
  // .catch(err => console.log(err))

  const sortings = [
    { id: 1, name: "PublishedAt", value: "publishedAt" },
    { id: 2, name: "Relevance", value: "relevance" },

  ]

  const handleFilter = value => {
    setSearchHide(false)
    setSearchInput(value)
    if (filterData) {
      const res = filterData.filter(item => item.title && item.title.toLowerCase().includes(value.toLowerCase()));
      setSearchResult(res);
    }
  }

  const handleSubmit = () => {
    setSearchInputFromSubmit(searchInput)
  }

  return (
    <div className="App mx-auto">
      <div className="items-center dark:bg-sky-950 dark:text-white">
        <SideBar
          country={country}
          setCountry={setCountry} />
        <div className="mt-9 w-11/12 mx-auto">
          <h1 className="font-extrabold mt-8 ml-3 text-5xl headlines dark:text-white">Search</h1>

          <div className="bg-gray-700/95 my-10 rounded-3xl mx-auto search-info dark:bg-gray-200/70">
            <div className="p-5 text-lg text-center">
              <input
                type="text"
                placeholder="Search keywords..."
                className={`p-3 w-4/6 mt-4 border rounded-xl bg-sky-100 search-box`}
                onChange={e => handleFilter(e.target.value)}
                value={searchInput} />
            </div>
            <div className="text-center h-24 mt-4 search-categories">
              <input
                type="date"
                className={`p-3 mr-10 w-1/6 border rounded-xl text-ml dark: text-black startdate`}
                onChange={e => setStartDate(e.target.value)} />

              <input
                type="date"
                className={`p-3 mr-10 w-1/6 border rounded-xl text-ml dark: text-black enddate`}
                onChange={e => setEndDate(e.target.value)} />

              <select
                className={`p-3 mr-10 w-1/6 border rounded-xl text-ml dark: text-black sorting`}
                onChange={e => setSortBy(e.target.value)}
              >
                {sortings.map((sorting, index) => (
                  <option
                    key={index}
                    value={sorting.value}
                    className="cursor-pointer">
                    {sorting.name}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="border bg-gray-700/50 text-white dark:bg-gray-200 dark:text-black hover:bg-sky-300 duration-200 font-bold p-3 rounded-xl text-mg submit"
                onClick={handleSubmit}>Submit</button>


              {/* <div className={`${searchHide ? 'invisible' : 'visible'} search-result bg-sky-200 p-3 mr-10 w-3/6 border rounded-xl`}>
                {searchResult
                  .map((item, index) => (
                    <div key={index}>
                      {item.title}
                    </div>
                  ))}
              </div> */}
            </div>
          </div>

          <div className={`${searchHide ? 'invisible' : 'visible'} delay-500`}>
            <NewsGrid items={searchResult} />
          </div>


          {/* <Pagination totalPosts={searchResult.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
          <NewsGrid items={currentPosts} /> */}
          {/* <NewsGrid items={currentPosts} /> */}
        </div>
      </div>
      <Footer />
    </div >
  )
}


export default AnySearch
