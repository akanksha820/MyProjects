const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/medium-project' , {useNewUrlParser:true})
    .then(function(){
        console.log('Connected to the DB :)')
    })
    .catch(function(){
        console.log('OPPS ..!!Something went wrong:(')
    })

module.exports = {
    mongoose
}