import { model, models, Schema } from "mongoose";


const UserSchema = new Schema({
    ClerkId:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:true
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
})

const User = models?.User || model("User",UserSchema);

export default User;