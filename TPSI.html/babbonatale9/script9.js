const bottone = document.getElementById("btnColora");
const input = document.getElementById("colore");

bottone.addEventListener("click", function () {
    let valore = input.value;

    if (valore === "random") {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (valore === "gay") {
document.body.style.background =
            "linear-gradient(45deg, red, yellow, green, cyan, blue, purple)";
    }  else if (valore === "negro") {
       document.body.style.backgroundColor = "black";
    } 
    else {
        document.body.style.backgroundColor = valore;
    }
});
