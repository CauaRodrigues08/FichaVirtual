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
    //Localiza Cthulhu Mythos
    const cthuMythInput = document.querySelector('input[name="habilidades.cthulhuMythos.valor"]');

    //Obtém o valor de Cthulhu Mythos
    const cthuMyth = cthuMythInput ? parseInt(cthuMythInput.value || 0) : 0;

    //calcula a sanidade maxima
    var sanMax = 99 - cthuMyth;

    //define os pontos de sanidade máximos
    document.querySelector('#san-max').textContent = sanMax;
    //Define o máximo da sanidade atual como o valor de san-max
    document.querySelector('#san-atual').setAttribute('max', Math.floor(sanMax));

    //Verifica a sanidade máxima
    VerificaSan(sanMax);
}

//Verifica a sanidade
function VerificaSan(sanMax = null) {
    // Obtém o valor da sanidade máxima
    if (!sanMax) {
        sanMax = parseInt(document.querySelector('#san-max').textContent);
    }

    // Pega o valor atual da sanidade
    const sanAtualInput = document.querySelector('#san-atual');
    let sanAtual = parseInt(sanAtualInput.value || 0);

    // Ajusta a sanidade atual se estiver acima do máximo permitido
    if (sanAtual > sanMax) {
        sanAtualInput.value = sanMax;
    }
}

document.addEventListener('input', e => {
    const tgt = e.target;
  
    // se for o campo Mythos
    if (tgt.matches('input[name="habilidades.cthulhuMythos.valor"]')) {
      CalculaSanMax();
    }
  
    // se for o campo Sanidade atual
    if (tgt.matches('#san-atual')) {
      VerificaSan();
    }
  });
  
  // cálculo inicial caso já venha com valor
  CalculaSanMax();

  window.addEventListener('load', () => {
    CalculaSanMax();
  });