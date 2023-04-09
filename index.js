import React from "react";
import ReactDOM from "react-dom/client";
import Shop from "./shop/Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><Shop /></React.StrictMode>);

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));
