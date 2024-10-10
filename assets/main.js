// #region dichiarazione variabili
let basePrice;
let formElement = document.querySelector('form');
let userName = document.getElementById('name-surname');
let userDistance = document.getElementById('kms');
let userAge = document.getElementById('yrs');
// #endregion dichiarazione variabili

// #region funzioni da richiamare dentro l'evento

// funzione random per carrozza e codice cp
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// funzione per mostrare l'output al submit
function classRemove(cl) {
    let output = document.getElementById('result');
    output.classList.remove(cl);
}
// #endregion funzioni da richiamare dentro l'evento

// #region evento per premuta tasto
formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    // richiamo funzione remove
    classRemove('d-none');

    // dichiarazione variabili di valore input
    const inputName = userName.value;
    const inputDistance = userDistance.value;
    const inputAge = userAge.value;

    // calcolo prezzo per km
    basePrice = inputDistance * 0.21;

    // applicazione sconto
    if (inputAge < 18 && inputAge > 0) {
        basePrice = basePrice - (basePrice * 0.2);
        document.getElementById('out-offer').innerHTML = 'Biglietto ridotto - minorenni';
    }
    else if (inputAge >= 65) {
        basePrice = basePrice - (basePrice * 0.4);
        document.getElementById('out-offer').innerHTML = 'Biglietto ridotto - pensionati';
    }
    else {
        document.getElementById('out-offer').innerHTML = 'Biglietto standard';
    }

    // richiami funzione random e stampa nell'output
    document.getElementById('out-name').innerHTML = inputName;
    document.getElementById('out-random-1').innerHTML = randomNum(1, 21);
    document.getElementById('out-random-2').innerHTML = randomNum(11111, 99999);
    document.getElementById('out-price').innerHTML = `${basePrice.toFixed(2)}€`;
})
// #endregion evento per premuta tasto