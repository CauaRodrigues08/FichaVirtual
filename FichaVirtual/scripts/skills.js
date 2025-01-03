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

//Habilidades de call of cthulhu 7th edition
const skills = [
    { nome:"Contabilidade", valorBase: 5},
    { nome:"Atuação (Arte/Artesanato)", valorBase: 5},
    { nome:"Manejo de Animais", valorBase: 5},
    { nome:"Antropologia", valorBase: 1},
    { nome:"Avaliação", valorBase: 5},
    { nome:"Arqueologia", valorBase: 1},
    { nome:"Artilharia", valorBase: 1},
    { nome:"Astronomia (Ciência)", valorBase: 1},
    { nome:"Machado (Luta)", valorBase: 15},
    { nome:"Biologia (Ciência)", valorBase: 1},
    { nome:"Botânica (Ciência)", valorBase: 1},
    { nome:"Arco (Armas de Fogo)", valorBase: 15},
    { nome:"Briga (Luta)", valorBase: 25},
    { nome:"Motosserra (Luta)", valorBase: 10},
    { nome:"Charme", valorBase: 15},
    { nome:"Química (Ciência)", valorBase: 1},
    { nome:"Escalar", valorBase: 20},
    { nome:"Uso de computadores", valorBase: 5},
    { nome:"Crédito", valorBase: 0},
    { nome:"Criptografia (Ciência)", valorBase: 1},
    { nome:"Cthulhu Mythos", valorBase: 0},
    { nome:"Demolição", valorBase: 1},
    { nome:"Disfarce", valorBase: 5},
    { nome:"Mergulho", valorBase: 1},
    { nome:"Esquiva", valorBase: parseInt(document.querySelector('#valor-des').textContent)/2},
    { nome:"Dirigir veículo", valorBase: 20},
    { nome:"Reparo elétrico", valorBase: 10},
    { nome:"Lábia", valorBase: 5},
    { nome:"Belas Artes (Arte/Artesanato)", valorBase: 5},
    { nome:"Primeiros Socorros", valorBase: 30},
    { nome:"Mangual (Luta)", valorBase: 10},
    { nome:"Lança-chamas (Arma de Fogo)", valorBase: 10},
    { nome:"Perícia Forense", valorBase: 1},
    { nome:"Falsificação (Arte/Artesanato", valorBase: 5},
    { nome:"Garrote (Luta)", valorBase: 15},
    { nome:"Geologia (Ciência)", valorBase: 1},
    { nome:"Pistola (Armas de fogo)", valorBase: 20},
    { nome:"Armas pesadas (Armas de fogo)", valorBase: 10},
    { nome:"História", valorBase: 5},
    { nome:"Hipnose", valorBase: 1},
    { nome:"Intimidação", valorBase: 15},
    { nome:"Saltar", valorBase: 20},
    { nome:"Idioma (outro)", valorBase: 1},
    { nome:"Idioma (Nativo)", valorBase: parseInt(document.querySelector('#valor-edu').textContent)},
    { nome:"Lei", valorBase: 5},
    { nome:"Uso de biblioteca", valorBase: 20},
    { nome:"Escutar", valorBase: 20},
    { nome:"Chaveiro", valorBase: 1},
    { nome:"Metralhadora (Armas de fogo)", valorBase: 10},
    { nome:"Matemática (Ciencia)", valorBase: 1},
    { nome:"Reparo mecânico", valorBase: 10},
    { nome:"Medicina", valorBase: 1},
    { nome:"Meteorologia (Ciência)", valorBase: 1},
    { nome:"Mundo Natural", valorBase: 10},
    { nome:"Navegação", valorBase: 10},
    { nome:"Ocultismo", valorBase: 5},
    { nome:"Maquinas pesadas", valorBase: 1},
    { nome:"Persuasão", valorBase: 10},
    { nome:"Farmácia (Ciência)", valorBase: 1},
    

];

//Função para organizar as skills por ordem alfabética
function organizaTabela() {
    //Pega os valores das linhas da tabela, excluindo a primeira linha
    const table = document.querySelector("#tabela-hab");
    const rows = Array.from(table.rows).slice(1); // Exclui a primeira linha (header)
    //Organiza em ordem alfabética
    rows.sort((a, b) => {
        const skillA = a.cells[0].innerText.toLowerCase();
        const skillB = b.cells[0].innerText.toLowerCase();
        return skillA < skillB ? -1 : skillA > skillB ? 1 : 0;
    });
    
    // Coloca as linha de volta na tabela
    rows.forEach(row => table.appendChild(row));
}
