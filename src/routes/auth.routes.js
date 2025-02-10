import { Router } from "express";
import {
    signup,
    signin,
    forgotPassword
}
from '../controllers/auth.controllers.js';
const authRoutes = Router();


authRoutes.post('/sign-up', signup)
authRoutes.post('/sign-in', signin)
authRoutes.post('/forgot-password', forgotPassword)



export default authRoutes;