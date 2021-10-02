const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../../middleware/jwtVerify");

const usersControllers = require("../controllers/usersController");

router.get('', verifyJWT, usersControllers.find);
router.get('/:index', verifyJWT, usersControllers.findById);
router.post('', verifyJWT, usersControllers.create);
router.put('/:index', verifyJWT, usersControllers.update);
router.delete('/:index', verifyJWT, usersControllers.destroy);

module.exports = router;