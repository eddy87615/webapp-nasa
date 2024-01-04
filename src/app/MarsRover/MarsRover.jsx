import Back from '../Back/Back';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function MarsRover() {
  const [mars, setMars] = useState([]);
  useEffect(() => {
    const marsPic = async () => {
      try {
        const roverResponse = await fetch(
          'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=mrQDAufdFomWkLGpaRyMRdelGmAMAqZCwTHtgTeX'
        );
        const roverData = await roverResponse.json();
        const latest = roverData.rover.max_sol;

        const picResponse = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${latest}&api_key=mrQDAufdFomWkLGpaRyMRdelGmAMAqZCwTHtgTeX`
        );
        const picData = await picResponse.json();

        setMars(picData.photos);
      } catch (error) {
        console.error('ERROR', error);
      }
    };
    marsPic();
  }, []);

  return (
    <>
      <Back />
      <div
        className="overflow-auto h-[90dvh] py-6
        flex flex-col gap-[2%] relative"
      >
        <h2 className="text-white text-[2rem] font-semibold text-center">
          Mars Rover
        </h2>
        <ul>
          {mars.map((photo) => (
            <div key={photo.id}>
              <li>
                <Image
                  src={photo.img_src}
                  alt={`Sol ${photo.sol} - ${photo.id}`}
                  width={500}
                  height={500}
                />
              </li>
              <li>{photo.earth_date}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
