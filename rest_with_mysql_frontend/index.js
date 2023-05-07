import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App_MySQL";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function getAllUsers(){
    fetch("http://127.0.0.1:4000/api/get")
    .then((response) => response.json())
    .then((data) => {
        console.log("Show all users");
        console.log(data);
        setUser(data);
    });
    setViewer1(!viewer1);
}
const showAllItems = user.map((el) => (
    <div key={el.uid}>
    Username: {el.username} <br />
    Email: {el.email} <br />
    Password: {el.password} <br />
    </div>
));
function getCardByName(cardName){
    console.log(cardName);
        fetch("http://127.0.0.1:4000/api/getCardByName/"+cardName)
        .then((response) => response.json())
        .then((data) => {
            console.log("Show one user :", id);
            console.log(data);
            // const dataArr = [];
            // dataArr.push(data);
            setOneUser(data);
        });
        setViewer2(!viewer2);
}
const showCardResults = oneCard.map((el) => (
    <div key={el.cid}>
    Name: {el.cardName} <br />
    Email: {el.email} <br />
    Password: {el.password} <br />
    </div>
));
function getOneUser(uid){
    console.log(uid);
    if (id >= 1){
        fetch("http://127.0.0.1:4000/api/getFromId/"+uid)
        .then((response) => response.json())
        .then((data) => {
            console.log("Show one user :", uid);
            console.log(data);
            // const dataArr = [];
            // dataArr.push(data);
            setOneUser(data);
        });
        setViewer2(!viewer2);
    } else {
        console.log("Wrong number of user id");
    }
}
const showOneItem = oneUser.map((el) => (
    <div key={el.uid}>
    Username: {el.username} <br />
    Email: {el.email} <br />
    Password: {el.password} <br />
    </div>
));
function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "uid") {
        setAddNewUser({ ...addNewUser, uid: value });
    } else if (evt.target.name === "username") {
        setAddNewUser({ ...addNewUser, username: value });
    } else if (evt.target.name === "email") {
        setAddNewUser({ ...addNewUser, email: value });
    } else if (evt.target.name === "password") {
        setAddNewUser({ ...addNewUser, password: value });
    }
}
function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://127.0.0.1:4000/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addNewUser),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log("Post a new user completed");
    console.log(data);
        if (data) {
            //const keys = Object.keys(data);
            const value = Object.values(data);
            alert(value);
        }
    });
}
function deleteOneUser(deleteid) {
    console.log("User to delete :", deleteid);
    fetch("http://127.0.0.1:4000/api/delete/" + deleteid, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user[index]),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Delete a user completed : ",
        deleteid);
        console.log(data);
        if (data) {
            //const keys = Object.keys(data);
            const value = Object.values(data);
            alert(value);
        }
    });
    setChecked4(!checked4);
}
useEffect(() => {
    getAllUsers();
}, []);
useEffect(() => {
    getAllUsers();
}, [checked4]);
function getOneByOneUserNext() {
    if (user.length > 0) {
        if (index === user.length - 1) 
            setIndex(0);
        else 
            setIndex(index + 1);
        if (user.length > 0) 
            setViewer4(true);
        else 
            setViewer4(false);
    }
}
function getOneByOneUserPrev() {
    if (user.length > 0) {
        if (index === 0) 
            setIndex(user.length - 1);
        else 
            setIndex(index - 1);
        if (user.length > 0) 
            setViewer4(true);
        else 
            setViewer4(false);
    }
}
    
    
    
