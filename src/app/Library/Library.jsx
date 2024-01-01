import Back from '../Back/Back';
import './Library.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Library() {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [randomPic, setRandomPic] = useState([]);

  useEffect(() => {
    const fetchRandomPic = async () => {
      try {
        const response = await fetch(
          'https://images-api.nasa.gov/search?q=random'
        );
        const data = await response.json();
        if (data.collection.items.length > 0) {
          setRandomPic(data.collection.items);
        } else {
          setRandomPic([]);
        }
      } catch (error) {
        console.error('ERRPR', error);
      }
    };
    fetchRandomPic();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${query}`
      );
      const data = await response.json();
      if (data.collection.items.length > 0) {
        setSearchResult(data.collection.items);
      } else {
        setSearchResult([]);
      }
    } catch (error) {
      console.error('ERROR', error);
    }
  };
  return (
    <>
      <Back />
      <div
        className="overflow-auto h-[90dvh] py-6
        flex flex-col gap-[2%]"
      >
        <h2 className="text-white text-[2rem] font-semibold text-center">
          NASA Library
        </h2>
        <input
          type="text"
          placeholder="Enter Key Words"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-4"
        />
        <button onClick={handleSearch}>SEARCH</button>
        <ul>
          {query === ''
            ? randomPic.map((result, index) => (
                <li key={index} className="randompic">
                  {result.links && result.links[0] && result.links[0].href && (
                    <Image
                      src={result.links[0].href}
                      alt={result.data[0].title}
                      width={500}
                      height={500}
                    />
                  )}
                </li>
              ))
            : searchResult.map((result, index) => (
                <li key={index}>
                  <Image
                    src={result.links[0].href}
                    alt={result.data[0].title}
                    width={500}
                    height={500}
                  />
                </li>
              ))}
        </ul>
      </div>
    </>
  );
}
