

    function saluta() {
      let nome = document.getElementById("nome").value;
      let genere = document.getElementById("genere").value;
      let inputNome = document.getElementById("nome");
      let messaggio = document.getElementById("messaggio");

      inputNome.style.border = "2px solid black";


      if (nome === "") {
        messaggio.textContent = "Inserisci il nome";
        inputNome.style.border = "2px solid red";
      }
      else if (genere === "uomo") {
        messaggio.textContent = "Benvenuto " + nome + " negro di merda";
        inputNome.style.border = "2px solid blue";
      }
      else if (genere === "donna") {
        messaggio.textContent = "Benvenuta " + nome + " negro di merda";
        inputNome.style.border = "2px solid pink";
      }
      else {
        messaggio.textContent = "Seleziona il genere.";
      }
    }
 