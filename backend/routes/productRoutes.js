const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');
const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts); // Asegúrate de tener esta línea para manejar GET

module.exports = router;
