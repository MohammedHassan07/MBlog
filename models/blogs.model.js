const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({

    title: String,
    content: String,
    imgURL: String,
    para: String,
    author: {

        type: mongoose.Schema.Types.String,
        ref: 'user'
    }
    
}, {timestamps: true})

module.exports = mongoose.model('blog', blogSchema)