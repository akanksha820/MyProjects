const express = require('express')
const { Story } = require('../models/story')
const { User } = require('../models/user')
const { Tags }= require('../models/tag')
const { Topic }= require('../models/topic')
const { authenticateUser }= require('../middlewares/authentication')
const router = express.Router()

router.get('/' , authenticateUser ,function(req,res){
    Story.find( { user : req.user._id})
        .then(function(stories){
            res.send(stories)
        })
        .catch(function(req,res){
            res.send(err)
        })
})

router.post('/' , authenticateUser ,function(req,res){
    const body = req.body
    const story = new Story(body)
    story.user = req.user._id
    console.log(body)
    story.save()
        .then(function(story){
            res.send(story)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.get('/:id' , authenticateUser,function(req,res){
    const id = req.params.id
    Story.findById({
        _id: id ,
        req : req.user._id
    }).populate('user').populate('topic').populate('tag')
        .then(function(story){
            res.send(story)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.put('/:id' , authenticateUser,function(req,res){
    const id = req.params.id
    const body = req.body
    Story.findByIdAndUpdate({
        _id : id,
        req : req.user._id
    }, {$set : body} , {runValidators : true, new : true})
        .then(function(story){
            res.send(story)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.delete('/:id' , authenticateUser,function(req,res){
    const id = req.params.id
    Story.findByIdAndDelete({
        _id : id ,
        req : req.user._id
    })
        .then(function(story){
            res.send(story)
        })
        .catch(function(err){
            res.send(err)
        })
})

module.exports = {
    storyRouter : router
}
    