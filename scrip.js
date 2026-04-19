function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = (sidebar.style.left === "0px") ? "-250px" : "0px";
}

const links = document.querySelectorAll(".nav-item");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        document.getElementById("sidebar").style.left = "-250px";
    });
});

window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll(".step");

    sections.forEach((section, index) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 120;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            links.forEach(l => l.classList.remove("active"));
            links[index].classList.add("active");
        }
    });
});