import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema.js'; 
import 'dotenv/config';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


export const db = drizzle(pool,{schema});

//TODO:  Learn the diFFerence between the client connection and pool connection