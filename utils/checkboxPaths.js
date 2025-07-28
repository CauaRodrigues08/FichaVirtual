const checkboxPaths = [
  // todos os caminhos possíveis dos checkboxes (exemplo com lesãoGrave e algumas habilidades)
  'caracteristicas.estados.lesaoGrave',
  'caracteristicas.estados.insanidadeTemp',
  'caracteristicas.estados.insanidadeIndef',
  'caracteristicas.estados.inconsciente',
  'caracteristicas.estados.morrendo',
  // habilidades
  ...[
    'antropologia', 'arco', 'armasPesadas', 'arqueologia', 'artilharia',
    'astronomia', 'atuacao', 'avaliacao', 'belasArtes', 'biologia', 'botanica',
    'briga', 'charme', 'chaveiro', 'chicote', 'contabilidade', 'credito', 'criptografia',
    'cthulhuMythos', 'demolicao', 'dirigir', 'disfarce', 'encontrar', 'escalar', 'escutar',
    'espada', 'espingarda', 'esquiva', 'falsificacao', 'farmacia', 'fotografia', 'furtividade',
    'garrote', 'geologia', 'hipnose', 'historia', 'idiomaNativo', 'idiomaOutro', 'intimidacao',
    'labia', 'lanca', 'lancaChamas', 'lancar', 'lei', 'leituraLabial', 'machado', 'mangual',
    'maquinasPesadas', 'manejoAnimais', 'matematica', 'medicina', 'mergulho', 'meteorologia',
    'metralhadora', 'motosserra', 'mundoNatural', 'nadar', 'navegacao', 'ocultismo', 'pericia',
    'persuasao', 'pilotar', 'pistola', 'presdigitacao', 'primeirosSocorros', 'psicanalise',
    'psicologia', 'quimica', 'rastrear', 'reparoEletrico', 'reparoMecanico', 'rifle', 'saltar',
    'sobrevivencia', 'submetralhadora', 'biblioteca', 'computadores', 'zoologia'
  ].map(key => `habilidades.${key}.melhorar`)
];

function setMissingCheckboxes(body, paths) {
  for (const path of paths) {
    const keys = path.split('.');
    let current = body;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }

    const finalKey = keys[keys.length - 1];
    if (current[finalKey] === undefined) {
      current[finalKey] = '';
    }
  }
}

module.exports = {
  checkboxPaths,
  setMissingCheckboxes
};
