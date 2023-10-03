import React, { useState } from 'react'
import Heart from '../image/heart.png'

function NewsItem({ item }) {
  const websiteUrl = item.url
  const website = websiteUrl.split('https://').pop().split('/')[0]

  const date = item.publishedAt
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', '')

  return (
    item.urlToImage ? (
      <a href={item.url} className="article backdrop-blur-xl">
        <div className="article backdrop-blur-xl">
          <div className="article-image" >
            <img src={item.urlToImage} alt={item.title} />
          </div>
          <div className="article-title font-extrabold bg-gray-700/80 text-white rounded-md p-3 mt-2 text-xl">
            <h1>{item.title}</h1>
          </div>
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
                src={Heart}
                className="h-10 w-10"
                alt=" " />
            </div>
          </div>
        </div>
      </a >
    ) : null
  )
}

export default NewsItem
