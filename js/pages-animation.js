const header = document.querySelector("#header")
const animation=document.querySelector(".animation")
const main =document.querySelector(".main")
const footer=document.querySelector(".footer")


// // refresh animation
let time = 0;
let interval = setInterval(function(){
    time += 1;
    if(time === 3){  
        clearInterval(interval);
        // console.log("ss")
        header.classList.remove("hidden")
        animation.classList.add("hidden")
        main.classList.remove("hidden")
        footer.classList.remove("hidden")
    }
    else{
        header.classList.add("hidden")
        main.classList.add("hidden")
        footer.classList.add("hidden")
    // console.log("ss1")
    }
},1000);

