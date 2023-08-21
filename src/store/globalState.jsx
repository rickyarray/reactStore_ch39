/** This is made to fulfill the dataContext.js file */


import { useState } from "react";
import DataContext from "./dataContext";

function GlobalState(props) {
    const [ cart, setCart ] = useState([]);
    const [user, setUser] = useState({name: 'Ricky', id: 369, email: 'array.ricky@gmail.com' });

function addToCart(prod) {
    //add prod to cart
    // 1)create a copy, 2) modify, 3) send back
    let copy = [...cart];
    copy.push(prod);
    setCart(copy);
}

function removeFromCart() {
    console.log('global remove');
}

    return (
    <DataContext.Provider value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
    }}>
        {props.children}
        </DataContext.Provider>
    );
}

export default GlobalState;