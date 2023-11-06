"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { Alumni_Sans_Inline_One as Alumni, Stalinist_One, Amatic_SC, Rubik_Dirt, Russo_One } from "next/font/google";
import { Dialog, DialogContent } from '@radix-ui/react-dialog';

const amantic = Amatic_SC({
  subsets: ["cyrillic"],
  weight: "400"
});

const rubick = Russo_One({
  subsets: ["cyrillic"],
  weight: "400"
});

type SellCardElementProps = {
    name: string;
    url: string;
    id: string;
    quantity: string;
  }

const SellCardElement = ({
    name,
    url,
    quantity,
    id
}:SellCardElementProps) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(true)} className='flex flex-col justify-between items-center mx-1 my-2 bg-gradient-to-r from-white/70 border-2 border-black to-gray-600/70 w-[180px] h-[310px] rounded-3xl px-3 py-1'>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="text-center outline-none hover:border-none border-none absolute  left-1/2 transform -translate-x-1/2 p-6">
          <div className='h-[340px] bg-gradient-to-r from-white/70 border-2 border-black to-gray-600/70 w-[240px] rounded-2xl'>
            <Image className=' rounded-2xl w-[240px] h-[340px]' width={480} height={680} alt="card" src={`${url}`}/>
          </div>
        </DialogContent>
      </Dialog>
        <div className={`${rubick.className} mt-auto text-base`}>{name}</div>
           

        <div className='w-[160px] h-[220px] rounded-2xl bg-gray-800 '>
            <Image className=' rounded-2xl' width={240} height={340} alt="card" src={`${url}`}/>
        </div>
        <div className={`${amantic.className} text-xl ml-auto`}>Есть: {quantity}</div>
    </div>
  )
}

export default SellCardElement