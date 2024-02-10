import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
];
  

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const Header = () => {
    return (
        <header className="header">
            <h1>Fast react Pizza co.</h1>
        </header>
    )
}

const Menu = () => {
    const numPizzas = pizzaData.length
    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizzas > 0 ? (
            <>
            <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All 
                from our store over. All organic, all delicious.
            </p>
            <ul className="pizzas">
                { pizzaData.map((pizza) => (
                    <Pizza pizzaObj= { pizza } key= { pizza.name }/>
                ))}
            </ul>
            </>
            ) : <p>Sorry all pizza's are currently out of stock.</p> }
        </main>
    )
}

function Pizza({ pizzaObj }) {
    return (
        <li className={ `pizza ${ pizzaObj.soldOut ? "sold-out" : null} `}>
            <img src={ pizzaObj.photoName } alt={ pizzaObj.name }/>
            <div>
                <h3>{ pizzaObj.name }</h3>
                <p>{ pizzaObj.ingredients }</p>
                <span>{ pizzaObj.soldOut ? "Sold Out" : pizzaObj.price }</span>
            </div>
        </li>
    )
}

const Order = ({ closeHour }) => {
    return (
    <div className="order">
        <p>We're open until { closeHour }:00, so come pay us a visit.</p>
        <button className="btn">Order</button>
    </div>
    )
}

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={ closeHour }/>
            ) : <p>We are closed, we open again tomorrow at { openHour }</p> }
        </footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);