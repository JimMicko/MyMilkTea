const Category = require("../../model/CategoryModel");
const { saveProduct, fetchAllProducts, getProductById, updateProductById, deleteProductById } = require("../../model/Product");
const Product = require("../../model/ProductModel");

exports.getAddProductsPage = (req, res) => {
    Category.findAll({ attributes: ['id', 'title']})
        .then(categories => {
            const viewsData = {
                edit: false,
                categories,
                pageTitle: 'Add Product'
            };
            res.render('AddProduct', viewsData);    
        })
            .catch((error) => {
            console.log(error)
            });
};

exports.postAddProductsPage = (req, res) => {
    const product = {
        product_name: req.body.product_name,
        image_url: req.body.image_url,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId
    };

    const productObj = Product.build(product);
    productObj
        .save()
        .then(() => {
            res.redirect('/home'); 
        })
        .catch((error) => {
        console.log(error)
    });
};

exports.getAdminProductsPage = (req, res) => {
    Product.findAll({include: Category})
        .then((products) => {
            const viewsData = {
                admin: true,
                products,
                pageTitle: 'Admin Products'
            }
            res.render('product_list', viewsData);
        })
        .catch((error) => {
            console.log(error)
        });
};

exports.getEditProductPage = (req, res) => {
    const productId = req.params.productId;

    let viewsData = {
        edit: true,
        pageTitle: 'Edit Product' 
    };

    Product.findByPk(productId)
        .then((product) => {
            viewsData = {...{product}, ...viewsData};
            return Category.findAll({ attributes: ['id', 'title']});
        })
        .then((categories) => {
            viewsData = { ...{categories}, ...viewsData};
            console.log(viewsData)
            res.render('AddProduct', viewsData);    
        })
        .catch((error) => {
            console.log(error)
        });
};

exports.postEditProductPage = (req, res) => {
    const productId = req.body.productId;
    const product = {
        product_name: req.body.product_name,
        image_url: req.body.image_url,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId
    };
    Product.update(product, {where: {id: productId}})
        .then(() => {
            res.redirect('/products');
        })
        .catch((error) => {
            console.log(error)
        });
};

exports.postDeleteProductPage = (req, res) => {
    const productId = req.body.productId;

    Product.findByPk(productId)
    .then((product) => {
        return product.destroy();
    })
    .then(() => {
        res.redirect('/products');
    })
    .catch((error) => {
        console.log(error)
    });
}