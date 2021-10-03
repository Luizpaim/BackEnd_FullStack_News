const express = require("express"); // instanciando biblioteca express

const router = express.Router(); // utilizando biblioteca router do express para definir rotas


//Rota de autenticação
const authRouter = require('./authRouter'); //criando rota para definir os caminhos da aplicação
router.use('/auth', authRouter);

//Rotas de users 
const userRouter = require('./usersRouter');
router.use('/users', userRouter);

//Rotas de profiles
const profileRouter = require('./profilesRouter');
router.use('/profiles', profileRouter);

//Rotas de categories
//Rotas de news 

module.exports = router; // exportar para usar propiedades em qualqer lugar na aplicação