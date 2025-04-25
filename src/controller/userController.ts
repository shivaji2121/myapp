import { type Context } from "hono";
import * as services from "../services/services.js";
import { getAllUsers, getUserById ,saveUser,updateUser,deleteUser} from "../services/services.js";


//git commit -m "Implement add user api"


//get all users....
export const getAll = async(c:Context)=>{
  try{
    const allUsers=await getAllUsers();
    return c.json(allUsers,200);
  }catch(err){
    return c.json({message:"unable to Fetch",error:err},404);
  }
}

//get users based on id
export const getById=async (c:Context)=>{
  const userId=Number(c.req.param('id'));
  try {
    const user=await getUserById(userId);
    return c.json(user,200);
  } catch (error) {
    return c.json({message:"not Found",err:error},400);
  }
  
}


//save a  record...
export const createUser=async(c:Context)=>{
  const body=await c.req.json();

  try {

    const user=await saveUser(body);

    return c.json(user, 201)
  } catch (error) {
    return c.json({message:"unable to create",error:error},400);
  }
};

//UPDATE  USERS RECORDS...
//update a record....
export const updateUserRecord=async(c:Context)=>{
  const userId=Number(c.req.param('id'));
  const body=await c.req.json();
  try {
    const user=await updateUser(userId,body);

    return c.json(user,200);
  } catch (error) {
    return c.json({message:"unable to update",error:error},400);
  }
}




//deleting user
export const deleteUserRecord=async (c:Context)=>{
  const userId=Number(c.req.param('id'));
  try {
    const user=await deleteUser(userId);

    return c.json(user,200);
  } catch (error) {
    return c.json({message:"unable to delete",error:error},400);
  }
};





