fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));
let browse = document.getElementById("browse");
let cartView = document.getElementById("cart");
let summary = document.getElementById("confirmation");
function loadBrowsePage(){
    browse.removeAttribute("hidden");
    cartView.setAttribute("hidden","hidden");
    summary.setAttribute("hidden","hidden");
}
function loadCheckoutPage(){
    cartView.removeAttribute("hidden");
    browse.setAttribute("hidden","hidden");
    summary.setAttribute("hidden","hidden");
}
function loadConfirmationPage(){
    summary.innerHTML = Shop.listItemsNoButtons();
    summary.removeAttribute("hidden");
    cartView.setAttribute("hidden","hidden");
    browse.setAttribute("hidden","hidden");
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
