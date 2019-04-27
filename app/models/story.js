const mongoose = require('mongoose')
const { User } = require('./user')
const { Topic } = require('./topic')
const { Tag } = require('./tag')
const Schema = mongoose.Schema
const { responseSchema } = require('./response')

const storySchema = new Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    body : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    //,
    // isPublished : {
    //     type : Boolean
    // },
    // publishedDate : {
    //     type : Date,
    //     default : Date.now()
    // },
    tag : [{
        type : Schema.Types.ObjectId,
        ref : 'Tag'
    }],
    topic : {
        type : Schema.Types.ObjectId,
        ref : 'Topic'
    }
    // previewImageUrl :{
    //     type : String ,
    // },
    // responses : {
    //     type : [responseSchema]
    // },
    // claps : [
    //     {
    //         user : {
    //             type : Schema.Types.ObjectId,
    //             ref : 'User'
    //         },
    //         count : {
    //             type : Number,
    //         }
    //     }
    // ]

})

const Story = mongoose.model('Story' , storySchema)

module.exports = {
    Story
}