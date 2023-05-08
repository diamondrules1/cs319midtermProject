const express = require("express");
const db = require("./db.js");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


app.get("/api/getCardByName/:name", (req,res) => {
    const cardName = req.params.cardName;
    db.query(
        "SELECT * FROM Card WHERE cardName = ?", cardName,
        (err, result) => {
            if (err){
                console.log(err);
            }
            res.send(result);
        }
    );
});
app.get("/api/getIdByName/:name",(req,res) => {
    const cardName = req.params.cardName;
    db.query(
        "SELECT cid FROM Card WHERE cardName = ?", cardName,
        (err, result) => {
            if (err){
                console.log(err);
            }
            res.send(result);
        }
    )
})
app.post("/api/like/:id/:dAmt", (req,res) => {
    const id = req.params.id;
    const decreaseAmount = req.params.dAmt;
    console.log(id, username, password, email);
    for (let x = 0; x < decreaseAmount; x++){
        db.query(
            "UPDATE Card SET quantity = quantity - 1 WHERE id = ?", 
            id,
            (err, result) => {
                if (err){
                    console.log(err);
                }
                console.log(result);
            }
        );
    }
    
});