/*Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const teams = [
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    },
    {
        name: 'Bologna',
        points: 0,
        fouls: 0
    },
    {
        name: 'Como',
        points: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Sassuolo',
        points: 0,
        fouls: 0
    }
]

//creo la funzione per generare numeri interi casuali 
function randomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//ciclo per assegnare numeri random a punti e falli
for(let i=0; i<teams.length; i++) {
    teams[i].points = randomInteger(1,50)
    teams[i].fouls = randomInteger(1,20)
}

//creo nuovo array di oggetti
const names_fouls = []


