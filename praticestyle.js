const buttontag=document.getElementsByClassName("button")[0]


for (let i=0; i<5;i++){
    const litag=document.getElementsByTagName("li")[i];
    buttontag.addEventListener("click",()=>{
        if(i===0){
            litag.style.transform="rotate(0deg) translate(3em,4em) rotate(0deg)";

        }
        if(i===1){
            litag.style.transform="rotate(45deg) translate(5em,2em) ";
            
        }
        if(i===2){
            litag.style.transform="rotate(90deg) translate(5em,0.5em) ";
            
        }
        if(i===3){
            litag.style.transform="rotate(140deg) translate(5em)";
            
        }
        if(i===4){
            litag.style.transform="rotate(180deg) translate(5em) ";
            
        }
        // litag.style.transform="translateX(0)";
        litag.style.opacity="1";
    })
}