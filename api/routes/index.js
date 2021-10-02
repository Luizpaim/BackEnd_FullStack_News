const express = require("express");
const router = express.Router();

//Rota de autenticação
const authRouter = require('./usersRouter');
router.use('/auth', authRouter);

//Rotas de users 
const userRouter = require('./usersRouter');
router.use('/users', userRouter);

//Rotas de profiles
const profilesRouter = require('.profilesRouter');
router.use('/profiles', profilesRouter);

//Rotas de categories
//Rotas de news 

module.exports = router;