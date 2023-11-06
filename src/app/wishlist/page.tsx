import React from 'react'

import { getWishList } from '@/lib/queries';
import CardElement from '../components/wish-card-element';
import {
  Stalinist_One
} from "next/font/google";



const alumni = Stalinist_One({
  subsets: ["latin"],
  weight: "400",
});

const WishListPage = async () => {

  const wishList = await getWishList();

  return (
    <main className='flex min-h-screen max-h-full text-center flex-col items-center justify-start'>
      <h2 className={`${alumni.className} text-white/70 w-full text-center text-2xl bg-black/50 px-3 rounded-t-none rounded-xl`}>WishList</h2>
        <div className='grid-cols-2 md:grid-cols-3 md:gap-3 max-w-[880px] grid'>
          {
            wishList?.map((el) => { 
              return (
                <CardElement 
                  name={el.name}
                  url={el.imageUrl}
                  quantity={el.quantity}
                  id={el.id}
                  key={el.id}
                />
              )
            })
          }
        </div>
    </main>
  )
}

export default WishListPage
