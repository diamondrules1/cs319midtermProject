// const browse = document.getElementById("browse");
// const cartView = document.getElementById("cart");
// const summary = document.getElementById("confirmation");
// const checkout = document.getElementById("checkout");
// const order = document.getElementById("order");
// const close = document.getElementById("close");
// const returnCheck = document.getElementById("return");

// function loadBrowsePage(){
//     browse.removeAttribute("hidden");
//     cartView.hidden;
//     summary.hidden;
// }
// function loadCheckoutPage(){
//     cartView.removeAttribute("hidden");
//     browse.hidden;
//     summary.hidden;
// }
// function loadConfirmationPage(){
//     summary.removeAttribute("hidden");
//     cartView.hidden;
//     browse.hidden;

// }
// checkout.addEventListener("submit", event => {
//     loadCheckoutPage();
// });
// order.addEventListener("submit",event => {
//     loadConfirmationPage();
// });
// close.addEventListener("submit", event => {
//     loadBrowsePage();
//     Shop.clearCart();
// });
// returnCheck.addEventListener("submit", event => {
//     loadBrowsePage();
// })
// loadBrowsePage();


fetch("selected_products.json")
    .then(response => response.json())
    .then(data => dataToHTML(data));

function dataToHTML(data){
    appendDesc(data);
    addImg(data);
}

function readJSON(file){
    fetch(file)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error:' + err);
        })
}

function appendDesc(data){
    document.getElementById("p1desc").innerText = data.products[0].description;
    document.getElementById("p2desc").innerText = data.products[1].description;
    document.getElementById("p3desc").innerText = data.products[2].description;
    document.getElementById("p4desc").innerText = data.products[3].description;
    document.getElementById("p5desc").innerText = data.products[4].description;
    document.getElementById("p6desc").innerText = data.products[5].description;
}

function addImg(data){
    document.getElementById("p1img").src = data.products[0].image;
    document.getElementById("p2img").src = data.products[1].image;
    document.getElementById("p3img").src = data.products[2].image;
    document.getElementById("p4img").src = data.products[3].image;
    document.getElementById("p5img").src = data.products[4].image;
    document.getElementById("p6img").src = data.products[5].image;
}

var nump = [];
nump = [0, 0, 0, 0, 0, 0];

function increment(a) {
  switch (a) {
    case "p1num":
      nump[0]++;
      document.getElementById("p1num").innerText = nump[0];
      break;
    case "p2num":
      nump[1]++;
      document.getElementById("p2num").innerText = nump[1];
      break;
    case "p3num":
      nump[2]++;
      document.getElementById("p3num").innerText = nump[2];
      break;
    case "p4num":
      nump[3]++;
      document.getElementById("p4num").innerText = nump[3];
      break;
    case "p5num":
      nump[4]++;
      document.getElementById("p5num").innerText = nump[4];
      break;
    case "p6num":
      nump[5]++;
      document.getElementById("p6num").innerText = nump[5];
      break;
  }
}

function decrement(a) {
  switch (a) {
    case "p1num":
      if(nump[0] > 0) nump[0]--;
      document.getElementById("p1num").innerText = nump[0];
      break;
    case "p2num":
      if (nump[1] > 0) nump[1]--;
      document.getElementById("p2num").innerText = nump[1];
      break;
    case "p3num":
      if(nump[2] > 0) nump[2]--;
      document.getElementById("p3num").innerText = nump[2];
      break;
    case "p4num":
      if(nump[3] > 0) nump[3]--;
      document.getElementById("p4num").innerText = nump[3];
      break;
    case "p5num":
        if(nump[4] > 0) nump[4]--;
      document.getElementById("p5num").innerText = nump[4];
      break;
    case "p6num":
      if(nump[5] > 0) nump[5]--;
      document.getElementById("p6num").innerText = nump[5];
      break;
  }
}
