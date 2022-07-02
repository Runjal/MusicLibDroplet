const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema

const randomSchema= new mongoose.Schema({
   VedioId:{
    type:ObjectId,
    ref:"Data"
   },
   AudioId:{
    type:ObjectId,
    ref:"Data"
   },
   ImageId:{
    type:ObjectId,
    ref:"Data"
   },

},{timestamps:true})

module.exports=mongoose.model("randomMedia",randomSchema)