import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const loginUser = async(req,res) => {
    const {email,password} = req.body;

    try {

        const user = await userModel.findOne({email});

        if(!user)
        {
            return res.json({status : false ,message : "User Does not exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch)
        {
            return res.json({status : false ,message : "Invalid Password"});
        }

        const token = jwt.sign({id : user._id},'random#secret')
        res.status(201).json({status : true ,message : "User Login Succesfull",token});
        
    } catch (error) {
        res.json({error : error})
        console.log("login error => ",error);
    }
}
 
const registerUser = async(req, res) => {
    const { name, email, password } = req.body;

    try {
        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({status : false ,message: "Invalid email format" });
        }

        // Validate password strength
        if (password.length < 8) {
            return res.json({status : false , message: "Password must be at least 8 characters long" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({status : false ,message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ id: newUser._id }, 'random#secret');

        // Send response with the token
        res.status(201).json({status : true ,message: "User registered successfully", token });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export { loginUser , registerUser };