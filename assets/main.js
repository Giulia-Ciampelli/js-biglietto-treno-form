console.log('im alive');

// cosa c'è in più dell'es di prima?
// output di tutti i dati del form
// tipo di prezzo
// n° carrozza e codice cp (n° random, funzioni?)

// passi:
// collegare gli elementi del form e dell'output al file js
// creare delle funzioni che prendano gli input del form
// collegare gli eventi al click
// calcolare i dati del form con una funzione
// stampare nell'output (con document.getElementById('id')?)

// dichiarazione variabili
let basePrice;
let formElement = document.querySelector('form');
let userName = document.getElementById('name-surname');
let userDistance = document.getElementById('kms');
let userAge = document.getElementById('yrs');
console.log(userName, userDistance, userAge);

// funzione:

// evento per premuta tasto
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // dichiarazione variabili di valore input
    const inputName = userName.value;
    const inputDistance = userDistance.value;
    const inputAge = userAge.value;
    
    // calcolo prezzo per km, da mettere in una funzione
    basePrice = inputDistance * 0.21;
    
    // applicazione sconto
    if (inputAge < 18) {
        basePrice = basePrice - (basePrice * 0.2);
    }
    else if (inputAge >= 65) {
        basePrice = basePrice - (basePrice * 0.4);
    }
    
    console.log(inputName, inputAge, inputDistance, basePrice);
})
