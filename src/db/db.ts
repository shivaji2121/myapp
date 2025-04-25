import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema.js'; 
import  fs  from 'fs';
import 'dotenv/config';


const pool = new Pool({
   
      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT!),
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
      ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./ca.pem").toString(),
      },
    },);


export const db = drizzle(pool,{schema});

//TODO:  Learn the diFFerence between the client connection and pool connection