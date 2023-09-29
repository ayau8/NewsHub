import React, { useState, useEffect } from 'react'
import { UilAngleRight } from '@iconscout/react-unicons'
import Menu from './components/Menu'
import Country from './components/Country'
import Search from './components/Search'
import NewsGrid from "./components/NewsGrid"
import Logo from "./image/logo.png"
import Bookmark from "./image/bookmark.png"
import Sun from "./image/sun.png"
import Moon from "./image/moon.png"

function App() {
  const [items, setItems] = useState([])
  const [techCrunchNews, setTechCrunchNews] = useState([])
  const [activeCountry, setActiveCountry] = useState(1)
  const [country, setCountry] = useState("us")
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("light")


  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6e09b99946874e6fbbc5b4b9aea77c73`)
      .then(res => res.json())
      .then(data => setItems(data.articles))

    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6e09b99946874e6fbbc5b4b9aea77c73`)
      .then(res => res.json())
      .then(data => setTechCrunchNews(data.articles))
  }, [country, category])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="App">
      <div className="flex overflow-hidden bg-white dark:bg-sky-950 dark:text-white">
        <div className={`${open ? "w-72" : "w-28"} duration-300 ml-5 h-screen rounded-3xl p-5 pt-12 bg-sky-900/90 dark:bg-gray-400/80 relative `}>
          < UilAngleRight
            className={`absolute cursor-pointer rounded-full -right-5 top-20 w-7 border-4 border-sky-950 p-2 bg-gray-200 ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            style={{ color: "#362f9d", width: '40px', height: '40px' }} />
          <div className="flex gap-x-4 items-center">
            <img
              src={Logo}
              className={`cursor-pointer duration-500 h-16 w-16`}
              alt=" " />
            <h1 className={`text-white origin-left font-bold text-3xl duration-300 ${!open && "scale-0"}`}>NewsHub</h1>
          </div>
          <div className="mt-20">
            <Country
              open={open}
              activeCountry={activeCountry}
              setActiveCountry={setActiveCountry}
              setCountry={setCountry} />
          </div>
          <div className="flex gap-x-4 items-center pt-96 pl-2">
            <img
              src={Bookmark}
              className={`cursor-pointer duration-500 h-12 w-12`}
              alt=" " />
          </div>
          <div className="flex gap-x-4 items-center pt-8 pl-4">
            <img
              src={`${theme === "dark" ? Sun : Moon}`}
              className={`cursor-pointer duration-500 h-9 w-9`}
              onClick={handleThemeSwitch}
              alt=" " />
          </div>
        </div>
        <div className="flex-1 h-screen mt-9 overflow-y-auto">
          {/* <div className="search-bar-container">
            <Search />
          </div> */}
          <Menu
            active={active}
            setActive={setActive}
            setCategory={setCategory} />
          <h1 className="subtitle">Global News</h1>
          <NewsGrid items={items} />
          <h1 className="subtitle">TechCrunch News</h1>
          <NewsGrid items={techCrunchNews} />
        </div>
      </div>
    </div >
  );
}

export default App;
