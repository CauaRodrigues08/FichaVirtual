// checkboxPaths.js
const checkboxPaths = [
    // Estados (checkboxes)
    'caracteristicas.estados.insanidadeTemp',
    'caracteristicas.estados.insanidadeIndef',
    'caracteristicas.estados.lesaoGrave',
    'caracteristicas.estados.inconsciente',
    'caracteristicas.estados.morrendo',
  
    // Habilidades (checkboxes)
    'habilidades.antropologia.melhorar',
    'habilidades.arco.melhorar',
    'habilidades.armasPesadas.melhorar',
    'habilidades.arqueologia.melhorar',
    'habilidades.artilharia.melhorar',
    'habilidades.astronomia.melhorar',
    'habilidades.atuacao.melhorar',
    'habilidades.avaliacao.melhorar',
    'habilidades.belasArtes.melhorar',
    'habilidades.biologia.melhorar',
    'habilidades.botanica.melhorar',
    'habilidades.briga.melhorar',
    'habilidades.charme.melhorar',
    'habilidades.chaveiro.melhorar',
    'habilidades.chicote.melhorar',
    'habilidades.contabilidade.melhorar',
    'habilidades.credito.melhorar',
    'habilidades.criptografia.melhorar',
    'habilidades.cthulhuMythos.melhorar',
    'habilidades.demolicao.melhorar',
    'habilidades.dirigir.melhorar',
    'habilidades.disfarce.melhorar',
    'habilidades.encontrar.melhorar',
    'habilidades.escalar.melhorar',
    'habilidades.escutar.melhorar',
    'habilidades.espada.melhorar',
    'habilidades.espingarda.melhorar',
    'habilidades.esquiva.melhorar',
    'habilidades.falsificacao.melhorar',
    'habilidades.farmacia.melhorar',
    'habilidades.fotografia.melhorar',
    'habilidades.furtividade.melhorar',
    'habilidades.garrote.melhorar',
    'habilidades.geologia.melhorar',
    'habilidades.hipnose.melhorar',
    'habilidades.historia.melhorar',
    'habilidades.idiomaNativo.melhorar',
    'habilidades.idiomaOutro.melhorar',
    'habilidades.intimidacao.melhorar',
    'habilidades.labia.melhorar',
    'habilidades.lanca.melhorar',
    'habilidades.lancaChamas.melhorar',
    'habilidades.lancar.melhorar',
    'habilidades.lei.melhorar',
    'habilidades.leituraLabial.melhorar',
    'habilidades.machado.melhorar',
    'habilidades.mangual.melhorar',
    'habilidades.maquinasPesadas.melhorar',
    'habilidades.manejoAnimais.melhorar',
    'habilidades.matematica.melhorar',
    'habilidades.medicina.melhorar',
    'habilidades.mergulho.melhorar',
    'habilidades.meteorologia.melhorar',
    'habilidades.metralhadora.melhorar',
    'habilidades.motosserra.melhorar',
    'habilidades.mundoNatural.melhorar',
    'habilidades.nadar.melhorar',
    'habilidades.navegacao.melhorar',
    'habilidades.ocultismo.melhorar',
    'habilidades.pericia.melhorar',
    'habilidades.persuasao.melhorar',
    'habilidades.pilotar.melhorar',
    'habilidades.pistola.melhorar',
    'habilidades.presdigitacao.melhorar',
    'habilidades.primeirosSocorros.melhorar',
    'habilidades.psicanalise.melhorar',
    'habilidades.psicologia.melhorar',
    'habilidades.quimica.melhorar',
    'habilidades.rastrear.melhorar',
    'habilidades.reparoEletrico.melhorar',
    'habilidades.reparoMecanico.melhorar',
    'habilidades.rifle.melhorar',
    'habilidades.saltar.melhorar',
    'habilidades.sobrevivencia.melhorar',
    'habilidades.submetralhadora.melhorar',
    'habilidades.biblioteca.melhorar',
    'habilidades.computadores.melhorar',
    'habilidades.zoologia.melhorar'
  ];
  
  function setMissingCheckboxes(data, paths) {
    paths.forEach(path => {
      const keys = path.split('.');
      let obj = data;
  
      for (let i = 0; i < keys.length - 1; i++) {
        if (obj[keys[i]] == null) obj[keys[i]] = {};
        obj = obj[keys[i]];
      }
  
      const lastKey = keys[keys.length - 1];
      if (obj[lastKey] == null) obj[lastKey] = '';
    });
  }
  
  module.exports = {
    checkboxPaths,
    setMissingCheckboxes
  };