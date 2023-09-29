import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResult, setSelectedResult] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=bf3aaadad8bb4a659eeabcf555c66ac0')
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
        setSearchResults(data.articles);
      });
  }, []);

  const handleFilter = (value) => {
    setSearchFilter(value);
    const res = data.filter((article) =>
      article.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(res);
  };

  const handleSearch = () => {
    setSearchResults(data);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result.title);
    setSearchFilter('')
    setSearchResults([result])
    setSearchVisible(false)
  };

  return (
    <div className="search-top">
      <div className="searchwrapper">
        <FaSearch />
        <input
          type="text"
          placeholder="Type to search..."
          value={searchFilter}
          onChange={(e) => handleFilter(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchVisible && (
        <div>
          {searchResults.map((d, index) => (
            <div
              key={index}
              className="search-result"
              onClick={() => handleResultClick(d)}
            >
              {d.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
