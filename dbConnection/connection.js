import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const dataBaseConnection = ()=> {
    try {
        const connection = mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        connection.then(()=> {
        console.log("Connected to DataBase");
    }) 
    } catch (error) {
        console.log(error.message);
    }
    
}

export default dataBaseConnection;