const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema ({
    informacoes: {
        nome: {type: String, required: true},
        profissao: String,
        naturalidade: String,
        residencia: String,
        pronome: String,
        idade: Number
    },
    caracteristicas: {
        status: {
            FOR: Number,
            CON: Number,
            DES: Number,
            INT: Number,
            TAM: Number,
            POD: Number,
            APA: Number,
            EDU: Number,
            SORTE: {
                inicial: Number,
                atual: Number
            }
        },
        hp: Number,
        mp: Number,
        sanidade: {
            inicial: Number,
            atual: Number
        },
        estados: {
            insanidadeTemp: String,
            insanidadeIndef: String,
            lesaoGrave: String,
            inconsciente: String,
            morrendo: String
        }
    },
    habilidades: {
        antropologia: {valor: Number, melhorar: String},
        arco: {valor: Number, melhorar: String},
        armasPesadas: {valor: Number, melhorar: String},
        arqueologia: {valor: Number, melhorar: String},
        artilharia: {valor: Number, melhorar: String},
        astronomia: {valor: Number, melhorar: String},
        atuacao: {valor: Number, melhorar: String},
        avaliacao: {valor: Number, melhorar: String},
        belasArtes: {valor: Number, melhorar: String},
        biologia: {valor: Number, melhorar: String},
        botanica: {valor: Number, melhorar: String},
        briga: {valor: Number, melhorar: String},
        charme: {valor: Number, melhorar: String},
        chaveiro: {valor: Number, melhorar: String},
        chicote: {valor: Number, melhorar: String},
        contabilidade: {valor: Number, melhorar: String},
        credito: {valor: Number, melhorar: String},
        criptografia: {valor: Number, melhorar: String},
        cthulhuMythos: {valor: Number, melhorar: String},
        demolicao: {valor: Number, melhorar: String},
        dirigir: {valor: Number, melhorar: String},
        disfarce: {valor: Number, melhorar: String},
        encontrar: {valor: Number, melhorar: String},
        escalar: {valor: Number, melhorar: String},
        escutar: {valor: Number, melhorar: String},
        espada: {valor: Number, melhorar: String},
        espingarda: {valor: Number, melhorar: String},
        esquiva: {valor: Number, melhorar: String},
        falsificacao: {valor: Number, melhorar: String},
        farmacia: {valor: Number, melhorar: String},
        fotografia: {valor: Number, melhorar: String},
        furtividade: {valor: Number, melhorar: String},
        garrote: {valor: Number, melhorar: String},
        geologia: {valor: Number, melhorar: String},
        hipnose: {valor: Number, melhorar: String},
        historia: {valor: Number, melhorar: String},
        idiomaNativo: {valor: Number, melhorar: String},
        idiomaOutro: {valor: Number, melhorar: String},
        intimidacao: {valor: Number, melhorar: String},
        labia: {valor: Number, melhorar: String},
        lanca: {valor: Number, melhorar: String},
        lancaChamas: {valor: Number, melhorar: String},
        lancar: {valor: Number, melhorar: String},
        lei: {valor: Number, melhorar: String},
        leituraLabial: {valor: Number, melhorar: String},
        machado: {valor: Number, melhorar: String},
        mangual: {valor: Number, melhorar: String},
        maquinasPesadas: {valor: Number, melhorar: String},
        manejoAnimais: {valor: Number, melhorar: String},
        matematica: {valor: Number, melhorar: String},
        medicina: {valor: Number, melhorar: String},
        mergulho: {valor: Number, melhorar: String},
        meteorologia: {valor: Number, melhorar: String},
        metralhadora: {valor: Number, melhorar: String},
        motosserra: {valor: Number, melhorar: String},
        mundoNatural: {valor: Number, melhorar: String},
        nadar: {valor: Number, melhorar: String},
        navegacao: {valor: Number, melhorar: String},
        ocultismo: {valor: Number, melhorar: String},
        pericia: {valor: Number, melhorar: String},
        persuasao: {valor: Number, melhorar: String},
        pilotar: {valor: Number, melhorar: String},
        pistola: {valor: Number, melhorar: String},
        presdigitacao: {valor: Number, melhorar: String},
        primeirosSocorros: {valor: Number, melhorar: String},
        psicanalise: {valor: Number, melhorar: String},
        psicologia: {valor: Number, melhorar: String},
        quimica: {valor: Number, melhorar: String},
        rastrear: {valor: Number, melhorar: String},
        reparoEletrico: {valor: Number, melhorar: String},
        reparoMecanico: {valor: Number, melhorar: String},
        rifle: {valor: Number, melhorar: String},
        saltar: {valor: Number, melhorar: String},
        sobrevivencia: {valor: Number, melhorar: String},
        submetralhadora: {valor: Number, melhorar: String},
        biblioteca: {valor: Number, melhorar: String},
        computadores: {valor: Number, melhorar: String},
        zoologia: {valor: Number, melhorar: String}
    },
    combate: {
        arma1: {
            nome: String,
            valor: Number,
            dano: String,
            ataques: Number,
            alcance: Number,
            pente: Number,
            falha: Number
        },
        arma2: {
            nome: String,
            valor: Number,
            dano: String,
            ataques: Number,
            alcance: Number,
            pente: Number,
            falha: Number
        },
        arma3: {
            nome: String,
            valor: Number,
            dano: String,
            ataques: Number,
            alcance: Number,
            pente: Number,
            falha: Number
        }
    },
    historia: {
        backstory: String,
        descricao: String,
        tracos: String,
        crencas: String,
        ferimentos: String,
        pessoas: String,
        fobias: String,
        locais: String,
        feiticos: String,
        pertences: String,
        encontros: String,
        inventario: String
    },
    economias: {
        nivelGasto: Number,
        dinheiro: Number,
        ativos: String
    },
    notas: String
})

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;