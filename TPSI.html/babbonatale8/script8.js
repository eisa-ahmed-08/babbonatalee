

function filtraPari() {
    let input = document.getElementById('numeri').value;
    let arrayNumeri = input.split(',').map(n => parseInt(n.trim()));
    let pari = arrayNumeri.filter(n => n % 2 === 0);
    let contenitore = document.getElementById('contenitore');
    contenitore.innerHTML = '';
    pari.forEach(n => {
        let pallino = document.createElement('div');
        pallino.className = 'pallino';
        pallino.textContent = n;
        contenitore.appendChild(pallino);
    });
}

