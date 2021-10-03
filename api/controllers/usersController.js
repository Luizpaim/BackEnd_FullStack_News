const services = require('../../services'); // importando service para passar o crud 

const usersServices = services.usersService; // para usar propriedade que se refere a services 
const utilResponse = require('../../crosscuting/response');

const find = async function(req, res, next) { // função para buscar Usuario 

    try { // tratar o erro

        let result = await usersServices.find(req.query); //variavel que vai retornar oque foi encontrado 

        res.status(200).send(utilResponse.format(result, "get")); //informar status positivo caso der certo 'GET' Pegar

    } catch (error) {
        res.statusCode = error.errors ? 400 : 500; // caso não encontrar status negativo 

        res.send(utilResponse.format(error)); //retornar o error
    }
}

const findById = async function(req, res, next) {
    try {
        let result = await usersServices.findById(req.params.index); //variavel que vai retornar oque foi encontrado 
        // buscar com params vai vim pelo index pela conexão 

        res.status(200).send(utilResponse.format(result, "get")); //informar status positivo caso der certo 'GET' Pegar

    } catch (error) {
        res.statusCode = error.errors ? 400 : 500; // caso não encontrar status negativo 
        res.send(utilResponse.format(error)); //retornar o error
    }
}

const create = async function(req, res, next) {
    try {
        let result = await usersServices.create(req.userJwt, req.body); //variavel que vai retornar oque foi criado 
        // criar com token e pelo body pelo body interface cliente pela conexão 'POST'

        res.status(201).send(utilResponse.format(result, "post"));
    } catch (error) {
        res.statusCode = error.errors ? 400 : 500;
        res.send(utilResponse.format(error));
    }
}

const update = async function(req, res, next) {
    try {
        let result = await usersServices.update(req.userJwt, req.params.index, req.body); //variavel que vai retornar oque foi atualizado 
        // atualizar com token e pela base dados index  conexão 'put'
        res.status(200).send(utilResponse.format(result, "put"));
    } catch (error) {
        res.statusCode = error.errors ? 400 : 500;
        res.send(utilResponse.format(error));
    }
}

const destroy = async function(req, res, next) {
    try {
        let result = await usersServices.destroy(req.userJwt, req.params.index, req.body); //variavel que vaideletar
        // oque veio pelo index atrases do body
        // deletar com token e pela base dados index  conexão 'delete'
        res.status(202).send(utilResponse.format(result, "delete"));
    } catch (error) {
        res.statusCode = error.errors ? 400 : 500;
        res.send(utilResponse.format(error));
    }
}

module.exports = { //exportando os metodos para usar em toda aplicação
    find,
    findById,
    create,
    update,
    destroy
}