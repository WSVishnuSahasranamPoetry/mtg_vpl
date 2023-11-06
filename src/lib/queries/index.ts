"use server";

import { db } from "../db";
import { card4sale, decks, wishlistcard } from "../db/schema";

export const handleWishList = async ({wishCardName, wishCardQuantity, wishCardURL}:{wishCardName: string, wishCardQuantity: string, wishCardURL: string}) => {
  
    if(wishCardName === "") return;

    if(wishCardQuantity === "") return;

    if(wishCardURL === "") return;
  
    await db.insert(wishlistcard)
    .values({
      quantity: wishCardQuantity,
      name: wishCardName,
      imageUrl: wishCardURL
    });
};

export const handle4Sell = async ({card4sellName, card4sellURL, card4sellQuantity}:{card4sellName: string, card4sellURL: string, card4sellQuantity: string}) => {

    if(card4sellName === "") return;

    if(card4sellURL === "") return;

    if(card4sellQuantity === "") return;

    await db.insert(card4sale)
    .values({
        quantity: card4sellQuantity,
        name: card4sellName,
        imageUrl: card4sellURL
    });
};

export const getShop = async () => {
  
  try {
      let query = db
      .select()
      .from(card4sale)

      const rows = await query;

      return rows;

    } catch (error) {
      console.log(error);
    }
  };

  export const getWishList = async () => {
  
    try {
        let query = db
        .select()
        .from(wishlistcard)
  
        const rows = await query;
  
        return rows;
  
      } catch (error) {
        console.log(error);
      }
    };

export const addMetaDeck = async ({deckName, playes}:{deckName:string, playes:string}) => {
    if(deckName === "") return;

    if(playes === "") return;

    await db.insert(decks)
    .values({
        name: deckName,
        playes: playes
    });
}

export const getAllDecks = async () => {
  try {
    let query = db
    .select()
    .from(decks)

    const rows = await query;

    return rows;

  } catch (error) {
    console.log(error);
  }
}
