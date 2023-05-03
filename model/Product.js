const fs = require('fs');
const path = require('path')
const rootDir = require('../utils/path');
const db = require('../utils/database');

const getProductsFromFile = (callBack) => {
    const productsPath = path.join(rootDir, 'data', 'products.json');

    fs.readFile(productsPath, (error, productsData) => {
        if(error){
            return callBack([]);
        }
        return callBack(JSON.parse(productsData))
    });
}

exports.saveProduct = (product) => {
    return db.execute('INSERT INTO `products` (product_name, description, price, image_url) values (?,?,?,?)', [
        product.product_name,
        product.description,
        product.price,
        product.image_url
    ]);
};

exports.fetchAllProducts = () => {
    return db.execute('SELECT * FROM `products`');
};

exports.getProductById = (productId) => {
    return db.execute('SELECT * FROM `products` WHERE id =?', [productId]);
};

exports.updateProductById = (product, productId) => {
    getProductsFromFile(products => {
        const productsPath = path.join(rootDir, 'data', 'products.json');
        const existingProductIndex = products.findIndex(prod => prod.id.toString() == productId);

        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = product;
        fs.writeFile(productsPath, JSON.stringify(updatedProducts), error => {
            if (error) {
                console.log('Error writing to file:', error);
            } else {
                console.log('Product saved successfully');
            }
        });
    });
};

exports.deleteProductById = (productId, callBack) => {
    const productsPath = path.join(rootDir, 'data', 'products.json');
    getProductsFromFile(products => {
        let updatedProducts = products.filter(product => product.id.toString() !== productId.toString());
        deleteProductFromCar(productId);

        fs.writeFile(productsPath, JSON.stringify(updatedProducts), error => {
            console.log(error);
        });
        callBack();
    });
};