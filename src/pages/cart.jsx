
import "./cart.css";
import { useContext } from 'react';
import DataContext from "../store/dataContext";

function Cart() {
    const cart = useContext(DataContext).cart;

    return (
        <div className="cart page">
            <h1> See whats in the bag !</h1>
            <h4> You have {cart.length} items in your cart ready to purchase!</h4>
        </div>
    )
}

export default Cart;