fetch("selected_products.json")
  .then((response) => response.json())
  .then((data) => dataToHTML(data));

let productList;
function dataToHTML(data){
    appendDesc(data);
    addImg(data);
    appendName(data);
    productList = data;
}

function readJSON(file) {
  fetch(file)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log("error:" + err);
    });
}

function appendDesc(data) {
  document.getElementById("p1desc").innerText = data.products[0].description;
  document.getElementById("p2desc").innerText = data.products[1].description;
  document.getElementById("p3desc").innerText = data.products[2].description;
  document.getElementById("p4desc").innerText = data.products[3].description;
  document.getElementById("p5desc").innerText = data.products[4].description;
  document.getElementById("p6desc").innerText = data.products[5].description;
}

function appendName(data) {
  document.getElementById("p1name").innerText = data.products[0].title;
  document.getElementById("p2name").innerText = data.products[1].title;
  document.getElementById("p3name").innerText = data.products[2].title;
  document.getElementById("p4name").innerText = data.products[3].title;
  document.getElementById("p5name").innerText = data.products[4].title;
  document.getElementById("p6name").innerText = data.products[5].title;

  document.getElementById("Cp1name").innerText = data.products[0].title;
  document.getElementById("Cp2name").innerText = data.products[1].title;
  document.getElementById("Cp3name").innerText = data.products[2].title;
  document.getElementById("Cp4name").innerText = data.products[3].title;
  document.getElementById("Cp5name").innerText = data.products[4].title;
  document.getElementById("Cp6name").innerText = data.products[5].title;
  
  document.getElementById("Sp1name").innerText = data.products[0].title;
  document.getElementById("Sp2name").innerText = data.products[1].title;
  document.getElementById("Sp3name").innerText = data.products[2].title;
  document.getElementById("Sp4name").innerText = data.products[3].title;
  document.getElementById("Sp5name").innerText = data.products[4].title;
  document.getElementById("Sp6name").innerText = data.products[5].title;
}

function addImg(data) {
  document.getElementById("p1img").src = data.products[0].image;
  document.getElementById("p2img").src = data.products[1].image;
  document.getElementById("p3img").src = data.products[2].image;
  document.getElementById("p4img").src = data.products[3].image;
  document.getElementById("p5img").src = data.products[4].image;
  document.getElementById("p6img").src = data.products[5].image;
}

let browse;
let cartView;
let summary;
function onLoad() {
  browse = document.getElementById("browse");
  cartView = document.getElementById("cart");
  summary = document.getElementById("confirmation");
}
function loadBrowsePage() { 
  browse.removeAttribute("hidden");
  cartView.setAttribute("hidden", "hidden");
  summary.setAttribute("hidden", "hidden");
}
function loadCheckoutPage() {
  cartView.removeAttribute("hidden");
  browse.setAttribute("hidden", "hidden");
  summary.setAttribute("hidden", "hidden");
}
function loadConfirmationPage(){
    let itemTypes = 0;
    let list = "";
    for (let i = 0; i < 6; i++){
        if (nump[i] > 0){
            itemTypes++;
            list += "<li>"+productList.products[i].title + "....................$" + (productList.products[i].price * nump[i])+"</li>";
        }
    }
    document.getElementById("summaryList").innerHTML = list;
    summary.removeAttribute("hidden");
    cartView.setAttribute("hidden","hidden");
    browse.setAttribute("hidden","hidden");
    
}
function refreshPage(){
    nump = [0,0,0,0,0,0];
    document.getElementById("p1num").innerText = nump[0];
    document.getElementById("p2num").innerText = nump[0];
    document.getElementById("p3num").innerText = nump[0];
    document.getElementById("p4num").innerText = nump[0];
    document.getElementById("p5num").innerText = nump[0];
    document.getElementById("p6num").innerText = nump[0];
    
    document.getElementById("Cp1num").innerText = nump[0];
    document.getElementById("Cp2num").innerText = nump[0];
    document.getElementById("Cp3num").innerText = nump[0];
    document.getElementById("Cp4num").innerText = nump[0];
    document.getElementById("Cp5num").innerText = nump[0];
    document.getElementById("Cp6num").innerText = nump[0];
    
    document.getElementById("Sp1num").innerText = nump[0];
    document.getElementById("Sp2num").innerText = nump[0];
    document.getElementById("Sp3num").innerText = nump[0];
    document.getElementById("Sp4num").innerText = nump[0];
    document.getElementById("Sp5num").innerText = nump[0];
    document.getElementById("Sp6num").innerText = nump[0];
    loadBrowsePage();
}

var nump = [];
nump = [0, 0, 0, 0, 0, 0];

