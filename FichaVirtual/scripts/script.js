//Atualiza os valores de Bom e Extremo dos atributos
function AtualizaAtributo(input) {
    //Pega o valor do input do atributo
    const valor = parseInt(input.value) || 0;
    //Busca pelo ancestral na DOM mais perto que possua uma tr
    const row = input.closest('tr');

    //Define os valores de Bom e Extremo
    row.querySelector('.valor-bom').textContent = Math.floor(valor / 2);
    row.querySelector('.valor-extremo').textContent = Math.floor(valor / 5);
}

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
hpAt = parseInt(document.querySelector('#hp-atual').textContent);
hpMax = parseInt(document.querySelector('#hp-max').textContent);
if (hpAt > hpMax) {
    hpAt = hpMax
    }
}

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

//Define os pontos de sanidade que podem ser perdidos antes de tornar-se indefinidamente insano. Estes pontos são marcados no início de cada "dia".
function CalculaInsanidade() {
    //Pega o valor de sanidade
    var san = parseInt(document.querySelector('#san-atual').value) || 0;
    
    //Calcula os pontos de insanidade
    var insan = san / 5;

    //Define os pontos de insanidade
    document.querySelector('.insan').textContent = Math.floor(insan);
}

//Verifica a sanidade
function VerificaSan(){
    sanAt = parseInt(document.querySelector('#hp-atual').textContent);
    cthuMyth = parseInt(document.querySelector('#valor-cthuMyth').textContent) || 0;
    sanMax = 99 - cthuMyth;
    if (sanAt > sanMax) {
        sanAt = sanMax
        }
    }