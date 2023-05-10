const mongoose = require('mongoose');
const db = new mongoose.Schema({
    cid: {type: Number},
    cardName: {type:String},
    price: {type:Number},
    rarity: {type:String},
    color: {type:String},
    cardSet: {type:String},
    description: {type:String},
    quantity: {type:Number}
}, {collection: "cardCatalog"});
const Card = mongoose.model('Card', db);
module.exports = Card;