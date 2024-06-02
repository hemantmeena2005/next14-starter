import mongoose from "mongoose";

const connection = {};

export const connectToDb  = async ()=>{
    try {
        if(connection.isConnected){
            console.log('using connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connection[0].readyState;
      } catch (error) {
        console.log(error);
        throw Error(error);
      }
}