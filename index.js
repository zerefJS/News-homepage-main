const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const navContainer = document.querySelector(".nav-container-links");
const back = document.querySelector(".back");


closeBtn.addEventListener("click", function () {
    openBtn.style.display = "block";
    this.style.display = "none";
    navContainer.style.display = "none";
    back.classList.remove("active");
});

openBtn.addEventListener("click", function() {
    closeBtn.style.display = "block";
    this.style.display = "none"
    navContainer.style.display = "flex";
    back.classList.add("active")
})