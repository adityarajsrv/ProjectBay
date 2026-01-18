import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully.")
    }catch{
        console.error("Failed to connect: ", error.message);
        process.exit(1);
    }
};

export default connectDB;