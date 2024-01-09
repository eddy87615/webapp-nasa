import Back from '@/components/Back/Back';
import Image from 'next/image';

export default async function Astronomy() {
  const astronomypic = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=mrQDAufdFomWkLGpaRyMRdelGmAMAqZCwTHtgTeX'
  ).then((res) => res.json());
  if (!astronomypic)
    return (
      <>
        <Back />
        <div>Failed to load</div>
      </>
    );
  return (
    <>
      <Back />
      <div
        className="overflow-auto h-[90dvh] py-6
        flex flex-col gap-[2%]"
      >
        <h2 className="text-white text-[2rem] font-semibold">
          {astronomypic.title}
        </h2>
        <span className="font-normal text-white text-right">
          {astronomypic.date}
        </span>

        <Image
          src={astronomypic.hdurl}
          width={500}
          height={500}
          alt="NASA image for today"
        />

        <p className="text-white leading-[2rem]">{astronomypic.explanation}</p>
      </div>
    </>
  );
}
