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
            insanidadeTemp: {type: Boolean, default: false},
            insanidadeIndef: {type: Boolean, default: false},
            lesaoGrave: { type: Boolean, default: false },
            inconsciente: { type: Boolean, default: false },
            morrendo: { type: Boolean, default: false }
        }
    },
    habilidades: {
        //Resolvendo template de habilidade. Conflito com o template usado em skills.js, pois este é incompleto
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
        feitiços: String,
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