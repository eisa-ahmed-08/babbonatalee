let contatore = 0; 

function aggiorna() {
  let h1 = document.getElementById("count");
  h1.textContent = contatore;

  h1.style.fontWeight = contatore > 10 ? "bold" : "normal";

  if (contatore > 0) h1.style.color = "green";
  else if (contatore < 0) h1.style.color = "red";
  else h1.style.color = "black";
}

function piu() {
  contatore++;
  aggiorna();
}

function meno() {
  contatore--;
  aggiorna();
}


