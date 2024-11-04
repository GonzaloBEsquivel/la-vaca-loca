const nav = document.querySelector("#nav_menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav_menu.classList.add("visible");
});

cerrar.addEventListener('click', () => {
    nav_menu.classList.remove('visible');
})
