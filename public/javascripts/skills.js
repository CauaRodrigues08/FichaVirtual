//Atualiza os valores de Bom e Extremo dos atributos e skills
function AtualizaAtributo(input) {
    //Pega o valor do input do atributo
    const valor = parseInt(input.value) || 0;
    //Busca pelo ancestral na DOM mais perto que possua uma tr
    const row = input.closest('tr');

    //Define os valores de Bom e Extremo
    row.querySelector('.valor-bom').textContent = Math.floor(valor / 2);
    row.querySelector('.valor-extremo').textContent = Math.floor(valor / 5);
}

function atualizarHabilidadesRelacionadas() {
    const valorDes = parseInt(document.querySelector('#valor-des')?.value || 0);
    const esquivaInput = document.querySelector('input[name="habilidades.esquiva.valor"]');
    if (esquivaInput) {
        // Atualiza o min para Esquiva (metade do valor de Destreza)
        esquivaInput.setAttribute('min', Math.floor(valorDes / 2));
    }

    // Corrige o valor se estiver abaixo do valor mínimo
        if (parseInt(esquivaInput.value) < Math.floor(valorDes / 2)) {
            esquivaInput.value = Math.floor(valorDes / 2);
        }

    const valorEdu = parseInt(document.querySelector('#valor-edu')?.value || 0);
    const idiomaInput = document.querySelector('input[name="habilidades.idiomaNativo.valor"]');
    if (idiomaInput) {
        // Atualiza o min para Idioma (Nativo) com o valor de Educação
        idiomaInput.setAttribute('min', valorEdu);
    }
     // Corrige o valor se estiver abaixo do valor mínimo
     if (parseInt(idiomaInput.value) < valorEdu) {
        idiomaInput.value = valorEdu;
    }
}

