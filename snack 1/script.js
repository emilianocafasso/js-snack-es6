/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bicycles = [
    {
        name: 'Numero-1',
        weight: 10
    },
    {
        name: 'Numero-2',
        weight: 15
    },
    {
        name: 'Numero-3',
        weight: 12
    },
    {
        name: 'Numero-4',
        weight: 9
    },
    {
        name: 'Numero-5',
        weight: 11
    }
]

//creato l'array, inizio con il ciclo for per la ricerca dela bici con peso minore

//creo la mia variabile da stampare e prendo come bici più leggera la prima così da poter iniziare il confronto
let bike = bicycles[0]


for(let i=0; i<bicycles.length; i++) {
    const thisObject = bicycles[i] //richiamo l'oggetto i-esimo

    //se thisObject ha peso minore di bike, bike (ovvero la bici più leggera) divente proprio thisObject
    if(thisObject.weight < bike.weight) {
        bike = thisObject
    }
}
console.log(bike); //stampa della bici più leggera


