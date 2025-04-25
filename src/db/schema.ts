import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  age: integer().notNull(),
  email: varchar().notNull().unique(),
});


//TODO: Learn about database indexes


//TODO: Array mehtods  programms 
