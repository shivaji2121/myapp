import { serve } from '@hono/node-server'
import { Hono } from 'hono'
// import userController from './controller/userController.js'
import 'dotenv/config';
// import userController from './controller/userController.js';
import userRoutes from './routes/userRoutes.js';


const app = new Hono()

app.route('/',userRoutes);











serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})


export default app;