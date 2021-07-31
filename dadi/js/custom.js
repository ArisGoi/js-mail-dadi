// 1) genero un numero casuale per l'utente e uno per il banco
var userDice = parseInt(Math.random() * 6) + 1;
var cpuDice = parseInt(Math.random() * 6) + 1;

// 2) creo una variabile che contiene i risultati
var risultati = 'il tuo dado: ' + userDice + '   il dado del banco: ' + cpuDice;

// 3) Stabilisco il vincitore e mostro i risultati e l'esito
if (userDice > cpuDice){
    alert(risultati + '   HAI VINTO!!')
} else if (userDice < cpuDice){
    alert(risultati + '   HAI PERSO!')
} else{
    alert(risultati + '   HAI UN PAREGGIO!')
}