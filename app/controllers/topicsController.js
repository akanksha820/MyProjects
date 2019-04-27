const express = require('express')
const router= express.Router()
const { Topic }  = require('../models/topic')


router.post('/', function(req, res){
    const body = req.body
    const topic=new Topic(body)
    topic.save()
        .then(function(topic){
            res.send(topic)
        })
        .catch(function(err){
            res.send(err)
        })
})


router.get('/', function(req, res){
    Topic.find()
        .then(function(topics){
            res.send(topics)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.get('/:id', function(req, res){
    const id=req.params.id
    Topic.findById(id)
        .then(function(topic){
            if(topic){
                res.send(topic)
            }else{
                res.send({})
            }
        })
        .catch(function(err){
            res.send(err)
        })
})


router.delete('/:id', function(req, res){
    const id=req.params.id
    Topic.findByIdAndDelete(id)
        .then(function(topic){
            res.send(topic)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.put('/:id', function(req, res){
    const id=req.params.id
    const body=req.body
    Topic.findByIdAndUpdate(id , {$set : body} , {runValidators : true, new : true})
        .then(function(topic){
            res.send(topic)
        })
        .catch(function(err){
            res.send(err)
        })
})

module.exports = {
    topicsRouter : router
}