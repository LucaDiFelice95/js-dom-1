"use strict";

// ESTRAGGO DAL DOM LE CLASSI CHE MI OCCORRONO E LE INSERISCO IN DELLE VARIABILI
const lamp = document.querySelector(".lamp");
const btn = document.querySelector(".btn");
// STATO DELLA LAMPADINA
let activeState = 0;

//COSTRUISCO UNA FUNZIONE DI ACCESNIONE E SPEGNIMENTO
const turnOn = function () {
  // SE LO STATO DELLA LAMPADINA è SPENTO
  if (activeState === 0) {
    //SOSTITUISCO L'IMMAGINE ALLA CLASSE .lamp
    lamp.src = "../assets/img/yellow_lamp.png";
    // CAMBIO LO STATO DELLA VARIABILE DA 0 A 1
    activeState = 1;
    // SCRIVO SUL BOTTONE 'SPEGNI'
    btn.textContent = "Spegni";
  } else {
    // SOSTITUISCO L'IMMAGINE ALLA CLASSE .lamp
    lamp.src = "../assets/img/white_lamp.png";
    // CAMBIO LO STATO DELLA VARIABILE DA 0 A 1
    activeState = 0;
    // SCRIVO SUL BOTTONE 'ACCENDI'
    btn.textContent = "Accendi";
  }
};

btn.addEventListener("click", turnOn);
