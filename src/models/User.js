import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    telegramId: {
        type: String,
        require: true,
        unique: true,
    },
    firstname:{
        type: String,
        default: "Foydalanuvchi",
    },
    balance:{
        type: Number,
        default: 0,
    },
    active:{
        type: Boolean,
        default: true,
    }


})

const User = new mongoose.model("User",userSchema);
