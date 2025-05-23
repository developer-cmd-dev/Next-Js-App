import mongoose from "mongoose";

 export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Mongodb Connected");
        })
        
    } catch (error) {
        console.log("Mongodb connection error!");
        console.log(error);
    }
    
 }