const router = require("express").Router();

//Importer les routers des routes
const ProduitRoute = require("./produit.routes");

router.get("/", (req, res) => {
    res.end( "Hello World" );
});

router.use("/produits", ProduitRoute);

module.exports = router;