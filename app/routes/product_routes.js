// product_routes.js
const ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {
    app.get('/products/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('products').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                if (item === null) {
                    res.status(404);
                    res.send({"error": "Product not found"});
                } else {
                    res.send(item);
                }


            }
        });
    });

    app.get('/products/', (req, res) => {
        db.collection('products').find({}).toArray(function (err, result) {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(result);
            }
        });
    });

    app.post('/products', (req, res) => {
        const products = req.body;
        db.collection('products').insertOne(products, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.delete('/products/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('products').removeOne(details, (err) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });

    app.put('/products/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const product = req.body;
        db.collection('products').updateOne(details, product, (err) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(product);
            }
        });
    });
};
