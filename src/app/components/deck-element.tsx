import React from 'react'
import { Stalinist_One } from "next/font/google";


const alumni = Stalinist_One({
  subsets: ["latin"],
  weight: "400",
});


const DeckElement = ({ name, playes, allGamesSumm }: {name:string, playes:string, allGamesSumm:number}) => {

  const getPercent = (current:any) => {
    const n = +current;
    const result = n/allGamesSumm * 100;
    return Math.floor(result);
  }

  const result = getPercent(playes);

  return (
    <div className='flex text-white bg-black px-6 py-1 mt-2 justify-between w-[420px] md:w-[60vw]'>
        <div className={`${alumni.className}`}>{name}</div>
        <div>{result} %</div>
    </div>
  )
}

export default DeckElement