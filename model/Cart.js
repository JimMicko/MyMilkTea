const fs = require('fs');
const path = require('path')
const rootDir = require('../utils/path');

exports.getCartDetailsFromFile = (callBack) => {
    const cartPath = path.join(rootDir, 'data', 'cart.json');
    fs.readFile(cartPath, (error, cartContent) => {
        // cart details
        let cart = { products: []};
        // if cart data exists
        if(!error){
            cart = JSON.parse(cartContent)
            console.log('Cart Updates Successfully')  
        }
        else {
            console.log(error)
        };

        return callBack(cart);
    });
};

exports.addProductToCart = (productId, productPrice) => {
    const cartPath = path.join(rootDir, 'data', 'cart.json');

    this.getCartDetailsFromFile((cart) => {
        // ensure cart.products is always defined
        cart.products = cart.products || [];

        let existingProductIndex = cart.products.findIndex((prod) => prod.id.toString() == productId);
        let updatedProduct;

        if (existingProductIndex != -1){
            updatedProduct = cart.products[existingProductIndex];
            updatedProduct.quantity += 1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        } else {
            updatedProduct = {id: productId, quantity: 1};
            cart.products = [...cart.products, updatedProduct];
        };
        
        // Assign the updated products array back to the cart object
        cart = {...cart, products: cart.products};
        
        fs.writeFile(cartPath, JSON.stringify(cart), (error) => {
            if(!error){
                console.log('Updates Recorded Successfully')  
            }
            else {
                console.log(error)
            };
        });
    });
};


exports.deleteProductFromCart = (productId, callBack='') => {
    const cartPath = path.join(rootDir, 'data', 'cart.json');
    this.getCartDetailsFromFile(cart => {
        let cartProducts = cart.products;
        let updatedCartProducts = cartProducts.filter(prod => prod.id.toString() != productId.toString());

        fs.writeFile(cartPath, JSON.stringify({products: updatedCartProducts}), (error) => {
            if(!error){
                console.log('Updates Recorded Successfully')  
            }
            else {
                console.log(error)
            };
        });
        if(callBack){
            callBack();
        }
    });
};