const data=require('./data.json')
const express=require('express');
const bodyParser = require('body-parser');
const app=express();

const middleware=(req,res,next)=>{
    next();  
}
app.use(middleware)
app.use(express.json())
app.get('/home/:id',middleware,(req,res)=>{
    return res.send(req.params.id)
})

app.listen(5000,()=>{
    console.log("Server Running Successfully");
})