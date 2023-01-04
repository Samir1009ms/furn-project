// dark mode button start

const toggleBtn = document.querySelector("#buton");
const theme = localStorage.getItem("theme");
const dark = document.querySelector(".light")
const them = localStorage.getItem("them")

if (theme === "dark") document.body.classList.add("dark")
if (them === "dark") dark.classList.add("dark")

toggleBtn.addEventListener("click", () => {
    dark.classList.toggle("dark")
    document.body.classList.toggle("dark")

    if (theme === "dark" && them === "dark") {
        localStorage.setItem("them", "light")
        localStorage.setItem("theme", "light")
    } else {
        localStorage.setItem("theme", "dark")
        localStorage.setItem("them", "dark")
    }
})
// dark mode button end

// list dropdown start
const drop = document.querySelector(".list-up")
const down = document.querySelector(".list-up-pop")

drop.addEventListener("click", () => {
    down.classList.toggle("hidden")
})

const drop2 = document.querySelector(".list-up2")
const down2 = document.querySelector(".list-up2-pop2")
drop2.addEventListener("click", () => {
    down2.classList.toggle("hidden")
    console.log("s")
})

// list dropdown end
// login button start

// login button end

const menubtn=document.querySelector(".menubtn")
const headerlist=document.querySelector(".header-list")


function mainlist(){
    headerlist.classList.toggle("hidden")

}
mainlist()
menubtn.addEventListener("click",mainlist)

window.addEventListener("scroll",()=>{
    if(window.screen.width>767){
        headerlist.classList.remove("hidden")
    }else{
        headerlist.classList.add("hidden")
    }

})
