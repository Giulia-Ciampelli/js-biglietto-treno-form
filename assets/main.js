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
let form_element = document.querySelector('form');
let name = document.getElementById('name-surname');
let distance = document.getElementById('kms');
let age = document.getElementById('yrs');
console.log(name, distance, age);

// funzione:
// calcolo prezzo per km, da mettere in una funzione
basePrice = distance * 0.21;

// evento per premuta tasto
form_element.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // dichiarazione variabili con evento
    const inputName = e.target.name-surname.value;
    const inputDistance = e.target.kms.value;
    const inputAge = e.target.yrs.value;
    console.log(inputName, inputAge, inputDistance);
})
