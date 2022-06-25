let express = require('express');
let app = express();

// console.log("Hello World")
app.get('/',function(req, res){
    app.use(__dirname+'/public',express.static())
    res.sendFile(__dirname + '/views/index.html')
})




































 module.exports = app;
