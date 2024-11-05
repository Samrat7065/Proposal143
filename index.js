let yes = document.getElementById("yes");
let no = document.getElementById("no");
let message = document.getElementById("message");

no.addEventListener("mouseover",()=>{
    no.style.position = "absolute";
    no.style.top = Math.random()*40 + "vw";
    no.style.right = Math.random()*40 + "vw";
    
})

yes.addEventListener("click",()=>{
    message.style.display = "block";
})

message.addEventListener("click",()=>{
    message.style.display = "none";
})