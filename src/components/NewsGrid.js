import React, { useState } from 'react'
import NewsItem from './NewsItem'
import { motion } from "framer-motion";
import { bookmarkedArticles, deserializedArticles } from './BookmarkData'


function NewsGrid({ items }) {

  const addBookmark = article => {
    bookmarkedArticles.push(article);
    let bookmark_serialized = JSON.stringify(bookmarkedArticles);
    localStorage.setItem("Bookmarks", bookmark_serialized);
  };

  // const removeBookmark = article => {
  //   const temp = { ...bookmarkedArticles };
  //   delete temp(article)
  //   return temp;

  // }

  return (
    <div className="news-grid relative">
      {items.map((item, index) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100, rotate: 10 },
            visible: { opacity: 1, y: 0, rotate: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <NewsItem key={index} item={item} id={item.id} addBookmark={addBookmark} />
        </motion.div>
      ))}
    </div>
  )
}


export default NewsGrid
