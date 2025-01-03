//Define os pontos de magia máximos e impede os atuais de ultrapassar o máximo
function CalculaMpMax() {
    //Pega os valores de POD
    var pod = parseInt(document.querySelector('#valor-pod').value) || 0;
    
    //Calcula o mp máximo
    var mpMax = pod / 5;

    //Define o mp máximo
    document.querySelector('.mp-max').textContent = Math.floor(mpMax);
    //Define o máximo do mp atual como o valor de mp-max
    document.querySelector('#mp-atual').setAttribute('max', Math.floor(mpMax));
}

//Verifica o mp
function VerificaMp(){
    mpAt = parseInt(document.querySelector('#mp-atual').textContent);
    mpMax = parseInt(document.querySelector('#mp-max').textContent);
    if (mpAt > mpMax) {
        mpAt = mpMax
        }
    }