// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// DATI
const shoppingList = document.querySelector(".shopping-list");
console.log(shoppingList);

// Creo la lista della spesa
const listaSpesa = [
    "pane",
    "acqua",
    "biscotti",
    "latte",
    "pasta",
    "pomodori"
];
console.log(listaSpesa);


// ELABORAZIONE
// Stampo 
let i = 0;

while( i < listaSpesa.length){
    // Prendo il valore corrente
    const thisElement = listaSpesa[i];

    // Creo l'elemento che andrà nella lista
    const listItem = `<li class="list-item">${thisElement}</li>`;

    // Aggiungo l'elemento nella lista
    shoppingList.innerHTML += listItem;

    i++;
}