//Habilidades de call of cthulhu 7th edition
const skills = [
    {nome: "Antropologia", valorBase: 1, key: "antropologia"},
    {nome: "Arco (Armas de Fogo)", valorBase: 15, key: "arco"},
    {nome: "Armas pesadas (Armas de fogo)", valorBase: 10, key: "armasPesadas"},
    {nome: "Arqueologia", valorBase: 1, key: "arqueologia"},
    {nome: "Artilharia", valorBase: 1, key: "artilharia"},
    {nome: "Astronomia (Ciência)", valorBase: 1, key: "astronomia"},
    {nome: "Atuação (Arte/Artesanato)", valorBase: 5, key: "atuacao"},
    {nome: "Avaliação", valorBase: 5, key: "avaliacao"},
    {nome: "Belas Artes (Arte/Artesanato)", valorBase: 5, key: "belasArtes"},
    {nome: "Biologia (Ciência)", valorBase: 1, key: "biologia"},
    {nome: "Botânica (Ciência)", valorBase: 1, key: "botanica"},
    {nome: "Briga (Luta)", valorBase: 25, key: "briga"},
    {nome: "Charme", valorBase: 15, key: "charme"},
    {nome: "Chaveiro", valorBase: 1, key: "chaveiro"},
    {nome: "Chicote", valorBase: 5, key: "chicote"},
    {nome: "Contabilidade", valorBase: 5, key: "contabilidade"},
    {nome: "Crédito", valorBase: 0, key: "credito"},
    {nome: "Criptografia (Ciência)", valorBase: 1, key: "criptografia"},
    {nome: "Cthulhu Mythos", valorBase: 0, key: "cthulhuMythos"},
    {nome: "Demolição", valorBase: 1, key: "demolicao"},
    {nome: "Dirigir veículo", valorBase: 20, key: "dirigir"},
    {nome: "Disfarce", valorBase: 5, key: "disfarce"},
    {nome: "Encontrar", valorBase: 25, key: "encontrar"},
    {nome: "Escalar", valorBase: 20, key: "escalar"},
    {nome: "Escutar", valorBase: 20, key: "escutar"},
    {nome: "Espada (Luta)", valorBase: 20, key: "espada"},
    {nome: "Espingarda (Armas de fogo)", valorBase: 25, key: "espingarda"},
    {nome: "Esquiva", valorBase: 0, key: "esquiva"},
    {nome: "Falsificação (Arte/Artesanato", valorBase: 5, key: "falsificacao"},
    {nome: "Farmácia (Ciência)", valorBase: 1, key: "farmacia"},
    {nome: "Fotografia (Arte/Artesanato)", valorBase: 5, key: "fotografia"},
    {nome: "Furtividade", valorBase: 20, key: "furtividade"},
    {nome: "Garrote (Luta)", valorBase: 15, key: "garrote"},
    {nome: "Geologia (Ciência)", valorBase: 1, key: "geologia"},
    {nome: "Hipnose", valorBase: 1, key: "hipnose"},
    {nome: "História", valorBase: 5, key: "historia"},
    {nome: "Idioma (Nativo)", valorBase: 0, key: "idiomaNativo"},
    {nome: "Idioma (outro)", valorBase: 1, key: "idiomaOutro"},
    {nome: "Intimidação", valorBase: 15, key: "intimidacao"},
    {nome: "Lábia", valorBase: 5, key: "labia"},
    {nome: "Lança (Luta)", valorBase: 20, key: "lanca"},
    {nome: "Lança-chamas (Arma de Fogo)", valorBase: 10, key: "lancaChamas"},
    {nome: "Lançar", valorBase: 20, key: "lancar"},
    {nome: "Lei", valorBase: 5, key: "lei"},
    {nome: "Leitura Labial", valorBase: 1, key: "leituraLabial"},
    {nome: "Machado (Luta)", valorBase: 15, key: "machado"},
    {nome: "Mangual (Luta)", valorBase: 10, key: "mangual"},
    {nome: "Maquinas pesadas", valorBase: 1, key: "maquinasPesadas"},
    {nome: "Manejo de Animais", valorBase: 5, key: "manejoAnimais"},
    {nome: "Matemática (Ciência)", valorBase: 1, key: "matematica"},
    {nome: "Medicina", valorBase: 1, key: "medicina"},
    {nome: "Mergulho", valorBase: 1, key: "mergulho"},
    {nome: "Meteorologia (Ciência)", valorBase: 1, key: "meteorologia"},
    {nome: "Metralhadora (Armas de fogo)", valorBase: 10, key: "metralhadora"},
    {nome: "Motosserra (Luta)", valorBase: 10, key: "motosserra"},
    {nome: "Mundo Natural", valorBase: 10, key: "mundoNatural"},
    {nome: "Nadar", valorBase: 20, key: "nadar"},
    {nome: "Navegação", valorBase: 10, key: "navegacao"},
    {nome: "Ocultismo", valorBase: 5, key: "ocultismo"},
    {nome: "Perícia Forense", valorBase: 1, key: "pericia"},
    {nome: "Persuasão", valorBase: 10, key: "persuasao"},
    {nome: "Pilotar", valorBase: 1, key: "pilotar"},
    {nome: "Pistola (Armas de fogo)", valorBase: 20, key: "pistola"},
    {nome: "Presdigitação", valorBase: 10, key: "presdigitacao"},
    {nome: "Primeiros Socorros", valorBase: 30, key: "primeirosSocorros"},
    {nome: "Psicanálise", valorBase: 1, key: "psicanalise"},
    {nome: "Psicologia", valorBase: 10, key: "psicologia"},
    {nome: "Química (Ciência)", valorBase: 1, key: "quimica"},
    {nome: "Rastrear", valorBase: 10, key: "rastrear"},
    {nome: "Reparo elétrico", valorBase: 10, key: "reparoEletrico"},
    {nome: "Reparo mecânico", valorBase: 10, key: "reparoMecanico"},
    {nome: "Rifle (Armas de fogo)", valorBase: 25, key: "rifle"},
    {nome: "Saltar", valorBase: 20, key: "saltar"},
    {nome: "Sobrevivência", valorBase: 10, key: "sobrevivencia"},
    {nome: "Submetralhadora (Armas de Fogo)", valorBase: 15, key: "submetralhadora"},
    {nome: "Uso de biblioteca", valorBase: 20, key: "biblioteca"},
    {nome: "Uso de computadores", valorBase: 5, key: "computadores"},
    {nome: "Zoologia (Ciência)", valorBase: 1, key: "zoologia"}    
];

