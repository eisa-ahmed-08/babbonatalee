const lampadina = document.getElementById("lampadina");
const bottone = document.getElementById("interruttore");

bottone.addEventListener("click", function () {
    lampadina.classList.toggle("accesa");

    if (lampadina.classList.contains("accesa")) {
        bottone.textContent = "Spegni";
    } else {
        bottone.textContent = "Accendi";
    }
});
