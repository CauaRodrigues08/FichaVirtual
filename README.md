# Ficha Virtual de Call of Cthulhu RPG
Ficha virtual dinâmica em desenvolvimento para uso em TTRPGs, baseada no sistema de RPG Call of Cthulhu (7ª Edição).

## Informações
A ficha está sendo desenvolvida com EJS (templates HTML renderizados no servidor), CSS (com Bootstrap) e JavaScript. O backend usa Node.js com Express. O banco de dados utilizado será MongoDB, junto com Mongoose.

## Objetivos
O objetivo do projeto é servir como ficha para personagens feitos no sistema de rpg Call of Cthulhu 7th Edition. A ficha segue as regras base do sistema e possui cálculos automáticos. 

## Planos para o futuro
Regras da versão pulp talvez sejam adicionadas no futuro, assim como customização mais profunda da ficha.

## Instruções de uso
(Esta seção será atualizada quando a ficha estiver pronta para uso)\
Para uso da ficha, é necessário instalar Node js, para uso dos comandos envolvendo npm.\
Para testar a ficha no seu estado atual, baixe o arquivo .zip do repositório, extraia os arquivos, (ou use o comando git clone) abra a pasta no terminal ou IDE de escolha, e execute o seguinte comando:

```bash
npm install
```

Após isto, crie e configure um arquivo chamado .env no mesmo diretório que o arquivo app.js . Nele, coloque o seguinte, e troque "sua senha aqui" pela senha de conexão do seu cluster:
```bash
DB_URI="sua senha aqui"
```

Comece a aplicação com o seguinte comando:
```bash
npm start
```

E então digite o seguinte na barra de pesquisa de seu navegador:
```bash
localhost:8000/
```
