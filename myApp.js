let express = require('express');
let app = express();
require('dotenv').config()
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

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

app.get('/now',function(req, res, next){
    req.time = new Date().toString()
    next();
}, function(req, res){
    res.json({time : req.time})
});

app.get('/:word/echo',function(req,res){
    res.json({'echo' : req.params.word})
})

app.get('/name',function(req,res){
    res.json({'name' : req.query.first + ' ' + req.query.last})
})





































 module.exports = app;
