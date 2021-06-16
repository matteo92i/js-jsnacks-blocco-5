var palla = {
    nome: 'palla',
    peso: '10'
}
console.log(palla)

// snak 1 continuazione

var newPeso = parseInt (prompt('Inserisci il nuovo peso'));
palla.peso = newPeso
console.log(palla)

// snak 1 continua

var giochi = [];
giochi.push(palla)
console.log(giochi)

// snack 1 fine


var newNomeUno = prompt('Inserisci il nome del nuovo gioco');
var newPesoUno = prompt('Inserisci il peso del nuovo oggetto');

giochi.push({
    nome: newNomeUno,
    peso: newPesoUno,
})


