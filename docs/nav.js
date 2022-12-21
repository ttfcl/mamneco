const navbar = document.querySelector("#navbar")
const nav1 = document.querySelector(".nav1")
const nav2 = document.querySelector(".nav2")
const nav3 = document.querySelector(".nav3")
const nav4 = document.querySelector(".nav4")
const Button = document.querySelector(".navbar-toggler")
const moving = document.querySelector(".moving")

moving.onclick = () => {
    location.href = "#"
}
let navCount = 0

Button.onclick = () => {
    if(navCount === 0) {
        navCount++
        navbar.classList.remove("navbarBT")
        nav1.classList.remove("white")
        nav2.classList.remove("white")
        nav3.classList.remove("white")
        nav4.classList.remove("white")
        navbar.classList.add("navbarBW")
        nav1.classList.add("black")
        nav2.classList.add("black")
        nav3.classList.add("black")
        nav4.classList.add("black")
    }else {
        navCount = 0
        navbar.classList.remove("navbarBW")
        nav1.classList.remove("black")
        nav2.classList.remove("black")
        nav3.classList.remove("black")
        nav4.classList.remove("black")
        navbar.classList.add("navbarBT")
        nav1.classList.add("white")
        nav2.classList.add("white")
        nav3.classList.add("white")
        nav4.classList.add("white")
    }
}

window.addEventListener('scroll', function(){
    if(window.scrollY > 50) {
        navbar.classList.remove("navbarBT")
        nav1.classList.remove("white")
        nav2.classList.remove("white")
        nav3.classList.remove("white")
        nav4.classList.remove("white")
        navbar.classList.add("navbarBW")
        nav1.classList.add("black")
        nav2.classList.add("black")
        nav3.classList.add("black")
        nav4.classList.add("black")
    }else if(window.scrollY <= 50 && navCount === 0){
        navbar.classList.remove("navbarBW")
        nav1.classList.remove("black")
        nav2.classList.remove("black")
        nav3.classList.remove("black")
        nav4.classList.remove("black")
        navbar.classList.add("navbarBT")
        nav1.classList.add("white")
        nav2.classList.add("white")
        nav3.classList.add("white")
        nav4.classList.add("white")
    }
});