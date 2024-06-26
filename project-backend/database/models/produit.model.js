const mongoose = require("mongoose");
const schema = mongoose.Schema;

const produitSchema = schema({
    name: {
        type: String,
        minlenght:[1, "Le nom est requis"], 
        required: true
    },
    image: {
        type: String,
        minlenght:[1, "L'image est requise"], 
        required: true
    },
    price: {
        type: Number,
        minlenght:[1, "Le prix est requis"], 
        required: true
    },
    brand: {
        type: String,
        minlenght:[1, "Le brand est requis"], 
        required: true
    },
});

const Produit = mongoose.model("Produit", produitSchema);

module.exports = Produit;