// MENU HAMBURGUER
const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector("nav")

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active")
});

// SCROLL
window.addEventListener("scroll", () => {

    const header = document.querySelector("header")

    if(window.scrollY > 100){
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll");
    }
});

const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });

});

sections.forEach(section => {
    observer.observe(section);
});

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

    form.reset();
});

