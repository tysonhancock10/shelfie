module.exports = {
    getInventory: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.get_inventory()
          .then( inventory => res.status(200).send( inventory ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
    addInventory: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { product_name, product_price, product_img } = req.body;
        console.log(dbInstance)
        console.log(product_name)
        console.log(product_price)
        console.log(product_img)
        dbInstance.create_product([ product_name, product_price, product_img ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "didnt work"});
            console.log(err)
        });
    }
}