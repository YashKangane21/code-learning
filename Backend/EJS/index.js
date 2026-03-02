const express = require("express");
const app = express();
const path = require("path");

const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.listen(port, ()=>{
    console.log("app is listening...");
})
app.get("/",(req, res)=>{
    res.render("home.ejs");
})
app.get("/home",(req, res)=>{
    res.render("home.ejs");
})
app.get("/login",(req, res)=>{
    res.render("login.ejs");
})
app.get("/signup",(req, res)=>{
    res.render("signup.ejs");
})

// app.get("/ig/:username",(req, res)=>{
//     let {username} = req.params;
//     res.render("instagram.ejs", {username});
// })

app.get("/loop",(req, res)=>{
    let n = 10;
    res.render("forLoop.ejs", {n});
})

app.get("/ig/:username", (req, res)=>{
    let data = require("./data.json");
    let {username} = req.params;
    let user = data[username];
    if(user){
        res.render("instagram.ejs", {user});
    }else{
        res.send("<h1>Account doesn't exist</h1>");
    }
})