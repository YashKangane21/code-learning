let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let inp = document.querySelector("#task");

btn.addEventListener("click", ()=>{
    let newli = document.createElement("li");
    let newbtn = document.createElement("button");
    newli.innerText = inp.value;
    newbtn.innerText = "Delete";
    ul.append(newli);
    newli.append(newbtn);

    newbtn.addEventListener("click", ()=>{
        newli.remove();
    })

    inp.value="";
})