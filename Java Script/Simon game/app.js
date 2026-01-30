let h2 = document.querySelector("h2");

let colors = ["red", "grey", "yellow", "blue"];
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
//press any key to start
document.addEventListener("keypress", ()=>{
    if(!started){
        console.log("Game started!");
        started = true;
        levelUp();
    }
})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    //select random box/btn
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    //flash that btn
    boxFlash(randBtn); 
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function boxFlash(box){
    box.classList.add("flash");
    setTimeout(() => {
        box.classList.remove("flash");
    }, 300);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", ()=>{
        userFlash(btn);
        let className = btn.classList[1];
        userSeq.push(className);
        checkAns(userSeq.length - 1);
        console.log(userSeq);
    })
}

function userFlash(btn){
    btn.classList.add("userflash");
        setTimeout(()=>{
        btn.classList.remove("userflash");
    }, 300);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score :  ${level-1}, Press any key to restart `;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = 'antiquewhite';
        },1000);
        reset();
    }
}

function reset(){
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}