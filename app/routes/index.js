// routes/index.js
const productRoutes = require('./product_routes');
const priceRoutes = require('./price_routes');
const imageRoutes = require('./image_routes');

module.exports = function(app, db) {
    productRoutes(app, db);
    priceRoutes(app, db);
    imageRoutes(app, db);
    // Other route groups could go here, in the future
};
