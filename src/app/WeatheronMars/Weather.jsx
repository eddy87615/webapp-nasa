import Back from '../Back/Back';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Weather() {
  return (
    <>
      <Back />
      <div
        className="overflow-auto h-[90dvh] py-6
        flex flex-col gap-[2%]"
      >
        <h2 className="text-white text-[2rem] font-semibold">123</h2>
      </div>
    </>
  );
}
