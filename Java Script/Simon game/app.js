let gameSeq = [];
let userSeq = [];
let colors = ["red","grey","yellow","blue"];
let h2 = document.querySelector("h2");

let level = 0;
let started = false;

//press any key to start
document.addEventListener("keypress", function(){
    if(!started){
        console.log("game started!");
        started = true;
        levelUp();
    }

});

//next level
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //select random button
    let randIdx = Math.floor(Math.random() * 4);    //generate random index
    let randColor = colors[randIdx];                  //store color
    let randBtn = document.querySelector(`.${randColor}`); //select class to flash
    gameSeq.push(randColor);
    btnFlash(randBtn);
    console.log("game : " + gameSeq);
}

//flash random button
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 200);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", function(){
        let colorName = this.classList[0];
        userFlash(this);
        userSeq.push(`${colorName}`);
        console.log("user : " + userSeq);
        checkAns(userSeq.length-1);
    });
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout( levelUp, 1000);
        }
    }else{
       h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Press any key to start.`;

    document.querySelector("body").style.backgroundColor = "red";

    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "antiquewhite";
    }, 400);

reset();

    }
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}