/** This is made to fulfill the dataContext.js file */

import { useState } from "react";
import DataContext from "./dataContext";

function GlobalState(props) {
    const [cart, setCart ] = useState([]);
    const [user, setUser] = useState({name: 'Ricky', id: 369, email: 'array.ricky@gmail.com' });

function addToCart(prod) {
    let copy = [...cart];
    let found = false;
    // check if product is already in cart
    for(let i = 0; i < copy.length; i++) {
        let prodInCart = copy[i];
        if(prod.id === prodInCart.id) {
            // already there
            prodInCart.quantity += prod.quantity;
            found = true;
        }
    }

    // add product to cart
    if(!found) {
    copy.push(prod);
    }

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