const express=require("express")
const app=express()
const fs=require("fs")

const bodyParser=require("body-parser")


app.use(bodyParser.urlencoded({extended:false}))


app.get("/",(req,res,next)=>{
res.send("<h1>Chat app</h1>")
})
//note app.get only execute if exact match to url
app.get("/login",(req,res)=>{
 res.send(`<html><form action='/chatroom' method='POST'><input id="daac" type=text name='login_id'><button type='submit'>send</button></form></html>`)

})


app.post("/loginid",(req,res)=>{
   // login id assign into localhost with key login

    // res.send(`<html>
    // <h1>hello world</h1>
    
    // </html>`)
res.redirect("/chatroom");

})

app.use("/chatroom",(req,res)=>{
    console.log("/chatroom page")

console.log(req.body);

let read_message="message box is empty"
try{
     read_message=fs.readFileSync("message1.txt")
}catch(e){
console.log(e)
}
  
    res.send(`<html>${read_message}<br>
    <script>
    if(localStorage.getItem("login_id")){
        console.log("user id already exist")
        
    }
    else{
        localStorage.setItem("login_id","${req.body.login_id}")
        console.log("user not exist")
    }
    
    </script>
    <form action='/send'
    onsubmit="document.getElementById('username').value=localStorage.getItem('login_id')"
    
    
    method='POST' >
    <input  type="text" name="user_message">
    <input  type="hidden" id="username" name="username">
    <button type='submit'>send</button></form>
    </form>
    
    </html>
    <a href="/login">login page</a>
    <a href="/clearMessage"><button type='submit'>clear message</button></a>
    `)


})


app.get("/clearMessage",(req,res)=>{
    fs.writeFileSync("message1.txt","")
    res.redirect("/chatroom")
})

app.post("/send",(req,res)=>{
    // res.send()
  
fs.appendFileSync("message1.txt",`${req.body.username}-|${req.body.user_message}|<br>`)
    console.log("send",req.body);
    res.redirect("/chatroom")
})
app.listen(4000)




