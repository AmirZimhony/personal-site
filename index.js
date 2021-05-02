//setting app up - express, path, view engine
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));//makes it possible to open this file from different folders

app.set('view engine', 'ejs');//determining engine for injecting variables into pages
app.set('views', path.join(__dirname, '/views'));//makes it possible to open this file from different folders

//defining responses to different requests
app.get('/home',(req,res)=>{
    res.render('home')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('*',(req,res)=>{
    res.send('404 here')
})


//defining port to listen on - 3000 for Andre 3000
app.listen(3000, () => {
    console.log('listening...')
}
)