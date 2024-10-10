// #region dichiarazione variabili
let basePrice;
let formElement = document.querySelector('form');
let userName = document.getElementById('name-surname');
let userDistance = document.getElementById('kms');
let userAge = document.getElementById('yrs');
// #endregion dichiarazione variabili

// #region funzioni da richiamare dentro l'evento

// funzioni random per carrozza e codice cp
function randomSeat() {
    let seat = Math.floor((Math.random() * 20) + 1);
    document.getElementById('out-random-1').innerHTML = seat;
}

function randomId() {
    let codex = Math.floor((Math.random() * 99999) + 11111);
    document.getElementById('out-random-2').innerHTML = codex;
}

// funzione per mostrare l'output al submit
function classRemove() {
    let output = document.getElementById('result');
    output.classList.remove('d-none');
}
// #endregion funzioni da richiamare dentro l'evento

// #region evento per premuta tasto
formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    // rimozione o toggle classe per mostrare la regione output
    classRemove();

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

    // richiama le funzioni random
    randomSeat();
    randomId();

    // stampa nell'output
    document.getElementById('out-name').innerHTML = inputName;
    document.getElementById('out-price').innerHTML = `${basePrice.toFixed(2)}€`;
})
// #endregion evento per premuta tasto