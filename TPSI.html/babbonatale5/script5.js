
function analizza() {
  let testo = document.getElementById("testo").value;
  let count = 0;

  for (let c of testo) {
    if ("aeiouAEIOU".includes(c)) count++;
  }

  let r = document.getElementById("risultato");
  r.style.display = "block";
  r.innerText = "Vocali: " + count;
  if (count > 10) r.style.fontSize = "24px";
}
