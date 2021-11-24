import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs'

// Interface del usuario
export interface IUser extends Document {
    name:string;
    email:string;
    password:string;
    encryptPassword(password:string): Promise<string>;
    validatePassword(password:string): Promise<boolean>;
}

// Modelo del usuario
const userSchema = new Schema({
    name:  {
        type: String,
        required: true,
        min: 3
    }, 
    email: {
        type:String,
        unique: true,
        required: true
    },
    password: {
        type:String,
        required: true
    },
},
{
    timestamps: true,
    versionKey: false
});

userSchema.methods.encryptPassword = async (password:string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

userSchema.methods.validatePassword = async function (password:string): Promise<boolean> {
    return await bcrypt.compare(password,this.password)
}

export default model<IUser>('user', userSchema);