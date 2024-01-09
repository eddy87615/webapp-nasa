'use client';
import Back from '@/components/Back/Back';
import Loading from './loading';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Library() {
  const [query, setQuery] = useState('');
  const [randomPic, setRandomPic] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandomPic = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://images-api.nasa.gov/search?q=random'
        );
        const data = await response.json();

        if (data.collection.items.length > 0) {
          setRandomPic(data.collection.items);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching random picture', error);
      }
    };
    fetchRandomPic();
  }, []);

  const handleSearch = () => {
    setLoading(true);
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.collection.items.length > 0) {
          setSearchResult(data.collection.items);
        } else {
          setSearchResult([]);
        }
      })
      .catch((error) => {
        console.error('ERROR', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Back />
      <div
        className="overflow-auto h-[90dvh] py-6
        flex flex-col gap-[2%] relative"
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
        <button
          onClick={handleSearch}
          className="border-2 rounded-[5rem] border-white p-4 text-white"
        >
          SEARCH
        </button>
        {loading ? (
          <Loading />
        ) : (
          <ul className="flex flex-col gap-[1rem]">
            {query === ''
              ? randomPic.map((result, index) => (
                  <li key={index} className="first:none randompic">
                    {result.links &&
                      result.links[0] &&
                      result.links[0].href && (
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
                    {result.links &&
                      result.links[0] &&
                      result.links[0].href && (
                        <Image
                          src={result.links[0].href}
                          alt={result.data[0].title}
                          width={500}
                          height={500}
                        />
                      )}
                  </li>
                ))}
          </ul>
        )}
      </div>
    </>
  );
}
