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
    <main className='flex min-h-screen max-h-full text-center flex-col items-center justify-start md:px-24'>
      <h2 className={`${alumni.className} text-white/70 text-3xl`}>WishList</h2>
        <div className='lg:grid-cols-2 max-w-[880px] lg:grid flex flex-col items-center'>
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
