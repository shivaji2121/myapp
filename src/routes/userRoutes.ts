import {  getById, getAll,createUser, deleteUserRecord,  updateUserRecord} from "../controller/userController.js";
import { Hono } from "hono";


const userRoutes=new Hono();

userRoutes.get('/users',getAll);
userRoutes.get('/user/:id',getById); 
userRoutes.post('/users/save',createUser);
userRoutes.patch('/user/update/:id',updateUserRecord);
userRoutes.delete('/user/:id',deleteUserRecord)


export default userRoutes;

// userRoutes.get('/user/:name',getUserByName);
//push updated code to the dev branch