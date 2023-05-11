const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Card = require("./db.js");
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/mtgCards",{
    dbName: "mtgCards",
    useNewURLParser: true,
    useUnifiedTopology: true,
}
);
const port = process.env.PORT || 3000;
const host = "localhost";
app.listen(port, () => {
    console.log(`App listening at http://%s:%s`, host, port);
});

app.get("/getAllCards", async (req, res) => {
    const allCards = await Card.find({});
    console.log(allCards);
    express.response.send(allCards);
})
app.get("/getCardByName/:name", async (req,res) => {
    const name = req.params.cardName;
    const query = {cardName: name};
    const allCards = await Card.findOne(query);
    console.log(allCards);
    express.response.send(allCards);
});
app.get("/getIdByName/:name", async (req,res) => {
    const name = req.params.cardName;
    const query = {cardName: name};
    const allCards = await Card.findOne(query);
    console.log(allCards);
    express.response.send(allCards);
})
app.post("/update/:id/:quantity", async (req,res) => {
    const id = req.params.id;
    const currentQuantity = req.params.quantity - 1;
    console.log(id, currentQuantity);
    try {
        await Card.updateOne({cid: id}, {quantity: currentQuantity});
        console.log("Changed Quantity");
    } catch (err){
        console.log("Error while updating product: ", err);
    }
});