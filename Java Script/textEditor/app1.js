let inp = document.querySelector("#text");

inp.addEventListener("input", function(){
    let para = document.querySelector("#paragraph");
    para.innerText = this.value;
})