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
    let deckElement = document.getElementById("deck");
    for (let deck in data){
        for (let card of deck){
            let div = document.createElement("li");
            if (card["Rarity"] == "mythic"){
                div.innerHTML = `${card["Quantity"]} ${card["Name"]} ★★★`;
            } else if (card["Rarity"] == "rare"){
                div.innerHTML = `${card["Quantity"]} ${card["Name"]} ★★`;
            } else if (card["Rarity"] == "uncommon"){
                div.innerHTML = `${card["Quantity"]} ${card["Name"]} ★`;
            } else {
                div.innerHTML = `${card["Quantity"]} ${card["Name"]}`;
            }
            deckElement.appendChild(div);
        }
        
    }
}
readJSON('http://127.0.0.1:5500/secoms319/data.json');
