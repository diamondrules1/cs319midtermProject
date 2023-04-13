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
const summary = getElementById("confirmation");
const checkout = getElementById("checkout");
const order = getElementById("order");
const close = getElementById("close");
const returnCheck = getElementById("return");
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
checkout.addEventListener("submit", event => {
    loadCheckoutPage();
});
order.addEventListener("submit",event => {
    loadConfirmationPage();
});
close.addEventListener("submit", event => {
    loadBrowsePage();
    Shop.clearCart();
});
returnCheck.addEventListener("submit", event => {
    loadBrowsePage();
})
loadBrowsePage();
