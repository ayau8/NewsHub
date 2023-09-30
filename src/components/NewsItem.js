function NewsItem({ item }) {
  const websiteUrl = item.url
  const website = websiteUrl.split('https://').pop().split('/')[0]

  const date = item.publishedAt
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', '')

  return (
    item.urlToImage ? (
      <a href={item.url} className="article">
        <div className="article-image" >
          <img src={item.urlToImage} alt={item.title} />
        </div>
        <div className="article-content">
          <div className="article-title font-extrabold bg-sky-950/80 text-white rounded-md p-3">
            <h1>{item.title}</h1>
          </div>
          <p className="article-description">
            {item.description}
          </p>
          <div className="flex space-x-1">
            <div className="article-details">
              <small><b>Published At: </b>{formatTime}</small>
            </div>
            <div className="article-source">
              <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,CURL&url=http://${website}&size=20`} alt={item.source.id} /> <span>{item.source.name}</span>
            </div>
          </div>
        </div>
      </a>
    ) : null
  )
}

export default NewsItem
