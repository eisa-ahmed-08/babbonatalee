
 
    function genera() {
      let numero = Number(document.getElementById("num").value);
      let ul = document.getElementById("lista");

      ul.innerHTML = "";

      for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.textContent = numero + " x " + i + " = " + (numero * i);

        // effetto zebra
        if (i % 2 == 0) {
          li.style.backgroundColor = "#f0f0f0";
        }

        ul.appendChild(li);
      }
    }
