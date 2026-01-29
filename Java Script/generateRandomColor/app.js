let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let box = document.querySelector(".box");


btn.addEventListener("click", function(){
    let randomColor = changeColor();
    h2.innerText = randomColor;
    box.style.backgroundColor = randomColor;
})

function changeColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}