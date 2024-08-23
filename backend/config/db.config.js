import mongoose from 'mongoose'

const ConnectDatabase = async() => {
    try {
        await mongoose.connect('mongodb+srv://omkarnilawar9:Omkar%40999@cluster0.2nx9k.mongodb.net/ZOMATO');
        console.log('MongoBd Connected');
    } catch (error) {
        console.log('MongoDb error', error);
    }
}

export default ConnectDatabase;