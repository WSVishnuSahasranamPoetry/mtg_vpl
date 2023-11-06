"use client"

import Image from "next/image";
import { Alumni_Sans_Inline_One as Alumni, Stalinist_One, Russo_One } from "next/font/google";
import { useRouter } from "next/navigation";


const russo = Russo_One({
  subsets: ["cyrillic"],
  weight: "400",
});

const stalinist = Stalinist_One({
  subsets: ["cyrillic"],
  weight: "400"
});

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-[90vh] max-h-full text-center flex-col items-center justify-center md:px-24">
      <div className=" grid grid-cols-2 max-w-[480px]">
        <div onClick={() => {router.push("/shop")}} className="flex justify-around items-center w-44 h-56 mt-2 border-solid border-2 border-white mx-3 p-4 bg-gradient-to-r from-black to-gray-600/70 rounded-full cursor-pointer hover:bg-black/50 ">
          <div>
            <Image
              width={140}
              height={140}
              className="aimg bg-transparent"
              alt="admin"
              src="/shop.png"
              priority
              quality={100}
              style={{ objectFit: "contain" }}
            />
            <div className={`${stalinist.className} text-xl md:text-4xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
              М<span className={`text-sm ${russo.className} md:text-base`}>агазин</span>
            </div>
          </div>
        </div>
        <div onClick={() => {router.push("/wishlist")}} className="flex justify-around items-center w-44 h-56 mt-2 border-solid border-2 border-white mx-3 p-4 bg-gradient-to-r from-black to-gray-600/70 rounded-full cursor-pointer hover:bg-black/50 ">
          <div>
          <Image
            width={140}
            height={140}
            className="aimg bg-transparent"
            alt="admin"
            src="/wishli.png"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
          <div className={`${stalinist.className} text-xl md:text-2xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
            W<span className={`text-sm ${russo.className} md:text-base`}>ishList</span>
          </div>
          </div>
          
        </div>
        <div onClick={() => {router.push("/statistics")}} className="flex justify-around items-center w-44 h-56 mt-2 border-solid border-2 border-white mx-3 p-4 bg-gradient-to-r from-black to-gray-600/70 rounded-full cursor-pointer hover:bg-black/50 ">
          <div>
          <Image
            width={140}
            height={140}
            className="aimg bg-transparent"
            alt="admin"
            src="/stats.png"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
          <div className={`${stalinist.className} text-xl md:text-2xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
            С<span className={`text-sm ${russo.className} md:text-base`}>татистика</span>
          </div>
          </div>
        </div>
        <div onClick={() => {router.push("/contacts")}} className=" 
    relative flex-col justify-around items-center w-44 h-56 mt-2 border-solid border-2 border-white mx-3 p-4 bg-gradient-to-r from-black to-gray-600/70 rounded-full cursor-pointer hover:bg-black/50 ">
          <Image
            width={140}
            height={140}
            className="aimg bg-transparent"
            alt="admin"
            src="/contacts.png"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
          <div className={`${stalinist.className} text-xl absolute top-[150px] left-[36px] md:text-2xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
            К<span className={`text-sm ${russo.className} md:text-base`}>онтакты</span>
          </div>
        </div>
        
      </div>
      <div onClick={() => {router.push("/admin")}} className="flex-col col-span-2 relative justify-around items-center w-44 h-56 mt-2 border-solid border-2 border-white mx-3 p-4 bg-gradient-to-r from-black to-gray-600/70 rounded-full cursor-pointer hover:bg-black/50 ">
          <Image
            width={140}
            height={140}
            className="aimg h-[140px] bg-transparent"
            alt="admin"
            src="/admin.png"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
          <div className={`${stalinist.className} text-xl absolute top-[150px] left-[36px] md:text-2xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
            У<span className={`text-sm ${russo.className} md:text-base`}>правление</span>
          </div>
        </div>
    </main>
  );
}
