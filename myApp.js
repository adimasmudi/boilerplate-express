let express = require('express');
let app = express();
require('dotenv').config()

process.env.MESSAGE_STYLE='uppercase';

app.use(function middleware(req, res, next){
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next()
})

// console.log("Hello World")
app.get('/',function(req, res){
    app.use('/public',express.static(__dirname+'/public'))
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', (req, res) => {
    let message = 'Hello json';
    (process.env.MESSAGE_STYLE == 'uppercase') ? message=message.toUpperCase() : message=message; res.json({'message': message});
    });





































 module.exports = app;
