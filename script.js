let innerdiv=document.querySelector(".inner");
let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let grow=0;


btn.addEventListener("click", function() {
  btn.style.opacity=0.5;
   let num=50+Math.floor(Math.random()*50);  
    console.log(num);
  btn.style.pointerEvents="none";
    let int=setInterval(()=> {
        grow++;
       h1.innerHTML=grow+"%";
       innerdiv.style.width=grow + "%";
        
    },num)

    setTimeout(()=> {
        clearInterval(int);

    },num*100);
   
})

