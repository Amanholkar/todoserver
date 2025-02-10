import express from 'express';
import indexRoutes from './routes/index.routes.js';
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));








//routes
app.use('/api/v1', indexRoutes );





export default app;