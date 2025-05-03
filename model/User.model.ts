import mongoose ,  {Document , Schema} from "mongoose";

export interface Message extends Document {
    content:string;
    createdAt:Date
}

const MessageSchema : Schema<Message> = new Schema({
    content : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
})

export interface User extends Document {
    username : string,
    email : string,
    password : string,
    verifyCode : string,
    verifyCodeExpiry : Date,
    isverified : boolean,
    isAcceptingMessage : boolean,
    message : Message[]

}

const userSchema : Schema<User> = new Schema({
    username : {
        type : String,
        required : [true , "Username is required"],
    },
    email : {
        type : String,
        required : [true , "Please enter the email"],
        unique : true,
        // match : [/.+@.+/..+/ , 'Please use a valid email address']
    },
    password : {
        type : String,
        required : [true , "Please enter the password"]
    },
    verifyCode : {
        type : String,
        requried : [true , 'Please enter the verify code']
    },
    verifyCodeExpiry : {
        type : Date,
        required : [true , 'Please enter the verify code expiry']
    },
    isverified : {
        type : Boolean ,
        required : true,
        default : false
    },
    isAcceptingMessage : {
        type : Boolean ,
        default :  true
    },
    message : {
        type : [MessageSchema]
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User",userSchema))
export default UserModel;