const data=require('./data.json');
const user=require('./user.json');
const express=require('express');
const bodyParser = require('body-parser');
const app=express();

app.use(express.json())
app.get('/home/:id',async (req,res)=>{
    const id=req.params.id;
    const movies=new Set();
    let result=[]
    const user_movies=user[id];
    user_movies.movies.map((e)=>{movies.add(e)});
    data.map((mov)=>{
        if(movies.has(mov.movie)){
            mov.recommend.map((m)=>{
                if(!movies.has(m)){
                movies.add(m);
            }})
        }
    })
    const final= [{"result":[...movies.values()]}];
    console.log(final);
    return res.send(final);
   
})

app.listen( process.env.PROT ||5000,()=>{
    console.log("Server Running Successfully");
})