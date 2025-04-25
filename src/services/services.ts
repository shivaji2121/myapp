// services/user.service.ts
import { users } from "../db/schema.js";

import { db } from "../db/db.js";

import { eq } from "drizzle-orm";


export const getAllUsers = async () => {
    const allUsers=await db
    .select()
    .from(users); 

  return allUsers;
};


export const getUserById=async(userId: number)=>{

    const userData =await db
    .select()
    .from(users)
    .where(eq(users.id,userId));

    return userData;
}




export const saveUser=async(body:any)=>{
    const user=await db
    .insert(users)
    .values(body)
    .returning();

    return user;
}


export const updateUser=async(userId:number,body:any)=>{
    const user=await db
    .update(users)
    .set(body)
    .where(eq(users.id,userId))
    .returning()

    return user;
}

export const updateUserMailId=async(newEmail:string,userId:number)=>{
    const user=await db
    .update(users)
    .set({email:newEmail})
    .where(eq(users.id,userId))
    .returning();
    return user;
}

export const deleteUser=async(userId:number)=>{
    const user=await db
    .delete(users)
    .where(eq(users.id,userId))
    .returning();

    return user;
}