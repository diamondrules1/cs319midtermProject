import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [card, setCard] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [oneCard, setOneCard] = useState([]);
  const [viewer2, setViewer2] = useState(false);
  const [query, setQuery] = useState('');
  
  const handleChange = (e) => {
  setQuery(e.target.value);
  const results = card.filter(oneCard => {
    if (e.target.value === "") return card;
    return oneCard.name.toLowerCase().includes(e.target.value.toLowerCase())
  });
  setCard(results);
  }

  const showCardResult = oneCard.map((el) => {
  if(el.quantity > 0)
  return (
  <div key={el.cid}>
  Name: {el.cardName} <br />
  Price: {el.price} <br />
  Rarity: {el.rarity} <br />
  Color: {el.color} <br />
  Card Set: {el.cardSet} <br />
  Description: {el.description} <br />
  In Stock: {el.quantity} <br />
  <button onClick={reduceStock(el)}>Set One Aside for Me?</button>
  </div>
); else return;});

const showCardResults = card.map((el) => {
  <div key={el.cid}>
  Name: {el.cardName} <br />
  Price: {el.price} <br />
  Rarity: {el.rarity} <br />
  Color: {el.color} <br />
  Card Set: {el.cardSet} <br />
  Description: {el.description} <br />
  In Stock: {el.quantity} <br />
  </div>
});

function getAllCards(){
  fetch("http://127.0.0.1:4000/getAllCards/")
  .then((response) => response.json())
  .then((data) => {
      console.log("Show all cards: ",data);
      const dataArr = [];
      dataArr.push(data);
      setCard(data);
  });
  setViewer1(!viewer1);
}

function getCardByName(cardName){
  console.log(cardName);
      fetch("http://127.0.0.1:4000/getCardByName/"+cardName)
      .then((response) => response.json())
      .then((data) => {
          console.log("Show one card: ", cardName);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneCard(data);
      });
      setViewer2(!viewer2);
}

function reduceStock(el){
  let name = prompt("Please enter your name: ");
  if (name !== ""){
    console.log(el.cid, el.quantity);
      fetch("http://127.0.0.1:4000/update/"+el.cid+"/"+el.quantity)
      .then((response) => response.json())
      .then((data) => {
          console.log("Show one card: ", el.cid);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneCard(data);
      });
      setViewer2(!viewer2);
  }
}

return (
    <div>
      <h1>Cards</h1>
      <button onClick={() => getAllCards()}>Show All Cards</button>
      <label for="cardName">Search by Card Name:</label>
      <input type="text" id="cardName" name="cardName" value={query} onChange={handleChange}/>
      <hr></hr>  
      {viewer1 && <div>Cards {showCardResults}</div>}
      <hr></hr>
      <h1>Searched Card</h1>
      {viewer2 && <div>Card: {showCardResult}</div>}
      <hr></hr>
    </div>
  );
}








export default App;
