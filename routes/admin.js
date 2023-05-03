const express = require('express');
const { getAddProductsPage, postAddProductsPage, getAdminProductsPage, getEditProductPage, postEditProductPage, postDeleteProductPage } = require('../controller/admin/ProductController');

const router = express.Router();

router.get('/', getAdminProductsPage);
router.get('/add', getAddProductsPage); 
router.post('/add', postAddProductsPage);
router.get('/edit/:productId', getEditProductPage);
router.post('/edit', postEditProductPage);
router.post('/delete', postDeleteProductPage);

module.exports = router