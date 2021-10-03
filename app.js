//1° Pagina Inicio do Projeto !! //

const express = require("express"); //Chamando a biblioteca express de modulos e conexões

const dotenv = require("dotenv"); //Chamando a biblioteca dotenv para criar variavel local de segurança

const cors = require("cors"); // importando biblioteca para liberar api para qualquer ip utilizar

const routes = require("./api/routes"); //importando uso das rotas tudo relacionado a rotas

//#region | Configurando ambiente
let dotEnv = '.env'; // variavel para armazenar o arquivo dotenv

if (process.env.NODE_ENV) { // condição se vier um .env 
    dotEnv += `.${process.env.NODE_ENV}`; // contatena ele e oque vier noi dotenv 
}

dotenv.config({ path: `./config/${dotEnv}` }); //informando onde se encontra o meu dotenv variavel local
//#endregion

const server = express(); //Instanciando o express dentro de uma variavel 
server.use(express.json()); //Converter oque vem do banco para json para o servidor intender
server.use(cors()); // referencia a biblioteca cors que libera para qualquer ip

server.use(routes); //chamando utilização de rotas .

//Comentar (middleware)""
server.use((req, res, next) => {
    console.time('Request');
    console.log(`Método: ${req.method}; URL: ${req.url}`);

    next();

    console.log('Finalizou'); //será chamado após a requisição ser concluída
    console.timeEnd('Request'); //marca o fim da requisição

});

//#region Subindo servidor
server.listen(process.env.PORT, '0.0.0.0', function(err) { // porta traves do dotenv , ip tratando error
        if (err) {
            console.error(err) // tratando erros e me mostrar onde esta o erro
        } else {
            console.log(`API Lintening on port ${process.env.PORT}`); //Mostrar que estamos conectados com sucesso !
        }
    })
    //#endregion