function increment(a) {
  switch (a) {
    case "p1num":
      nump[0]++;
      document.getElementById("p1num").innerText = nump[0];
      document.getElementById("Cp1num").innerText = nump[0];
      document.getElementById("Sp1num").innerText = nump[0];
      document.getElementById("p1cart").removeAttribute("hidden");
      break;
    case "p2num":
      nump[1]++;
      document.getElementById("p2num").innerText = nump[1];
      document.getElementById("Cp2num").innerText = nump[1];
      document.getElementById("Sp2num").innerText = nump[1];
      document.getElementById("p2cart").removeAttribute("hidden");
      break;
    case "p3num":
      nump[2]++;
      document.getElementById("p3num").innerText = nump[2];
      document.getElementById("Cp3num").innerText = nump[2];
      document.getElementById("Sp3num").innerText = nump[2];
      document.getElementById("p3cart").removeAttribute("hidden");
      break;
    case "p4num":
      nump[3]++;
      document.getElementById("p4num").innerText = nump[3];
      document.getElementById("Cp4num").innerText = nump[3];
      document.getElementById("Sp4num").innerText = nump[3];
      document.getElementById("p4cart").removeAttribute("hidden");
      break;
    case "p5num":
      nump[4]++;
      document.getElementById("p5num").innerText = nump[4];
      document.getElementById("Cp5num").innerText = nump[4];
      document.getElementById("Sp5num").innerText = nump[4];
      document.getElementById("p5cart").removeAttribute("hidden");
      break;
    case "p6num":
      nump[5]++;
      document.getElementById("p6num").innerText = nump[5];
      document.getElementById("Cp6num").innerText = nump[5];
      document.getElementById("Sp6num").innerText = nump[5];
      document.getElementById("p6cart").removeAttribute("hidden");
      break;
  }
}

function decrement(a) {
  switch (a) {
    case "p1num":
      if (nump[0] > 0) nump[0]--;
      document.getElementById("p1num").innerText = nump[0];
      document.getElementById("Cp1num").innerText = nump[0];
      document.getElementById("Sp1num").innerText = nump[0];
      if (nump[0] == 0) {
        document.getElementById("p1cart").setAttribute("hidden", "hidden");
        document.getElementById("p1sum").setAttribute("hidden", "hidden");
      }
      break;
    case "p2num":
      if (nump[1] > 0) nump[1]--;
      document.getElementById("p2num").innerText = nump[1];
      document.getElementById("Cp2num").innerText = nump[1];
      document.getElementById("Sp2num").innerText = nump[1];
      if (nump[1] == 0) {
        document.getElementById("p2cart").setAttribute("hidden", "hidden");
        document.getElementById("p2sum").setAttribute("hidden", "hidden");
      }
      break;
    case "p3num":
      if (nump[2] > 0) nump[2]--;
      document.getElementById("p3num").innerText = nump[2];
      document.getElementById("Cp3num").innerText = nump[2];
      document.getElementById("Sp3num").innerText = nump[2];
      if (nump[2] == 0) {
        document.getElementBy("p3cart").setAttribute("hidden", "hidden");
        document.getElementBy("p3sum").setAttribute("hidden", "hidden");
      }
      break;
    case "p4num":
      if (nump[3] > 0) nump[3]--;
      document.getElementById("p4num").innerText = nump[3];
      document.getElementById("Cp4num").innerText = nump[3];
      document.getElementById("Sp4num").innerText = nump[3];
      if (nump[3] == 0) {
        document.getElementById("p4cart").setAttribute("hidden", "hidden");
        document.getElementById("p4sum").setAttribute("hidden", "hidden");
      }
      break;
    case "p5num":
      if (nump[4] > 0) nump[4]--;
      document.getElementById("p5num").innerText = nump[4];
      document.getElementById("Cp5num").innerText = nump[4];
      document.getElementById("Sp5num").innerText = nump[4];
      if (nump[4] == 0) {
        document.getElementById("p5cart").setAttribute("hidden", "hidden");
        document.getElementById("p5sum").setAttribute("hidden", "hidden");
      }
      break;
    case "p6num":
      if (nump[5] > 0) nump[5]--;
      document.getElementById("p6num").innerText = nump[5];
      document.getElementById("Cp6num").innerText = nump[5];
      document.getElementById("Sp6sum").innerText = nump[5];
      if (nump[5] == 0) {
        document.getElementById("p6cart").setAttribute("hidden", "hidden");
        document.getElementById("p6sum").setAttribute("hidden", "hidden");
      }
      break;
  }
}
 function validate(){
    val = true;
    let email = document.getElementById('inputEmail4')
    let name = document.getElementById('inputName')
    let card = document.getElementById('inputCard')
    let form = document.getElementById('checkout-form')
    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        email.setAttribute("class", "form-control is-invalid");
        val = false;
    } else {
        email.setAttribute("class", "form-control is-valid");
    }
    if (name.value.length == 0){
        name.setAttribute("class","form-control is-invalid")
        val = false
    }else{
        name.setAttribute("class", "form-control is-valid");
    }
    if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)){
        card.setAttribute("class","form-control is-invalid")
        val = false
    }else{
        card.setAttribute("class", "form-control is-valid");
    }
    if (val){
        loadConfirmationPage();
    }
 }

