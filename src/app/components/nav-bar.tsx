"use client";

import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog";
import {
  Alumni_Sans_Inline_One as Alumni,
  Russo_One,
  Stalinist_One
} from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const logo = Alumni({
  subsets: ["latin"],
  weight: "400",
});

const alumni = Stalinist_One({
  subsets: ["latin"],
  weight: "400",
});

const stalinist = Russo_One({
  subsets: ["cyrillic"],
  weight: "400",
});

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="text-center border-none p-6">
          <div className=" flex-col mx-8 max-w-[480px]">
            <div
              onClick={() => {
                router.push("/shop");
                setIsOpen(false);
              }}
              className=" hover:bg-gray-700 hover:scale-105 cursor-pointer transform transition duration-300 
              flex items-center justify-center mx-6 text-lg
            bg-black/70 border-white px-4 space-x-4 rounded-3xl p-2 border-solid border-2  mb-2"
            >
              <div>
                <div
                  className={`${stalinist.className} text-2xl md:text-4xl md:font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}
                >
                  Магазин
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                router.push("/wishlist");
                setIsOpen(false);
              }}
              className="  hover:scale-105 cursor-pointer transform transition duration-300 
              flex items-center justify-center mx-6 text-lg
             px-4 space-x-4 rounded-3xl p-2 bg-black/70 border-white border-solid border-2 hover:bg-gray-700 mb-2"
            >
              <div>
                <div
                  className={`${stalinist.className} text-2xl md:text-4xl md:font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}
                >
                  WishList
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                router.push("/statistics");
                setIsOpen(false);
              }}
              className="  hover:scale-105 cursor-pointer transform transition duration-300 
              flex items-center justify-center mx-6 text-lg
              bg-black/70  px-4 space-x-4 rounded-3xl p-2 g-black/70 border-white border-solid border-2 hover:bg-gray-700 mb-2"
            >
              <div>
                <div
                  className={`${stalinist.className} text-2xl md:text-4xl md:font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}
                >
                  Статистика
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                router.push("/contacts");
                setIsOpen(false);
              }}
              className="  hover:scale-105 cursor-pointer transform transition duration-300 
              flex items-center justify-center mx-6 text-lg
            px-4 space-x-4 rounded-3xl p-2 g-black/70 border-white bg-black/70 border-solid border-2 hover:bg-gray-700 mb-2"
            >
              <div
                className={`${stalinist.className} text-2xl md:text-4xl md:font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}
              >
                Контакты
              </div>
            </div>
            <div
              onClick={() => {
                router.push("/admin");
                setIsOpen(false);
              }}
              className=" hover:scale-105 cursor-pointer transform transition duration-300 
              flex items-center justify-center mx-6 text-lg
             px-4 space-x-4 rounded-3xl p-2 border-white bg-black/70 border-solid border-2 hover:bg-gray-700 mb-2"
            >
              <div
                className={`${stalinist.className} text-2xl md:text-4xl md:font-bold text-white/90 [text-shadow:_10px_4px_10px_rgb(0_0_0_/_80%)]`}
              >
                Управление
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="w-screen px-3 text-white/70 sm:text-xl lg:text-3xl bg-black/50 sticky top-0 flex justify-between items-end">
        <h1
          className={`cursor-pointer ${alumni.className}  md:text-5xl text-2xl transition duration-150 hover:text-white`}
          onClick={() => {
            router.push("/");
          }}
        >
          W<span className={`text-sm ${stalinist.className} md:text-base`}>{`ithcr's`}</span> P<span className={`text-sm ${stalinist.className} md:text-base`}>lainswalkers</span> L<span className={`text-sm ${stalinist.className} md:text-base`}>{`ibrary`}</span>
        </h1>

        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className=" text-white/50 py-2 transition duration-150 hover:text-white text-sm lg:text-xl underline"
        >
          <RxHamburgerMenu size={30} />
        </button>
      </div>
    </>
  );
};

export default NavBar;
