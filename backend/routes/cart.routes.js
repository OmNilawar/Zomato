import express from 'express'
import { addFoodToCart,removeFoodFromCart,getCart } from '../controllers/cart.controllers.js'
import authMiddleWare from '../middlewares/auth.middle.js'

const cartRouter = express.Router();

cartRouter.post('/add',authMiddleWare,addFoodToCart);
cartRouter.post('/remove',authMiddleWare,removeFoodFromCart);
cartRouter.get('/get',authMiddleWare,getCart);

export default cartRouter;