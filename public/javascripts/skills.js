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
    const esquivaInput = document.querySelector('input[data-skill-name="Esquiva"]');
    if (esquivaInput) {
        // Atualiza o min para Esquiva (metade do valor de Destreza)
        esquivaInput.setAttribute('min', Math.floor(valorDes / 2));
    }

    // Corrige o valor se estiver abaixo do valor mínimo
        if (parseInt(esquivaInput.value) < Math.floor(valorDes / 2)) {
            esquivaInput.value = Math.floor(valorDes / 2);
        }

    const valorEdu = parseInt(document.querySelector('#valor-edu')?.value || 0);
    const idiomaInput = document.querySelector('input[data-skill-name="Idioma-Nativo"]');
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
    {nome: "Antropologia", valorBase: 1},
    {nome: "Arco (Armas de Fogo)", valorBase: 15},
    {nome: "Armas pesadas (Armas de fogo)", valorBase: 10},
    {nome: "Arqueologia", valorBase: 1},
    {nome: "Artilharia", valorBase: 1},
    {nome: "Astronomia (Ciência)", valorBase: 1},
    {nome: "Atuação (Arte/Artesanato)", valorBase: 5},
    {nome: "Avaliação", valorBase: 5},
    {nome: "Belas Artes (Arte/Artesanato)", valorBase: 5},
    {nome: "Biologia (Ciência)", valorBase: 1},
    {nome: "Botânica (Ciência)", valorBase: 1},
    {nome: "Briga (Luta)", valorBase: 25},
    {nome: "Charme", valorBase: 15},
    {nome: "Chaveiro", valorBase: 1},
    {nome: "Chicote", valorBase: 5},
    {nome: "Contabilidade", valorBase: 5},
    {nome: "Crédito", valorBase: 0},
    {nome: "Criptografia (Ciência)", valorBase: 1},
    {nome: "Cthulhu Mythos", valorBase: 0},
    {nome: "Demolição", valorBase: 1},
    {nome: "Dirigir veículo", valorBase: 20},
    {nome: "Disfarce", valorBase: 5},
    {nome: "Encontrar", valorBase: 25},
    {nome: "Escalar", valorBase: 20},
    {nome: "Escutar", valorBase: 20},
    {nome: "Espada (Luta)", valorBase: 20},
    {nome: "Espingarda (Armas de fogo)", valorBase: 25},
    {nome: "Esquiva", valorBase: 0},
    {nome: "Falsificação (Arte/Artesanato", valorBase: 5},
    {nome: "Farmácia (Ciência)", valorBase: 1},
    {nome: "Fotografia (Arte/Artesanato)", valorBase: 5},
    {nome: "Furtividade", valorBase: 20},
    {nome: "Garrote (Luta)", valorBase: 15},
    {nome: "Geologia (Ciência)", valorBase: 1},
    {nome: "Hipnose", valorBase: 1},
    {nome: "História", valorBase: 5},
    {nome: "Idioma (Nativo)", valorBase: 0},
    {nome: "Idioma (outro)", valorBase: 1},
    {nome: "Intimidação", valorBase: 15},
    {nome: "Lábia", valorBase: 5},
    {nome: "Lança (Luta)", valorBase: 20},
    {nome: "Lança-chamas (Arma de Fogo)", valorBase: 10},
    {nome: "Lançar", valorBase: 20},
    {nome: "Lei", valorBase: 5},
    {nome: "Leitura Labial", valorBase: 1},
    {nome: "Machado (Luta)", valorBase: 15},
    {nome: "Mangual (Luta)", valorBase: 10},
    {nome: "Maquinas pesadas", valorBase: 1},
    {nome: "Manejo de Animais", valorBase: 5},
    {nome: "Matemática (Ciência)", valorBase: 1},
    {nome: "Medicina", valorBase: 1},
    {nome: "Mergulho", valorBase: 1},
    {nome: "Meteorologia (Ciência)", valorBase: 1},
    {nome: "Metralhadora (Armas de fogo)", valorBase: 10},
    {nome: "Motosserra (Luta)", valorBase: 10},
    {nome: "Mundo Natural", valorBase: 10},
    {nome: "Nadar", valorBase: 20},
    {nome: "Navegação", valorBase: 10},
    {nome: "Ocultismo", valorBase: 5},
    {nome: "Perícia Forense", valorBase: 1},
    {nome: "Persuasão", valorBase: 10},
    {nome: "Pilotar", valorBase: 1},
    {nome: "Pistola (Armas de fogo)", valorBase: 20},
    {nome: "Presdigitação", valorBase: 10},
    {nome: "Primeiros Socorros", valorBase: 30},
    {nome: "Psicanálise", valorBase: 1},
    {nome: "Psicologia", valorBase: 10},
    {nome: "Química (Ciência)", valorBase: 1},
    {nome: "Rastrear", valorBase: 10},
    {nome: "Reparo elétrico", valorBase: 10},
    {nome: "Reparo mecânico", valorBase: 10},
    {nome: "Rifle (Armas de fogo)", valorBase: 25},
    {nome: "Saltar", valorBase: 20},
    {nome: "Sobrevivência", valorBase: 10},
    {nome: "Submetralhadora (Armas de Fogo)", valorBase: 15},
    {nome: "Uso de biblioteca", valorBase: 20},
    {nome: "Uso de computadores", valorBase: 5},
    {nome: "Zoologia (Ciência)", valorBase: 1}    
];

