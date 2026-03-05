const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const port = 8080;
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
const { v4: uuidv4 } = require("uuid");
let posts = [
    {
        id: uuidv4(),
        username : "yash.k__21",
        caption : "Trekoholic"
    },
    {
        id: uuidv4(),
        username : "photograph_loverz",
        caption : "I am passionate about photography"
    },
    {
        id: uuidv4(),
        username : "workout_with_me",
        caption : "DM for personal training and diet plan"
    }
];
app.listen(port, ()=>{
    console.log("http://localhost:8080/posts");
})
app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
})
app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
})
app.post("/posts", (req, res)=>{
    let {username, caption} = req.body;
    let id = uuidv4();
    posts.push({id, username, caption});
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    if(!post){
        return res.send("<h1>Post not found</h1>");
    }
    res.render("show.ejs", {post});
})

app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newCaption = req.body.caption;

    let post = posts.find((p)=> id === p.id);
    if(!post){
        return res.send("Not found!");
    }
    post.caption = newCaption;
    console.log(newCaption);
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id === p.id);
    if(!post){
        return res.send("Not found");
    }
    res.render("edit.ejs", { post });
})

app.delete("/posts/:id", (req, res)=>{
    let { id } = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})