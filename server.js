const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use( express.static( path.join(__dirname, 'public')))
app.use( express.static( path.join(__dirname, 'data')))

app.listen(PORT, ()=>{
   console.log('server listing ' + PORT);
})

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

// jemicom.dothome.co.kr/ajax/data/data.txt
app.get('/text', (req, res)=>{
  res.sendFile(path.join(__dirname, 'weather02.html'));
})

app.get('/makeup', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'test02.html'));
})
app.get('/subpage', (req, res)=>{
  res.sendFile(path.join(__dirname,'views',  'sub.html'));
})
app.get('/about', (req, res)=>{
  res.sendFile(path.join(__dirname,'views',  'about.html'));
})