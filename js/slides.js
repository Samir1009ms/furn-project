const leftBtn = document.querySelector(".leftbtn")
const rightBtn = document.querySelector(".rightbtn")
const list = document.querySelectorAll(".pagelen")

let uzunluq = list.length
let say = 1

function left() {

    if (say === 0) {
        say = uzunluq
        console.log("sssss1")
        if (say === uzunluq) {
            say--
            console.log("sssss11")
        }
    } else {
        say--
        console.log("sssss2")
    }
    list.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - say) * 108}%)`
        console.log(slide, index)
    })

    rightBtn.addEventListener("click", () => { })

}

console.log(left())
leftBtn.addEventListener("click", left)

say = 0
function right() {

    if (say === uzunluq - 1) {
        say = 0
    }
    else {
        say++
    }

    list.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - say) * 108}%)`
    })
}
rightBtn.addEventListener("click", right)
// setInterval(right, 2000)

const tables = document.querySelectorAll(".tableSlides")
const lBtn = document.querySelector(".tableLeftBtn")
const rBtn = document.querySelector(".tableRightbtn")
let len = tables.length
let saygac = 1


function tablesleft() {

    if (saygac === 0) {
        saygac = len
        if (saygac === len) {
            saygac--
        }
    }
    else {
        saygac--
        console.log("sdw", saygac)
    }
    tables.forEach((slide2, index2) => {
        slide2.style.transform = `translateX(${(index2 - saygac) * 108}%)`
    })
    rBtn.addEventListener("click", () => { })
}
console.log(tablesleft())
lBtn.addEventListener("click", tablesleft)


saygac = 0
function tablesright() {

    if (saygac === len - 1) {
        saygac = 0
    }
    else {
        saygac++
    }
    tables.forEach((slide2, index2) => {

        slide2.style.transform = `translateX(${(index2 - saygac) * 108}%)`
    })
}
rBtn.addEventListener("click", tablesright)


const tablbtn = document.querySelector(".tables-container-button")
const tabldown = document.querySelector(".tables-container-down")
const tableup = document.querySelector(".tables")
const tabllist1 = document.querySelector(".tabl1")
const tabllist2 = document.querySelector(".tabl2")
const tabllist3 = document.querySelector(".tabl3")
const tabllist4 = document.querySelector(".tabl4")
const tabllist5 = document.querySelector(".tabl5")
const tabllist6 = document.querySelector(".tabl6")

let s = 0
tablbtn.addEventListener("click", () => {

    if (s === 0) {
        tabldown.classList.add("down2")
        tableup.classList.add("tabl")
        tabllist1.setAttribute("style", "position:relative")
        tabllist2.setAttribute("style", "position:relative")
        tabllist3.setAttribute("style", "position:relative")
        tabllist4.setAttribute("style", "position:relative")
        tabllist5.setAttribute("style", "position:relative")
        tabllist6.setAttribute("style", "position:relative")
        // tabllist.classList.add(".btnclass")
        s++
        lBtn.setAttribute("style", "display:none")
        rBtn.setAttribute("style", "display:none")

    } else {
        tabldown.classList.remove("down2")
        tableup.classList.remove("tabl")
        tabllist1.setAttribute("style", "position:absolute")
        tabllist2.setAttribute("style", "position:absolute")
        tabllist3.setAttribute("style", "position:absolute")
        tabllist4.setAttribute("style", "position:absolute")
        tabllist5.setAttribute("style", "position:absolute")
        tabllist6.setAttribute("style", "position:absolute")
        lBtn.setAttribute("style", "display:block")
        rBtn.setAttribute("style", "display:block")
        // slides 1 den baslasin deye yazmisam
        saygac = 1
        tablesleft()
        s--
    }

})


const pickslides = document.querySelectorAll(".Pickslides")
const pickLeftBtn = document.querySelector(".pickLeftBtn")
const pickRightBtn = document.querySelector(".pickRightBtn")
const pickcontainer = document.querySelector(".pick-container-down")
const pickBtn = document.querySelector(".pick-container-button")
let cont = 1
let leng = pickslides.length
function pickleft() {
    if (cont === 0) {
        cont = leng
        if (cont === leng) {
            cont--
        }
    }
    else {
        cont--
    }
    pickslides.forEach((slide3,index3)=>{
    slide3.style.transform=`translateX(${(index3-cont)*108}%)`
    })

    pickRightBtn.addEventListener("click",()=>{})

}
pickleft()
pickLeftBtn.addEventListener("click",pickleft)

cont=0
function pickright(){

    if(cont===leng-1){
        cont=0
    }
    else{
        cont++
    }
    pickslides.forEach((slide3,index3)=>{
        slide3.style.transform=`translateX(${(index3-cont)*108}%)`
    })
}
pickRightBtn.addEventListener("click",pickright)

const pickclass=document.querySelector(".pick")
const pickcontainerdown=document.querySelector(".pick-container-down")
const pickpagebtn=document.querySelector(".pick-container-button")
const picktabl1=document.querySelector(".picktabl1")
const picktabl2=document.querySelector(".picktabl2")
const picktabl3=document.querySelector(".picktabl3")
const picktabl4=document.querySelector(".picktabl4")
const picktabl5=document.querySelector(".picktabl5")
const picktabl6=document.querySelector(".picktabl6")

let m=0
pickpagebtn.addEventListener("click",()=>{
    if(m===0){
        pickcontainerdown.classList.add("pickdown")
        pickclass.classList.add("pickclass")
        picktabl1.setAttribute("style", "position:relative")
        picktabl2.setAttribute("style", "position:relative")
        picktabl3.setAttribute("style", "position:relative")
        picktabl4.setAttribute("style", "position:relative")
        picktabl5.setAttribute("style", "position:relative")
        picktabl6.setAttribute("style", "position:relative")
        pickLeftBtn.setAttribute("style", "display:none")
        pickRightBtn.setAttribute("style", "display:none")
        m++
    }
    else{
        pickcontainerdown.classList.remove("pickdown")
        pickclass.classList.remove("pickclass")
        picktabl1.setAttribute("style", "position:absolute")
        picktabl2.setAttribute("style", "position:absolute")
        picktabl3.setAttribute("style", "position:absolute")
        picktabl4.setAttribute("style", "position:absolute")
        picktabl5.setAttribute("style", "position:absolute")
        picktabl6.setAttribute("style", "position:absolute")
        pickLeftBtn.setAttribute("style", "display:block")
        pickRightBtn.setAttribute("style", "display:block")
         // slides 1 den baslasin deye yazmisam
         cont=1
         pickleft()
        m--
    }
})