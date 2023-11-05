"use client"

import Image from "next/image";
import { Alumni_Sans_Inline_One as Alumni, Stalinist_One } from "next/font/google";
import { useRouter } from "next/navigation";

const alumni = Alumni({
  subsets: ["latin"],
  weight: "400",
});

const stalinist = Stalinist_One({
  subsets: ["cyrillic"],
  weight: "400"
});

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen max-h-full text-center flex-col items-center justify-center md:px-24">
      <h1
        className={`${stalinist.className} lg:text-3xl  font-bold mt-4 text-white/70 text-lg`}
      >{`Witcher's Plainswalkers Library`}</h1>
      <div className=" flex-col mx-8 max-w-[480px]">
        <div onClick={() => {router.push("/shop")}} className=" mb-6 mx-6 p-8 cursor-pointer hover:bg-black/50 ">
          <div>
            <Image
              width={600}
              height={600}
              className="aimg bg-transparent"
              alt="admin"
              src="/shop.png"
              priority
              quality={100}
              style={{ objectFit: "contain" }}
            />
            <div className={`${stalinist.className} text-4xl md:text-4xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
              Магазин
            </div>
          </div>
        </div>
        <div onClick={() => {router.push("/wishlist")}} className=" m-6 p-8 cursor-pointer hover:bg-black/50">
          <div>
          <Image
            width={600}
            height={600}
            className="aimg bg-transparent"
            alt="admin"
            src="/wishli.png"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
          <div className={`${stalinist.className} text-4xl md:text-4xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
            WishList
          </div>
          </div>
          
        </div>
        <div onClick={() => {router.push("/statistics")}} className=" mb-12 cursor-pointer hover:bg-black/50">
          <div>
          <Image
            width={600}
            height={600}
            className="aimg bg-transparent"
            alt="admin"
            src="/stats.png"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
          <div className={`${stalinist.className} text-4xl md:text-4xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
            Статистика
          </div>
          </div>
        </div>
        <div onClick={() => {router.push("/contacts")}} className=" mb-12 cursor-pointer hover:bg-black/50">
          <Image
            width={600}
            height={600}
            className="aimg bg-transparent"
            alt="admin"
            src="/contacts.png"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
          <div className={`${stalinist.className} text-4xl md:text-4xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
            Контакты
          </div>
        </div>
        <div onClick={() => {router.push("/admin")}} className=" mb-12 cursor-pointer hover:bg-black/50">
          <Image
            width={600}
            height={600}
            className="aimg bg-transparent"
            alt="admin"
            src="/admin.png"
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
          <div className={`${stalinist.className} text-4xl md:text-4xl font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}>
            Управление
          </div>
        </div>
      </div>
    </main>
  );
}
