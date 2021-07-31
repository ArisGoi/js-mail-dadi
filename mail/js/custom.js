// 1) Creo una whitelist
var whiteList = ["samuele@boolean.com", "info@boolean.com", "fabrizio@boolean.com", "alessandro@boolean.com"];

// 2) Chiedo di inserire la mail con un prompt
var mailControl = prompt('Scrivi la tua email');

// 3) Controllo se l amail inserita corrisponde a quella nella whiteList
for ( i = 0; i < whiteList.length; i++){
    // Se corrisponde attivo l'alert positivo
    if (mailControl == whiteList[i]){
        alert('La tua email è nella white-list');
        break
    }
}
// 4) Se il ciclo precendete non si è realizzato (e non ha attivato il break) allora la var i sarà maggiore di 0 e si attivo l'alert negativo
if (i > 0){
    alert('La tua email NON è nella white-list');
}