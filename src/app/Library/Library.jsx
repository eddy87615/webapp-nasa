import { BrowserRouter, Route, Switch, Link, Routes } from 'react-router-dom';

export default function Library() {
  return (
    <Link
      to="/"
      className="text-white text-center w-[80%] flex justify-center items-center 
border-4 mx-auto py-6 rounded-2xl"
    >
      BACK
    </Link>
  );
}
