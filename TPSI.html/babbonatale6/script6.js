
function verifica() {
  let testo = document.getElementById("testo").value.trim().toLowerCase();
  let invertito = testo.split("").reverse().join("");
  let r = document.getElementById("risultato");

  if(testo && testo === invertito){
    r.style.background = "green";
    r.innerText = "✅ Palindromo!";
  } else {
    r.style.background = "red";
    r.innerText = "❌ Non Palindromo!";
  }
}
