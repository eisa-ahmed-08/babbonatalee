

function calcolaSomma() {
   
    let input = document.getElementById('prezzi').value;

  
    let arrayPrezzi = input.split(',').map(function(item) {
        return parseFloat(item.trim()); 
    });


    let totale = arrayPrezzi.reduce((acc, val) => acc + val, 0);


    let totaleElement = document.getElementById('totale');
    totaleElement.textContent = 'Totale: ' + totale.toFixed(2) + ' €';

 
    let messaggioElement = document.getElementById('messaggio');
    if (totale > 100) {
        totaleElement.classList.add('superato');
        messaggioElement.textContent = 'Budget Superato!';
    } else {
        totaleElement.classList.remove('superato');
        messaggioElement.textContent = '';
    }
}
