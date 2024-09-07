import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://amankaushal:hathi1090@cluster0.8pk2s.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}