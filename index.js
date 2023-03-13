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

function appendData(data){
    var deckElement = document.getElementById("deck");
    var i = Math.floor(Math.random() * 93)
    for (var r = 0; r < 7; ++r){
        var div = document.createElement("li");
        var rarity = data.landBeforeTime[i + r].Rarity;
        var num = data.landBeforeTime[i + r].Quantity;
        var name = data.landBeforeTime[i + r].Name;
        if (name == "Forest" || name == "Plains" || name == "Mountain"){
            num = 1;
        }
        if (rarity == "mythic"){
            div.innerHTML = `${num} ${name} ★★★`;
        } else if (rarity  == "rare"){
            div.innerHTML = `${num} ${name} ★★`;
        } else if (rarity  == "uncommon"){
            div.innerHTML = `${num} ${name} ★`;
        } else {
            div.innerHTML = `${num} ${name}`;   
        }
        deckElement.appendChild(div);
    }
}
window.onload=function(){
    var newHand7;
    newHand7 = document.getElementById("new7");

newHand7.addEventListener("click", function() {
    var child = document.getElementById("deck").lastElementChild;
    while(child){
        document.getElementById("deck").removeChild(child);
        child = document.getElementById("deck").lastElementChild;
    }

    readJSON('data.json');
});
}
