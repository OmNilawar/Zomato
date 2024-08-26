import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from a .env file into process.env
dotenv.config();

// The connection string should be defined in the .env file
const ConnectDatabase = async () => {
    try {
        // Access the environment variable using process.env
        await mongoose.connect(process.env.Mongo_url);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}

export default ConnectDatabase;
