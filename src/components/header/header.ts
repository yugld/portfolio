document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("mobile");
    document.querySelector("body").classList.toggle("hidden");
});
document.querySelector(".menu_item").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("mobile");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
