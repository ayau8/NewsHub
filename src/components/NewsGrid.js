import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import { motion } from "framer-motion";
import { bookmarkedArticles, deserializedArticles } from './BookmarkData'


function NewsGrid({ items }) {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Bookmarks"));
    if (storedData) {
      setBookmarkedArticles(storedData);
    }
  }, []);

  const addBookmark = article => {
    if (!bookmarkedArticles.some(bookmark => bookmark.title === article.title)) {
      const updatedBookmarks = [...bookmarkedArticles, article];
      setBookmarkedArticles(updatedBookmarks);
      localStorage.setItem("Bookmarks", JSON.stringify(updatedBookmarks));
    }
  };

  const removeBookmark = article => {
    const isArticleInBookmarks = bookmarkedArticles.some(bookmark => bookmark.title === article.title);
    if (isArticleInBookmarks) {
      const updatedData = bookmarkedArticles.filter(bookmark => bookmark.title !== article.title);
      setBookmarkedArticles(updatedData);
      localStorage.setItem("Bookmarks", JSON.stringify(updatedData));
    }
  };


  // const removeBookmark = article => {
  //   const temp = { ...bookmarkedArticles };
  //   delete temp(article)
  //   return temp;

  // }

  return (
    <div className="news-grid relative">
      {items
        .filter(item => item.image)
        .map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 100, rotate: 0 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <NewsItem
              item={item}
              id={item.id}
              addBookmark={addBookmark}
              removeBookmark={removeBookmark}
              bookmarkedArticles={bookmarkedArticles} />
          </motion.div>
        ))}
    </div>
  )
}


export default NewsGrid
