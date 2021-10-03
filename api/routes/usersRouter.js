const express = require("express"); //importar biblioteca express que configura as rotas

const router = express.Router(); //propiedade do express para configuraar routes

const { verifyJWT } = require("../../middleware/jwtVerify");

const usersController = require("../controllers/usersController"); // importando acesso para utilizar propiedades de controllers


router.get('', verifyJWT, usersController.find); //quando ouver um get , traz o objeto com um find para fazer busca no banco 

router.get('/:index', verifyJWT, usersController.findById);
router.post('', verifyJWT, usersController.create);
router.put('/:index', verifyJWT, usersController.update);
router.delete('/:index', verifyJWT, usersController.destroy);

module.exports = router; //exportar rotas ecaminhos.