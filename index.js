const express = require('express')
const { userRouter } = require('./app/controllers/usersController')
const { mongoose } = require('./congif/database')
const { topicsRouter } = require('./app/controllers/topicsController')
const { storyRouter } = require('./app/controllers/storyController')
const { tagsRouter } = require('./app/controllers/tagsController')
const app = express()
const port = 3005

app.use(express.json())

app.use('/users' , userRouter)
app.use('/topic' , topicsRouter)
app.use('/story' , storyRouter)
app.use('/tag' , tagsRouter)
app.listen(port, function(){
    console.log('listening to the port' , port)
})