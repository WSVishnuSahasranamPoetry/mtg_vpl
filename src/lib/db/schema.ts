import { InferModel } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";


export const card4sale = pgTable("card4sale", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  imageUrl: text("imageUrl").notNull(),
  quantity: text("quantity").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

export type Card4sale = InferModel<typeof card4sale>;

export const wishlistcard = pgTable("wishlistcard", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    imageUrl: text("imageUrl").notNull(),
    quantity: text("quantity").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  });
  
  export type Wishlistcard = InferModel<typeof wishlistcard>;
  