const express = require('express');
const router = express.Router();
const userAuth = require('../controllers/auth')

router.post('/createUser', userAuth.regiterUser)


module.exports = router
