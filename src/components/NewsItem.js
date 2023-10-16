import React, { useState, useEffect } from 'react'
import BlackHeart from '../image/blackheart.png'
import RedHeart from '../image/redheart.png'
import { bookmarkedArticles } from './BookmarkData'

function NewsItem({ item, id, addBookmark, removeBookmark, bookmarkedArticles }) {
  const websiteUrl = item.url
  const website = websiteUrl.split('https://').pop().split('/')[0]

  const date = item.publishedAt
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', '')

  const title = item.title
  const formatTitle = title.split(" - ")
  const updated_title = formatTitle[0]

  const [clickBookmark, setClickBookmark] = useState(false)
  const [alreadyBookmark, setAlreadyBookmark] = useState(false)

  const isAlreadyBookmarked = bookmarkedArticles.some(bookmark => (
    bookmark.title === item.title
  ));

  useEffect(() => {
    setAlreadyBookmark(isAlreadyBookmarked);
  }, [isAlreadyBookmarked]);

  const toggleBookmark = () => {
    if (!isAlreadyBookmarked) {
      setClickBookmark(true);
      setAlreadyBookmark(true);
      addBookmark({ image: item.urlToImage, title: item.title, description: item.description, url: item.url });
    } else {
      setClickBookmark(false);
      setAlreadyBookmark(false);
      removeBookmark({ image: item.urlToImage, title: item.title, description: item.description, url: item.url });
    }
  };

  return (
    <div className="article backdrop-blur-xl h-full bg-orange-50/90">
      <a href={item.source["url"]}
        className="article backdrop-blur-xl">
        <div className="article-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="article-title rounded-br-2xl font-extrabold bg-gray-700 text-white p-3 mt-2 text-xl">
          <h1>{updated_title}</h1>
        </div>
      </a >
      <div className="article-content">
        <p className="article-description dark:text-white">
          {item.content}
        </p>
        {/* <div className="article-details ">
          <small><b>Published At: </b>{formatTime}</small>
        </div> */}
      </div>
      <div className="flex justify-between px-3 bg-gray-200/70 border mt-3 py-2 dark:bg-white">
        <div className="article-source">
          <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,CURL&url=http://${website}&size=20`} alt={item.source.id} /> <span>{item.source.name}</span>
        </div>
        <div className="bookmark">
          <img
            src={clickBookmark || alreadyBookmark ? RedHeart : BlackHeart}
            className="h-10 w-10 hover:scale-125 cursor-pointer duration-500"
            onClick={toggleBookmark}
            alt=" "
          />
        </div>
      </div>
    </div>
  )
}

export default NewsItem
