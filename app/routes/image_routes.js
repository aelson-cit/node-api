// image_routes.js
const ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {
    app.get('/products/:id/image', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('products').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                if (item === null) {
                    res.status(404);
                    res.send({"message": "Image not found: " + id});
                } else {
                    res.send({"imageSrc": item.imageSrc});
                }

            }
        });
    });

    app.get('/products/sku/:sku/image', (req, res) => {
        const sku = req.params.sku;
        const details = {'sku': sku};

        db.collection('products').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                if (item === null) {
                    res.status(404);
                    res.send({"message": "Image not found: " + sku});
                } else {
                    res.send({"imageSrc": item.imageSrc});
                }
            }
        });
    });
};
