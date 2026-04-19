// TAB
function openTab(id) {
    document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    document.getElementById(id).classList.add("active");
    event.target.classList.add("active");
}

// SEARCH
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        let value = searchInput.value.toLowerCase();
        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            let text = card.textContent.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });
    });
}
