const express = require("express");
const app = express();
const path = require("path");

const port = 5000;
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

app.listen(port, ()=>{
    console.log("http://localhost:5000");
})

app.get("/", (req, res)=>{
    res.send("Response");
})
