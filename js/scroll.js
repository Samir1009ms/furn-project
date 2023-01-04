const icon=document.querySelector(".turn")
const logo=document.querySelector(".logo")
const logotext=document.querySelector(".logo-text")
window.addEventListener("scroll",()=>{
    // console.log(window.scrollY)
    if(window.scrollY>450){
        header.setAttribute("style","position:fixed; transition: 0.35s;")
        logo.classList.add("logoo")
        logotext.classList.add("textlogo")
        console.log("ssss")
        if(window.screen.width>1000){
            console.log("sss1s")
        }else{
            header.setAttribute("style","position:")
            logo.classList.remove("logoo")
            logotext.classList.remove("textlogo")
            console.log("ssss2")
        }
    }
    else{
        header.setAttribute("style","position:")
        logo.classList.remove("logoo")
        logotext.classList.remove("textlogo")
    }
   
   
})

window.addEventListener("scroll",()=>{
    if(window.scrollY>1200){
        icon.classList.remove("hidden")
        
    }
    else{
    icon.classList.add("hidden")
    }
})
icon.addEventListener("click",()=>{
    window.scrollTo(0, document.body.scrollTo)
})
