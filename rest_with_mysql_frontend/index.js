import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App_MySQL";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
function getCardByName(cardName){
    console.log(cardName);
        fetch("http://127.0.0.1:4000/api/getCardByName/"+cardName)
        .then((response) => response.json())
        .then((data) => {
            console.log("Show one card:", cardName);
            console.log(data);
            const dataArr = [];
            dataArr.push(data);
            setOneCard(data);
        });
        setViewer2(!viewer2);
        return showCardResults;
}
const showCardResults = oneCard.map((el) => (
    <div key={el.cid}>
    Name: {el.cardName} <br />
    Price: {el.price} <br />
    Rarity: {el.rarity} <br />
    Card Set: {el.cardSet} <br />
    Description: {el.description} <br />
    In Stock: {el.quantity} <br />
    </div>
));
function reduceStock(cid){
    console.log(cid);
        fetch("http://127.0.0.1:4000/api/like/"+cid+"/"+dAmt)
        .then((response) => response.json())
        .then((data) => {
            console.log("Show one user :", id);
            console.log(data);
            const dataArr = [];
            dataArr.push(data);
            setOneCard(data);
        });
        setViewer2(!viewer2);
        return showCardResults;
}

    
    
