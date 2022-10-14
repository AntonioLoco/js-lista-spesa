// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// DATI
const shoppingList = document.querySelector(".shopping-list");
const userProduct = document.getElementById("user-product");
const btnAdd = document.getElementById("btn-add");
const btnRemove = document.getElementById("btn-remove");
const btnCancel = document.getElementById("btn-cancel");



// Creo la lista della spesa
let productList = [];
let i = 0;

// Button aggiungi
btnAdd.addEventListener("click", function(){
    // Prendo il valore dell input
    const userProductValue = userProduct.value.trim();
    if(userProductValue !== ""){
        productList.push(userProductValue);
        console.log(productList);
        while( i < productList.length){
            // Prendo il valore corrente
            const thisElement = productList[i];
        
            // Creo l'elemento che andrà nella lista
            const listItem = document.createElement("li");
            const textItem = document.createTextNode(thisElement);
            listItem.appendChild(textItem);
            listItem.classList.add("list-item");
        
            // Aggiungo l'elemento nella lista
            shoppingList.appendChild(listItem);

            // Svuoto il campo di input
            userProduct.value = "";
        
            i++;
        }

    } else {
        alert("Inserisci un prodotto!!!");
        userProduct.value = "";
    }
});

// Button Rimuovi
btnRemove.addEventListener("click", function(){
    if(productList.length > 0){
        // togliamolo dall'array
        productList.pop();
        console.log(productList);

        i--;

        //rimuovo l'elemento dalla pagina
        shoppingList.removeChild(shoppingList.lastElementChild);
    } else {
        alert("La lista è gia vuota");
    }
});

// Button Annulla
btnCancel.addEventListener("click", function(){
    // Svuoto la lista
    productList = [];
    console.log(productList);

    // Svuoto il campo di input
    userProduct.value = "";

    while( i >= 0){
        //rimuovo l'elemento dalla pagina
        shoppingList.removeChild(shoppingList.lastElementChild);

        i--;
    }
});
