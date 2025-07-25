//Define a vida máxima e impede a vida atual de ultrapassar a máxima
function CalculaHpMax() {
    //Pega os valores de TAM e CON
    var tam = parseInt(document.querySelector('#valor-tam').value) || 0;
    var con = parseInt(document.querySelector('#valor-con').value) || 0;
    
    //Calcula o hp máximo
    var hpMax = (tam + con) / 10;

    //Define o hp máximo
    document.querySelector('.hp-max').textContent = Math.floor(hpMax);
    //Define o máximo do hp atual como o valor de hp-max
    document.querySelector('#hp-atual').setAttribute('max', Math.floor(hpMax));
}

//Verifica o hp
function VerificaHp(){
hpAt = parseInt(document.querySelector('#hp-atual').value);
hpMax = parseInt(document.querySelector('.hp-max').innerHTML);
if (hpAt > hpMax) {
    hpAt = hpMax
    }
}