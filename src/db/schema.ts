import { primaryKey } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar,serial } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar().notNull(),
  age: integer().notNull(),
  email: varchar().notNull().unique(),
});


//TODO: Learn about database indexes


//TODO: Array mehtods  programms 
