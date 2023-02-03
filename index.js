const express=require('express');
const app=express();


const bodyParser = require('body-parser');
const preapareAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(3000,()=>{
        console.log("Server is listening");
    });
}

preapareAndStartServer();