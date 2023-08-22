
import "./cart.css";
import { useContext } from 'react';
import DataContext from "../store/dataContext";
import ProductInCart from '../components/productInCart';

function Cart() {
    const cart = useContext(DataContext).cart;

function getProductCount() {
    let total = 0;
    for (let i=0; i<cart.length; i++) {
        let prod = cart[i];
        total += prod.quantity;
    }
    return total;
}

function getTotal() {
    // sum of quantity * price
    let total = 0
    for (let i=0; i < cart.length; i++) {
        const prod = cart[i];
        total += (prod.quantity * prod.price);
    }
    return total.toFixed(2);
}

    return (
        <div className="cart page">
            <h1> See whats in the bag !</h1>
            <h4> You have {getProductCount()} items in your cart ready to purchase!</h4>
        
        <div className="parent">
        <div className="list">
            {cart.map(prod => (
            <ProductInCart key={prod.id} data={prod}/>
            ))}
        </div>

        <div className="side-menu">
            <h3>Total</h3>
            <h3>{getTotal()}</h3>
        </div>
        </div>
        </div>
    );
}

export default Cart;