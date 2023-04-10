const path = require('path');

const express = require('express');


const shopController=require('../controllers/shops')
const router = express.Router();

router.get('/', shopController.getShop);

module.exports = router;
