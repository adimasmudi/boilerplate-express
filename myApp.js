let express = require('express');
let app = express();
require('dotenv').config()



// console.log("Hello World")
app.get('/',function(req, res){
    app.use('/public',express.static(__dirname+'/public'))
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', function(req, res){
    res.json({"message": "Hello json"})
})

process.env.MESSAGE_STYLE;




































 module.exports = app;