// Carrega as habilidades na tabela
function carregarSkills() {
    const tabela = document.querySelector('#tabela-hab tbody');

    skills.forEach(skill => {
        const habilidadeSalva = habilidadesData[skill.key] || {};
        console.log(skill.key, habilidadeSalva);
        const valor = habilidadeSalva.valor ?? skill.valorBase;
        const checked = habilidadeSalva.melhorar ? 'checked' : '';



        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <input 
                    type="hidden" 
                    name="habilidades.${skill.key}.melhorar" 
                    value="false"
                >
                <input 
                    type="checkbox" 
                        name="habilidades.${skill.key}.melhorar" 
                        value="true" 
                        ${checked} 
                    >
            </td>
            <td>${skill.nome}</td>
            <td>
                <input 
                    type="number" 
                    class="valor-normal" 
                    name="habilidades.${skill.key}.valor"
                    value="${valor}" 
                    oninput="AtualizaAtributo(this)"
                    min="0"
                >
            </td>
            <td class="valor-bom">${Math.floor(valor / 2)}</td>
            <td class="valor-extremo">${Math.floor(valor / 5)}</td>
        `;

        tabela.appendChild(row);
    });
}


//Adiciona eventos em Destreza e Educação
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona os eventos nos atributos
    const inputDes = document.querySelector('#valor-des');
    const inputEdu = document.querySelector('#valor-edu');

    if (inputDes) {
        inputDes.addEventListener('input', atualizarHabilidadesRelacionadas);
    }

    if (inputEdu) {
        inputEdu.addEventListener('input', atualizarHabilidadesRelacionadas);
    }
});

// Garante que as habilidades sejam carregadas ao carregar a página
document.addEventListener('DOMContentLoaded', carregarSkills);

//Função de pesquisar skills na barra de pesquisa
function PesquiseSkill() {
    // Pega o valor da barra de pesquisa
    const filtro = document.querySelector('#barra-pesquisa').value.toLowerCase(); //toLowerCase serve para ser indiferente quanto a maiúscula ou minúscula

    // Pega todas as linhas da tabela, ignorando o cabeçalho
    const linhas = document.querySelectorAll('#tabela-hab tbody tr');

    // Para cada linha, verifica se o nome da habilidade corresponde ao filtro
    linhas.forEach(linha => {
        const habilidade = linha.cells[1].textContent.toLowerCase();  // A segunda célula é a "Habilidade"
        if (habilidade.indexOf(filtro) > -1) {
            linha.style.display = '';  // Exibe a linha se a habilidade for encontrada
        } else {
            linha.style.display = 'none';  // Oculta a linha se não corresponder ao filtro
        }
    });
};

//Adiciona os valores de briga na seção de combate
function AdicionaValorBriga() {
    const brigaNormalInput = document.querySelector('input[name="habilidades.briga.valor"]');
    
    if (brigaNormalInput) {
        const brigaNormal = brigaNormalInput.value;
        const brigaBom = Math.floor(brigaNormal / 2);
        const brigaExtremo = Math.floor(brigaNormal / 5);

        document.querySelector('#briga-normal').textContent = brigaNormal;
        document.querySelector('#briga-bom').textContent = brigaBom;
        document.querySelector('#briga-extremo').textContent = brigaExtremo;
    } else {
        console.error("Input with name='Briga-Luta' not found!");
    }
}

//Adiciona os eventos responsáveis por adicionar o valor de briga na seção de combate
document.addEventListener('DOMContentLoaded', () => {
    
    AdicionaValorBriga();

    const inputBriga = document.querySelector('input[name="habilidades.briga.valor"]');
    if (inputBriga) {
        inputBriga.addEventListener('input', AdicionaValorBriga);
    } else {
        console.error("Input with name='Briga-Luta' not found!");
    }
});


//Calcula e adiciona o valor de esquiva na tabela de esquiva da seção da combate
//Nota: Atualmente, a tabela não atualiza senão mediante input. Precisa ser corrigido.
function AdicionaValorEsquiva() {
    const esquivaNormalInput = document.querySelector('input[name="habilidades.esquiva.valor"]');

    const esquivaNormal = esquivaNormalInput.value;
    const esquivaBom = Math.floor(esquivaNormal / 2);
    const esquivaExtremo = Math.floor(esquivaNormal / 5);

    document.querySelector('#esquiva-normal').textContent = esquivaNormal;
    document.querySelector('#esquiva-bom').textContent = esquivaBom;
    document.querySelector('#esquiva-extremo').textContent = esquivaExtremo;
};

//Adiciona o evento responsável por acionar a função AdicionaValorEsquiva
document.addEventListener('DOMContentLoaded', () => {
    const inputEsquiva = document.querySelector('input[name="habilidades.esquiva.valor"]');

    if (inputEsquiva) {
        inputEsquiva.addEventListener('input', AdicionaValorEsquiva)
    };
});

//Calcula e adiciona os valores de porte e dano bonus
function AdicionaPorteEDanoBonus() {
    const valorFor = document.querySelector('#valor-for').value;
    const valorTam = document.querySelector('#valor-tam').value;
    let total = parseInt(valorFor) + parseInt(valorTam);
    let db = "0";
    let porte = 0;
    let pontosExtras = 0;
    let pontosAdicionais = 0;

    if (total <= 64) {
        db = "-2";
        porte = -2;
    } else if (total <= 84) {
        db = "-1";
        porte = -1;
    } else if (total <= 124) {
        db = "0";
        porte = 0;
    } else if (total <= 164) {
        db = "+1D4";
        porte = 1;
    } else if (total <= 204) {
        db = "+1D6";
        porte = 2;
    } else if (total <= 284) {
        db = "+2D6";
        porte = 3
    } else if (total <= 364) {
        db = "+3D6";
        porte = 4
    } else if (total <= 444) {
        db = "+4D6";
        porte = 5
    } else {
        pontosExtras = total - 444;
        pontosAdicionais = Math.ceil(pontosExtras / 80);
        db = `+${4 + pontosAdicionais}D6`;
        porte = 5 + pontosAdicionais;
    }

    document.querySelector('#porte').textContent = porte;
    document.querySelector('#dano-bonus').textContent = db;
};

//Adiciona eventos que ativam AdicionaPorteEDanoBonus
document.addEventListener('DOMContentLoaded', () => {
    const inputFor = document.querySelector('#valor-for');
    const inputTam = document.querySelector('#valor-tam');

    if (inputFor && inputTam) {
        inputFor.addEventListener('input', AdicionaPorteEDanoBonus);
        inputTam.addEventListener('input', AdicionaPorteEDanoBonus);
    }
});

//Calcula e mostra o valor de movimento
function CalculaMov() {
    let des = parseInt(document.querySelector('#valor-des').value) || 0;
    let forca = parseInt(document.querySelector('#valor-for').value) || 0;
    let tam = parseInt(document.querySelector('#valor-tam').value) || 0;

    let valorMov;

    if (des > tam && forca > tam) {
        valorMov = 9;
    } else if (des >= tam || forca >= tam) {
        valorMov = 8;
    } else {
        valorMov = 7;
    }

    document.querySelector('#mov-display').textContent = valorMov;
}

function atualizarValoresCombate() {
    // Faz um loop por cada arma
    for (let i = 1; i <= 3; i++) {
        
        const normalValue = document.getElementById(`normal-arma${i}`).value;

        const bomValue = normalValue ? Math.floor(normalValue / 2) : 0;
        const extremoValue = normalValue ? Math.floor(normalValue / 5) : 0;

        document.getElementById(`bom-arma${i}`).innerText = bomValue;
        document.getElementById(`extremo-arma${i}`).innerText = extremoValue;
    }
}

//Adiciona eventos em cada input do valor de arma e chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    
    atualizarValoresCombate();

    document.querySelectorAll('[id^="normal-arma"]').forEach(input => {
        input.addEventListener('input', atualizarValoresCombate);
    });
});

module.exports = {skills};