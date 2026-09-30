const mongoose = require("mongoose")
const Movie= mongoose.model('movie',{
    title:{
        type:String,
        required:true,
        trim: true
    },
    genre:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        validate(val){
            if(val>10||val<0){
                throw new Error("invalid input")
            }
        }
    },
    watched:{
        type:Boolean,
        required:true,
    }
})

module.exports=Movie