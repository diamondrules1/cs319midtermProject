fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));
let browse = document.getElementById("browse");
let cartView = document.getElementById("cart");
let summary = document.getElementById("confirmation");
function loadBrowsePage(){
    browse.hidden = false;
    cartView.hidden = true;
    summary.hidden = true;
}
function loadCheckoutPage(){
    cartView.hidden = false;
    browse.hidden = true;
    summary.hidden = true;
}
function loadConfirmationPage(){
    summary.innerHTML = Shop.listItemsNoButtons();
    summary.hidden = false;
    cartView.hidden = true;
    browse.hidden = true;

}
function refreshPage(){
    loadBrowsePage();
    Shop.clearCart();
}


let cart = {
  p1num: 0,
  p2num: 0,
  p3num: 0,
  p4num: 0,
  p5num: 0,
  p6num: 0,
};

function increment(a) {
  switch (a) {
    case "p1num":
      cart.p1num++;
      break;
    case "p2num":
      cart.p2num++;
      break;
    case "p3num":
      cart.p3num++;
      break;
    case "p4num":
      cart.p4num++;
      break;
    case "p5num":
      cart.p5num++;
      break;
    case "p6num":
      cart.p6num++;
      break;
  }
}

function decrement(a) {
  switch (a) {
    case "p1num":
      cart.p1num--;
      break;
    case "p2num":
      cart.p2num--;
      break;
    case "p3num":
      cart.p3num--;
      break;
    case "p4num":
      cart.p4num--;
      break;
    case "p5num":
      cart.p5num--;
      break;
    case "p6num":
      cart.p6num--;
      break;
  }
}
