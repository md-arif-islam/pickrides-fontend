const closeBtn = document.querySelector(".js__sidenav-close");
const openBtn = document.querySelector(".js__sidenav-open");
const sidenavArea = document.querySelector(".js__sidenav-area");


openBtn.addEventListener("click", (e) => {
    sidenavArea.classList.remove("side-nav--close");
    document.querySelector("body").style.marginRight = "6rem";
});

closeBtn.addEventListener("click", (e) => {
    sidenavArea.classList.add("side-nav--close");
    document.querySelector("body").style.marginRight = "0";
});
