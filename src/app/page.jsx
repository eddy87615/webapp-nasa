import Link from 'next/link';

export default function Home() {
  const btinfo = [
    {
      txt: 'Astronomy Picture of the day',
      link: '/astronomy',
    },
    {
      txt: 'Mars Rover',
      link: '/marsRover',
    },
    {
      txt: 'NASA Library',
      link: '/library',
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
      <p className="text-white text-center text-[0.8rem]">
        The National Aeronautics and Space Administration is an independent
        agency of the U.S. federal government responsible for the civil space
        program, aeronautics research, and space research.
      </p>
      <ul className="flex flex-col gap-10 mt-[15%]">
        {btinfo.map((inner, index) => (
          <li key={index}>
            <Link
              href={inner.link}
              className="text-white text-center w-[80%] flex justify-center items-center
              border-4 mx-auto py-6 rounded-2xl"
            >
              {inner.txt}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
