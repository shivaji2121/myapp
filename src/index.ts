import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import cuserController from './controller/userController.js'
import 'dotenv/config';




const app = new Hono()

app.route('/api',cuserController);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})


export default app;