const testo = document.getElementById("testo");
const btnAumenta = document.getElementById("aumenta");
const btnDiminuisci = document.getElementById("diminuisci");

let dimensione = 16;

btnAumenta.addEventListener("click", function () {
    dimensione++;
    testo.style.fontSize = dimensione + "px";
});

btnDiminuisci.addEventListener("click", function () {
    if (dimensione > 10) {
        dimensione--;
        testo.style.fontSize = dimensione + "px";
    }
});
