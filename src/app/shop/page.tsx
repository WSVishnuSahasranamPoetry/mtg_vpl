import { getShop } from '@/lib/queries';
import {
  Stalinist_One
} from "next/font/google";
import SellCardElement from '../components/sell-card-element';



const alumni = Stalinist_One({
  subsets: ["latin"],
  weight: "400",
});




const ShopPage = async () => {
  
  const shopList = await getShop();

  return (
    <main className='flex min-h-screen max-h-full text-center flex-col items-center justify-start'>
      <h2 className={`${alumni.className} text-white/70 w-full text-center text-2xl bg-black/50 rounded-t-none rounded-xl`}>Магазин</h2>
        <div className='grid-cols-2 md:grid-cols-3 md:gap-3 max-w-[880px] grid'>
          {
            shopList?.map((el) => { 
              return (
                <SellCardElement
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


export default ShopPage