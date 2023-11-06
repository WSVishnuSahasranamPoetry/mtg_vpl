
import React from "react";
import { Stalinist_One, Russo_One } from "next/font/google";
import DeckElement from "../components/deck-element";
import { getAllDecks } from "@/lib/queries";

const alumni = Stalinist_One({
  subsets: ["latin"],
  weight: "400",
});

const stalinist = Russo_One({
  subsets: ["cyrillic"],
  weight: "400",
});

const StatisticPage = async () => {

  const deckMassive = await getAllDecks();

  function getFields(input:any, field:any) {
    var output = [];
    for (let i=0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}

const playsValues = getFields(deckMassive, "playes");

    function arraySum(array:any){
      var sum = 0;
      for(var i = 0; i < array.length; i++){
          sum += +array[i];
          }
      return sum;
    }

   const allGamesSumm = arraySum(playsValues);


  return (
    <main className="flex min-h-screen max-h-full text-center flex-col items-center justify-start">
      <h2
        className={`${alumni.className} text-white/70 w-full text-center text-2xl bg-black/50 px-3 rounded-t-none rounded-xl`}
      >
        Статистика <span className="text-sm">{`(standart)`}</span>
      </h2>
      <div className="bg-black/50 mt-2">
        <div className={`flex text-white px-6 py-1 mt-2 justify-between w-[420px] md:w-[60vw] ${stalinist.className}`}>
          <div>Название колоды:</div>
          <div>
            Процент играющих <br /> на колоде игроков:
          </div>
        </div>
        {
          deckMassive?.map((el) => (
            <DeckElement 
              key={el.id}
              name={el.name}
              playes={el.playes}
              allGamesSumm={allGamesSumm}
            />
          ))
        }
      </div>
    </main>
  );
};

export default StatisticPage;
