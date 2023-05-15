const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name should have 20 letters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('Task',TaskSchema)