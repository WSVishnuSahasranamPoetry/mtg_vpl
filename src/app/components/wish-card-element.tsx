import Image from 'next/image';
import React from 'react'
import { Alumni_Sans_Inline_One as Alumni, Stalinist_One, Amatic_SC, Rubik_Dirt, Russo_One } from "next/font/google";

const amantic = Amatic_SC({
  subsets: ["cyrillic"],
  weight: "400"
});

const rubick = Russo_One({
  subsets: ["cyrillic"],
  weight: "400"
});

type CardElementProps = {
    name: string;
    url: string;
    id: string;
    quantity: string;
  }

const CardElement = ({
    name,
    url,
    quantity,
    id
}:CardElementProps) => {
  return (
    <div className='m-6 bg-white/50 rounded-3xl px-2 py-1'>

            <div className={`${rubick.className} text-xl`}>{name}</div>
           

        <div className='w-[240px] h-[340px] bg-gray-800'>
            <Image width={240} height={340} alt="card" src={`${url}`}/>
        </div>
        <div className={`${amantic.className} text-xl ml-auto`}>Нужно: {quantity}</div>
    </div>
  )
}

export default CardElement