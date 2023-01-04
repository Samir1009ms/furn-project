// login end Button start
const login = document.querySelector(".login")
const sign = document.querySelector(".sign")
const endBtn = document.querySelector(".end")
const signtxt = document.querySelector(".signb")

login.addEventListener("click", () => {
    sign.classList.toggle("hidden")
})

endBtn.addEventListener("click", () => {
    sign.classList.add("hidden")
})

signtxt.addEventListener("click", () => {
    sign.classList.remove("hidden")
    signUp.classList.add("hidden")
})
// login end Button end

// register Button start
const register = document.querySelector(".registerbtn")
const signUp = document.querySelector(".register")
const endR = document.querySelector(".endR")
const registertxt = document.querySelector(".registerb")

register.addEventListener("click", () => {
    signUp.classList.toggle("hidden")
})

endR.addEventListener("click", () => {
    signUp.classList.add("hidden")
})

registertxt.addEventListener("click", () => {
    signUp.classList.remove("hidden")
    sign.classList.add("hidden")
})
// register button end

// logo refresh 
const logorefresh = document.querySelector(".logo-text")
logorefresh.addEventListener("click", () => {
    location.reload()
})




