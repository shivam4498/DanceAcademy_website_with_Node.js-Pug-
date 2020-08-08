const express = require("express");
const fs=require('fs')
const path = require("path"); 
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded()) // will help to read the requests from req.body and will write into the output.txt file
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', 'views') // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res)=>{
    name=req.body.name;
    phone=req.body.phone;
    address=req.body.address;
    email=req.body.email;
    desc=req.body.desc;
    let outputcontent=`Name of the client :${name} 
    with the phone no: ${phone} and address ${address} want to join our Dance Academy, Locality: ${address} and Email: ${email} concern: ${desc}`;
    fs.writeFileSync('DanceClasswresposes.txt', outputcontent);
    // console.log(req.body);
    res.status(200).render('index.pug');
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});