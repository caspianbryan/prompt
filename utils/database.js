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
            dbName: 'prompts',
            useNewUrlParser: true,
            useUnifiedTopology: true,   
        })

        isConnected = true
        
    } catch (error) {
        console.log(error);
        throw error
    }
}
