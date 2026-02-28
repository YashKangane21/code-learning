const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log("listening...");
})

app.get("/", (req, res)=>{
    res.send("<h1>This is home page</h1>");
})
app.get("/home", (req, res)=>{
    res.send("<h1>This is home page</h1>");})
app.get("/login", (req, res)=>{
    res.send("<h1>This is login page</h1>");})
app.get("/signup", (req, res)=>{
    res.send("<h1>This is signup page</h1>");})
app.get("/dashboard", (req, res)=>{
    res.send("<h1>This is dashboard page</h1>");
})
app.get("/explore", (req, res)=>{
    res.send("<h1>This is explore page</h1>");
})
app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    console.log(username);
})
app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params
    console.log("Username :", username);
    console.log("ID :", id);
    res.send(`Welcome, @${username}`);

})
// query string (...search?q=value)
app.get("/search",(req, res)=>{
    let {q} = req.query;
    console.log(q);
    res.send(`searching for ${q}`);
})
app.get("/*slant", (req, res)=>{
    res.send("<h1>Page doesn't exists</h1>");
})