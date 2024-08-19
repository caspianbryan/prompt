import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectedToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'prompts'
        })

        isConnected = true
        // const mongoURI = process.env.MONGODB_URI;
        // if (!mongoURI) {
        //     throw new Error('MONGODB_URI is not defined');
        // }

        // await mongoose.connect(mongoURI, {
        //     dbName: 'prompts',
        //     // Removed deprecated options
        // });

        // isConnected = true;
        console.log('MongoDB Connected');
        
    } catch (error) {
        console.log(error);
        throw error
    }
}
