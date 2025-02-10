import express  from "express";
import authRoutes from "./auth.routes.js"
const indexRoutes = express.Router();


indexRoutes.use('/auth', authRoutes);


export default indexRoutes;