// Carrega as habilidades na tabela
function carregarSkills() {
    const tabela = document.querySelector('#tabela-hab tbody'); // Seleciona o corpo da tabela

    skills.forEach(skill => {
        // Cria a linha para cada habilidade
        const row = document.createElement('tr');

        // Preenche a linha com as células
        row.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>${skill.nome}</td>
            <td>
                <input 
                    type="number" 
                    class="valor-normal" 
                    value="${skill.valorBase}" 
                    oninput="AtualizaAtributo(this)"
                    min=0
                />
            </td>
            <td class="valor-bom">${Math.floor(skill.valorBase / 2)}</td>
            <td class="valor-extremo">${Math.floor(skill.valorBase / 5)}</td>
        `;
        const input = row.querySelector('.valor-normal');
        input.setAttribute(
            'data-skill-name',
            skill.nome.replace(/\s+/g, '-').replace(/[^\w-]/g, '')
        );

        // Adiciona a linha na tabela
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
function AdicionaValorBriga(){
    const brigaNormalInput = document.querySelector('input[data-skill-name="Briga-Luta"]');
    
    const brigaNormal = brigaNormalInput.value;
    const brigaBom = Math.floor(brigaNormal / 2);
    const brigaExtremo = Math.floor(brigaNormal / 5);

    document.querySelector('#briga-normal').textContent = brigaNormal;
    document.querySelector('#briga-bom').textContent = brigaBom;
    document.querySelector('#briga-extremo').textContent = brigaExtremo;
};

//Evento que adiciona os valores de Briga na seção de Combate
document.addEventListener('DOMContentLoaded', AdicionaValorBriga);

//Adicona eventos em Briga
document.addEventListener('DOMContentLoaded', () => {
    const inputBriga = document.querySelector('input[data-skill-name="Briga-Luta"]');

    if (inputBriga) {
        inputBriga.addEventListener('input', AdicionaValorBriga)
    }
});

function AdicionaValorEsquiva() {
    const esquivaNormalInput = document.querySelector('input[data-skill-name="Esquiva"]');

    const esquivaNormal = esquivaNormalInput.value;
    const esquivaBom = Math.floor(esquivaNormal / 2);
    const esquivaExtremo = Math.floor(esquivaNormal / 5);

    document.querySelector('#esquiva-normal').textContent = esquivaNormal;
    document.querySelector('#esquiva-bom').textContent = esquivaBom;
    document.querySelector('#esquiva-extremo').textContent = esquivaExtremo;
}

document.addEventListener('DOMContentLoaded', () => {
    const inputEsquiva = document.querySelector('input[data-skill-name="Esquiva"]');

    if (inputEsquiva) {
        inputEsquiva.addEventListener('input', AdicionaValorEsquiva)
    }
})

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