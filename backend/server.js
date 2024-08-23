import express from 'express'
import cors from 'cors'
import ConnectDatabase from './config/db.config.js';
import userRouter from './routes/user.routes.js';

//app config
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
ConnectDatabase();

//API endpoints
app.use('/api/user',userRouter);

//routes
app.get('/',(req,res) => {
    res.send("welcome to home page");
})

app.listen(PORT,() => {
    console.log(`server is running on port no. ${PORT}`);
})

