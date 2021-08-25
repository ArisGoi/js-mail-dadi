// 1) Creo una whitelist
var whiteList = ["samuele@boolean.com", "info@boolean.com", "fabrizio@boolean.com", "alessandro@boolean.com"];

// 2) Chiedo di inserire la mail con un prompt
var mailControl = prompt('Scrivi la tua email');

// 3) Controllo se l amail inserita corrisponde a quella nella whiteList
var whitePass = false;

for ( i = 0; i < whiteList.length; i++){

    if (mailControl == whiteList[i]){
        whitePass = true;
    }
}
// 4) Se il ciclo precendete non si è realizzato (e non ha attivato il break) allora la var i sarà maggiore di 0 e si attivo l'alert negativo
if (whitePass == true){
    alert('La mail è nella whitelist!');
} else {
    alert('La mail non è nella whitelist');
}