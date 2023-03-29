
//bodyparser

const http=require('http')
const express = require('express')

console.log("hello krishna,program is started")
const app=express()

const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
// app.use("/",(req,res,next)=>{
//     console.log("hell1")
//     res.send("<h1>hello home 1/</h1>")
// })a


app.use("/add-product",(req,res,next)=>{
    console.log("add product")
    res.send("<html><body><form action='/product' method='POST'><input type='text' name='product_name'> <input type='text' name='size'> <button type='submit'>submit</button><form>  </body></html>")
})

app.use("/product",(req,res,next)=>{
    console.log("product page");
    console.log(req.body);
    res.redirect("/")
   })

app.use("/",(req,res,next)=>{
    console.log("home /")
    res.send("<h1>hello express!</h1>")
})




app.listen(3000)