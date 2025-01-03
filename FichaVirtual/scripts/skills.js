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
const skills = [];

//Função para organizar as skills por ordem alfabética
function organizaTabela() {
    const table = document.querySelector("#tabela-hab");
    const rows = Array.from(table.rows).slice(1); 
    rows.sort((a, b) => {
        const skillA = a.cells[0].innerText.toLowerCase();
        const skillB = b.cells[0].innerText.toLowerCase();
        return skillA < skillB ? -1 : skillA > skillB ? 1 : 0;
    })
}