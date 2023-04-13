import React from "react";
import ReactDOM from "react-dom/client";
import Shop from "./shop/Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><Shop /></React.StrictMode>);

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));
const browse = getElementById("browse");
const cart = getElementById("cart");
const summary = getElementById("summary");

function loadBrowsePage(){
    browse.removeAttribute("hidden");
    cart.hidden;
    summary.hidden;
}
function loadCheckoutPage(){
    cart.removeAttribute("hidden");
    browse.hidden;
    summary.hidden;
}
function loadConfirmationPage(){
    summary.removeAttribute("hidden");
    cart.hidden;
    browse.hidden;
}
loadBrowsePage();
