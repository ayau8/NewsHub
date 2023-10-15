import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import NewsGrid from '../components/NewsGrid'

function AnySearch({ country, setCountry }) {
  const [searchResult, setSearchResult] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchHide, setSearchHide] = useState(true)
  const [filterData, setFilterData] = useState([])
  const [startDate, setStartDate] = useState('2023-10-13')
  const [endDate, setEndDate] = useState('2023-10-13')
  const [sortBy, setSortBy] = useState('publishedAt')

  const MY_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const searchTerm = searchInput || 'Apple'
    fetch(`https://newsapi.org/v2/everything?language=en&pageSize=10&q="${searchTerm}"&from=${startDate}&to=${endDate}&sortBy=${sortBy}&apiKey=${MY_KEY}`)
      .then(res => res.json())
      .then(data => {
        setSearchResult(data.articles)
        setFilterData(data.articles)
      })
      .catch(err => console.log(err))
  }, [searchInput, startDate, endDate, sortBy])


  const sortings = [
    { id: 1, name: "PublishedAt", value: "publishedAt" },
    { id: 2, name: "Relevancy", value: "relevancy" },
    { id: 3, name: "Popularity", value: "popularity" },
  ]

  const handleFilter = value => {
    setSearchHide(false)
    setSearchInput(value)
    if (filterData) {
      const res = filterData.filter(item => item.title && item.title.toLowerCase().includes(value.toLowerCase()));
      setSearchResult(res);
    }
  }

  return (
    <div className="App mx-auto">
      <div className="items-center dark:bg-sky-950 dark:text-white">
        <SideBar
          country={country}
          setCountry={setCountry} />
        <div className="h-screen mt-9 w-11/12 mx-auto">
          <h1 className="font-extrabold mt-16 ml-3 text-5xl">Search</h1>

          <div className="bg-gray-700/95 my-10 rounded-3xl mx-auto">
            <div className="p-5 text-lg text-center">
              <input
                type="text"
                placeholder="Search keywords..."
                className={`p-3 w-4/6 mt-4 border rounded-xl bg-sky-100`}
                onChange={e => handleFilter(e.target.value)} />
            </div>
            <div className="text-center h-24 mt-4">

              <input
                type="date"
                className={`p-3 mr-10 w-1/6 border rounded-xl text-ml dark: text-black`}
                onChange={e => setStartDate(e.target.value)} />

              <input
                type="date"
                className={`p-3 mr-10 w-1/6 border rounded-xl text-ml dark: text-black`}
                onChange={e => setEndDate(e.target.value)} />

              <select
                className={`p-3 mr-10 w-1/6 border rounded-xl text-ml dark: text-black`}
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
                className="border bg-yellow-400 hover:bg-sky-300 duration-300 text-black font-bold p-3 rounded-xl text-mg"
              // onClick={e => handleFilter(e.target.value)}
              >
                Submit
              </button>


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
    </div >
  )
}


export default AnySearch
