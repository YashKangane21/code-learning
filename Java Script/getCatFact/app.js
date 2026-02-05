let url = "https://catfact.ninja/fact";
let p = document.querySelector("#para");
let btn = document.querySelector("button");

btn.addEventListener("click",getFact);

async function getFact(){
    try{
        let res = await axios.get(url);
        console.log("Fact : ", res.data.fact);
        p.innerHTML = `<b>Fact :</b>${res.data.fact}`;
    }catch(e){
        console.log(e);
    }
}