'use client';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link, Routes } from 'react-router-dom';

import Image from 'next/image';
import Library from '../Library/Library';

export default function Home() {
  const [getCocktail, isGetCocktail] = useState(null);

  async function mycocktail() {
    const res = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    const data = await res.json();
    isGetCocktail(data.drinks[0]);
  }

  useEffect(function () {
    mycocktail();
  }, []);

  //   if (!getCocktail) {
  //     return (
  //       <p className="text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[2rem]">
  //         Loading...
  //       </p>
  //     );
  //   }

  const btinfo = [
    {
      txt: 'Astronomy Picture of the day',
      link: '../Astronomy',
    },
    {
      txt: 'Weather on Mars',
      link: '../Weather',
    },
    {
      txt: 'Mars Rover',
      link: '../MarsRover',
    },
    {
      txt: 'NASA Library',
      link: '../Library',
    },
  ];

  return (
    <div className=" w-full h-full">
      <h1 className="text-white text-[3rem] font-bold text-center pt-20 pb-6 leading-10">
        Explore NASA
        <br />
        <span className="text-[1rem] font-normal">
          Know more about the universe with NASA API.
        </span>
      </h1>
      <p className="text-white text-center text-[0.7rem]">
        The National Aeronautics and Space Administration is an independent
        agency of the U.S. federal government responsible for the civil space
        program, aeronautics research, and space research.
      </p>
      <ul className="flex flex-col gap-10 mt-[15%]">
        {btinfo.map((inner, index) => (
          <li key={index}>
            <Link
              to={inner.link}
              className="text-white text-center w-[80%] flex justify-center items-center 
              border-4 mx-auto py-6 rounded-2xl"
            >
              {inner.txt}
            </Link>
          </li>
        ))}
      </ul>
      {/* <Image src="/favicon-192.png" width={100} height={100} alt="nasa logo" /> */}
    </div>
  );
}
