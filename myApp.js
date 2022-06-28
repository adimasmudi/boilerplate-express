let express = require('express');
let app = express();
require('dotenv').config()

process.env.MESSAGE_STYLE

// console.log("Hello World")
app.get('/',function(req, res){
    app.use('/public',express.static(__dirname+'/public'))
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', function(req, res){
    res.json({"message": "Hello json"})
})




































 module.exports = app;
