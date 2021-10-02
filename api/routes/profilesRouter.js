const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../../middleware/jwtVerify");

const profilescontroller = require("../controllers/profilesController");

router.get('', verifyJWT, profilescontroller.find);
router.get('/:index', verifyJWT, profilescontroller.findById);
router.post('/:index', verifyJWT, profilescontroller.create);
router.put('/:index', verifyJWT, profilescontroller.update);
router.delete('/:index', verifyJWT, profilescontroller.destroy);

module.exports = router;