import React from 'react'
import { Alumni_Sans_Inline_One as Alumni, Stalinist_One, Amatic_SC, Rubik_Dirt, Russo_One } from "next/font/google";

const rubick = Amatic_SC({
  subsets: ["cyrillic"],
  weight: "400"
});

const alumni = Stalinist_One({
  subsets: ["latin"],
  weight: "400",
});


const ContactsPage = () => {


  return (
    <main className="flex flex-col items-center min-h-[90vh] justify-start">
      <h2 className={`${alumni.className} text-white/70 w-full text-center text-2xl bg-black/50 px-3 rounded-t-none rounded-xl`}>Контакты</h2>
      <div className={`${rubick.className} flex flex-col max-w-2xl mt-[1vh] md:mt-[17vh] pt-14 w-full text-5xl text-bold bg-white/70 text-center items-center justify-start p-4`}>
      <div>Если Вас заинтересовала  карта из магазина  или Вы хотели бы поиграть  со мной в Стандарт   или у Вас есть карта  из моего WishLista  или хотите просто пообщаться {`=)`}  звоните и пишите!</div>
      <div className="text-black/50 mt-14 flex text-sm">
          <div className='text-3xl'>Мои контакты:</div>
          <div>
            <span className="text-blue-700 transition duration-150 text-3xl cursor-pointer hover:text-red-600  ml-[15vw]">
              vvitcherv@gmail.com
            </span>
            <br />
            Телефон/WhatsApp:{" "}
            <span className="text-black transition duration-150 text-3xl cursor-pointer hover:text-gray-600">
              +79992149895
            </span>
            <br />
            Telegram:{" "}
            <span className="text-black transition duration-150 text-3xl cursor-pointer hover:text-gray-600">
              @kain_rd
            </span>
          </div>
        </div>
        </div>
    </main>
  )
}

export default ContactsPage