import mongoose from "mongoose";

const dataBaseConnection = ()=> {
    try {
        const connection = mongoose.connect('mongodb+srv://shahid099:SHAHIDMUHAMMAD099@cluster0.fo6kffm.mongodb.net/?retryWrites=true&w=majority')
        connection.then(()=> {
        console.log("Connected to DataBase");
    }) 
    } catch (error) {
        console.log(error.message);
    }
    
}

export default dataBaseConnection;