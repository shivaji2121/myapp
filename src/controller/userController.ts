import { Hono } from "hono";

import { usersTable } from "../db/schema.js";

import { db } from "../db/db.js";

import { eq } from "drizzle-orm";
import { use } from "hono/jsx";



const  userController=new Hono();

//save a record ...
userController.post('/users',async(c)=>{  //TODO:Why you add this C
const body=await c.req.json();
// console.log(body);
try{
    const newUser= await db.insert(usersTable).values(body).returning();
    return c.json(newUser, 201);  //TODO:  You should aware what will be the return type
}catch(error){
    return c.text("user alreday exist", 400);
}});     //TODO: Learn about status codes




//get all users...
userController.get('/users',async(c)=>{
    try {
        const all_users=await db.select().from(usersTable);  //This is service call
        return c.json(all_users,201);
    } catch (error) {
        return c.json({error:"unable to Fetch"},404);
    }
})




// get users by id...
userController.get("/users/:id",async(c)=>{ 

    const users_data=await db.select().from(usersTable);
  try {
    const user_id=Number(c.req.param('id'));
    const user=users_data.find(item=>item.id===user_id);
    return c.json(user,201);
  } catch (error) {
    return c.json({message:"user not ound"},404);
  }

});

//update user...
userController.patch('/users/:id',async(c)=>{

})


export default userController;



