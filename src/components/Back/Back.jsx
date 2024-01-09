import Link from 'next/link';
import { TiArrowBack } from 'react-icons/ti';

export default function Back() {
  return (
    <Link href="/" className="flex">
      <TiArrowBack className="text-white w-[10%] h-[10%]" />
    </Link>
  );
}
