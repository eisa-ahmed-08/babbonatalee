function confronta() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);

  let b1 = document.getElementById("b1");
  let b2 = document.getElementById("b2");

  if (n1 > n2) {
    b1.style.backgroundColor = "green";
    b2.style.backgroundColor = "gray";
  } else if (n2 > n1) {
    b2.style.backgroundColor = "green";
    b1.style.backgroundColor = "gray";
  } else {
    b1.style.backgroundColor = "yellow";
    b2.style.backgroundColor = "yellow";
  }
}
