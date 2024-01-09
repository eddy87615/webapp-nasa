import Back from '@/components/Back/Back';
import Image from 'next/image';

export default async function MarsRover() {
  const prev = await fetch(
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=mrQDAufdFomWkLGpaRyMRdelGmAMAqZCwTHtgTeX'
  ).then((res) => res.json());
  const latest = prev.rover.max_sol;
  const { photos: mars } =
    (await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${latest}&api_key=mrQDAufdFomWkLGpaRyMRdelGmAMAqZCwTHtgTeX`
    ).then((res) => res.json())) ?? [];
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
        <ul className="flex flex-col gap-[2rem]">
          {mars.map((photo) => (
            <div key={photo.id} className="text-white">
              <li>
                <Image
                  src={photo.img_src}
                  alt={`Sol ${photo.sol} - ${photo.id}`}
                  width={500}
                  height={500}
                />
              </li>
              <li>Earth Date: {photo.earth_date}</li>
              <li>Camera Name: {photo.camera.full_name}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
