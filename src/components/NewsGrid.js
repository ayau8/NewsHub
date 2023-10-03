import NewsItem from './NewsItem'
import { motion } from "framer-motion";


function NewsGrid({ items }) {
  return (
    <div className="news-grid relative">
      {items.map((item, i) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <NewsItem key={i} item={item} />
        </motion.div>
      ))}
    </div>
  )
}

export default NewsGrid
