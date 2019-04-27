const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { User } = require('./user') 

const responseSchema = new Schema({
    user: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    body : {
        type : String
    },
    createdAt : {
        type : Date ,
        default : Date.now()
    }
})

module.exports = {
    responseSchema
}
