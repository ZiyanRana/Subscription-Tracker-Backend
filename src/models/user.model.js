import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required!"],
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        required: [true, "User email is required!"],
        trim: true,
        unique: true,
        minLength: 5,
        match: [/\S+@\S+\.\S+/, "Email format is incorrect!"]
    },
    password: {
        type: String,
        required: [true, "User password is required!"],
        minLength: 8
    }
}, { timestamps: true });

const UserModel = new mongoose.model("UserModel", userSchema);

export default UserModel;