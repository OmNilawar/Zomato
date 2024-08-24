import FoodModel from '../models/food.model.js'
import fs from 'fs'

const addFood = async(req,res) => {

    let food_filename = `${req.file.filename}`;

    const food = new FoodModel({
        name : req.body.name,
        description : req.body.description,
        price : parseInt(req.body.price),
        category : req.body.category,
        image : food_filename
    })

    try {
        await food.save();
        res.json({success : true, message : "Food Item Added Succesfully"})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : "an Error Occured"})
    }
}

const foodList = async(req,res) => {
    try {
        const food = await FoodModel.find({});
        res.json({success : true,data : food})
    } catch (error) {
        console.log("food fetch error found",error)
        res.json({success : false,message : "error found while foodList fetch"})
    }
}

export {addFood,foodList};