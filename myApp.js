let express = require('express');
let app = express();

// console.log("Hello World")
app.get('/',function(req, res){
    app.use('/public',express.static(__dirname+'/public'))
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', function(req, res){
    res.json()
})




































 module.exports = app;
