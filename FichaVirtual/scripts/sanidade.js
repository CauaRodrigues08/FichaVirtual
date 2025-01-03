//Define os pontos de sanidade que podem ser perdidos antes de tornar-se indefinidamente insano. Estes pontos são marcados no início de cada "dia".
function CalculaInsanidade() {
    //Pega o valor de sanidade
    var san = parseInt(document.querySelector('#san-atual').value) || 0;
    
    //Calcula os pontos de insanidade
    var insan = san / 5;

    //Define os pontos de insanidade
    document.querySelector('.insan').textContent = Math.floor(insan);
}

//Calcula a sanidade máxima e impede os atuais de ultrapassar o máximo
function CalculaSanMax() {
    //estabelece as variaveis
    var cthuMyth = parseInt(document.querySelector('#valor-cthuMyth').textContent) || 0;

    //calcula a sanidade maxima
    var sanMax = 99 - cthuMyth;

    //define os pontos de sanidade máximos
    document.querySelector('#san-max').textContent = sanMax;
    //Define o máximo do hp atual como o valor de hp-max
    document.querySelector('#san-atual').setAttribute('max', Math.floor(sanMax));
}

//Verifica a sanidade
function VerificaSan(){
    //Pega os valores de 
    sanAt = parseInt(document.querySelector('#san-atual').textContent);
    sanMax = parseInt(document.querySelector('#san-max').textContent)
    if (sanAt > sanMax) {
        sanAt = sanMax
    }
}

