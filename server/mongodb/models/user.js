import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    avatar: {type: String, required:true},
    allProperties: [{type: mongoose.Schema.Types.ObjectId, ref: "Property"}] //Property modeli ile 1-1 ilişki olacak, onun ID'si bu, kimin hangi propertyi oluşturduğunu yakalamak için.
})

const userModel = mongoose.model('User', UserSchema)

export default userModel