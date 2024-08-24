import express from 'express'
import { addFood , foodList} from '../controllers/food.controllers.js';
import multer from 'multer'

const foodRouter = express.Router();
const storage = multer.diskStorage({
    destination : "uploads",
    filename : (req,file,callback) => {
        return callback(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({storage:storage});

foodRouter.post('/add',upload.single("image"),addFood);
foodRouter.get('/list',foodList);

export default foodRouter;