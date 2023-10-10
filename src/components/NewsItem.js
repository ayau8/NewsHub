import React, { useState } from 'react'
import BlackHeart from '../image/blackheart.png'
import RedHeart from '../image/redheart.png'

function NewsItem({ item, id, addBookmark }) {
  const websiteUrl = item.url
  const website = websiteUrl.split('https://').pop().split('/')[0]

  const date = item.publishedAt
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', '')

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {

    if (isBookmarked === false) {
      setIsBookmarked(!isBookmarked);
      addBookmark({ title: item.title, description: item.description, url: item.url })
    } else {
      setIsBookmarked(!isBookmarked);
    };
  };

  return (
    item.urlToImage ? (
      <div className="article backdrop-blur-xl">
        <a href={item.url} className="article backdrop-blur-xl">
          <div className="article-image" >
            <img src={item.urlToImage} alt={item.title} />
          </div>
          <div className="article-title font-extrabold bg-gray-700/80 text-white rounded-md p-3 mt-2 text-xl">
            <h1>{item.title}</h1>
          </div>
        </a >
        <div className="article-content">
          <p className="article-description">
            {item.description}
          </p>
          <div className="article-details">
            <small><b>Published At: </b>{formatTime}</small>
          </div>
        </div>
        <div className="flex justify-between px-3">
          <div className="article-source">
            <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,CURL&url=http://${website}&size=20`} alt={item.source.id} /> <span>{item.source.name}</span>
          </div>
          <div className="bookmark">
            <img
              src={isBookmarked ? RedHeart : BlackHeart}
              className="h-10 w-10 hover:scale-125 cursor-pointer duration-500"
              onClick={toggleBookmark}
              alt=" "
            />
          </div>
        </div>
      </div>
    ) : null
  )
}

export default NewsItem
