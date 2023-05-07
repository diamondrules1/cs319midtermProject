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

app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM User", (err,result) => {
        if (err){
            console.log(err);
        }
        res.send(result);
    });
});
app.get("/api/getFromId/:id", (req,res) => {
    const id = req.params.id;
    db.query(
        "SELECT * FROM User WHERE id = ?", id,
        (err, result) => {
            if (err){
                console.log(err);
            }
            res.send(result);
        }
    );
});
app.post("/api/create", (req,res) => {
    const id = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    console.log(id, username, password, email);
    db.query(
        "INSERT INTO User (id, username, password, email) VALUES (?,?,?,?)", 
        [id, username, password, email],
        (err, result) => {
            if (err){
                console.log(err);
            }
            console.log(result);
        }
    );
});
app.delete("/api/delete/:id", (req,res) => {
    const id = req.params.id;
    db.query(
        "DELETE FROM User WHERE id = ?", id,
        (err, result) => {
            if (err){
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});