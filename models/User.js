import mongoose from "mongoose";
/*
class User{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static create(name){
        return{
            id: Date.now(),
            name
        }
    }
}
*/

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        min: 18,
        max: 99
    },
    isActive:{
        type: Boolean,
        default: true,
    },
    roles:[{
        type: String,
    }],
    address:{
        street: String,
        city: String,
        zipCode: String,
    },
    birthDate: Date,
    salary: mongoose.Schema.Types.Decimal128,
    status: {
        type: String,
        enum: [
            'ACTIVE',
            'INACTIVE',
            'BLOCKED'
        ],
        default: 'ACTIVE'
    }


},{
    timestamps: true
});

export default mongoose.model('User', userSchema);
//export default User;