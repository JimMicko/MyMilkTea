const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./utils/path');
const PORT = 4000;

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const categoryRoutes = require('./routes/categoryRoutes');
const sequelize = require('./utils/database');
const Category = require('./model/CategoryModel');
const Product = require('./model/ProductModel');
const Customer = require('./model/CustomerModel');
const Cart = require('./model/CartModel');
const CartItem = require('./model/CartItemModel');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// Static Files
app.use(express.static(path.join(rootDir, 'public')));
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use(homeRoutes);
app.use('/products', adminRoutes);
app.use('/categories', categoryRoutes);
app.use((req, res) => {
    const viewsData = {
        pageTitle: 'Page Not Found' 
    }
    res.status(404).render('404', viewsData);
});

Category.hasMany(Product);

Product.belongsTo(Category);
Product.belongsToMany(Customer, {through: 'orders'});
Product.belongsToMany(Cart, {through: CartItem});


Cart.belongsToMany(Product, {through: CartItem})


sequelize
    .sync({force:true})
    .then((result) => {
        // console.log(result);
    }).catch((error) => {
        console.log(error);
}); 

//setup the server
app.listen(PORT, () => {
    console.log('Server is running at port ' + PORT);
});