const {
    produitsListe,
    unProduit,
    ajouterUnProduit,
    supprimerUnProduit,
    modifierUnProduit,
} = require("../controllers/produits.controllers");

const router = require("express").Router();

router.get("/", produitsListe);
router.get("/:produitId", unProduit);
router.post("/", ajouterUnProduit);
router.delete("/:produitId", supprimerUnProduit);
router.patch("/:produitId", modifierUnProduit);

module.exports = router