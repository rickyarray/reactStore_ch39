import React, { useEffect, useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useContext } from "react";
import DataContext from "../store/dataContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const addToCart = useContext(DataContext).addToCart;


    // useEffect hook to log a message when the component is mounted
    useEffect(() => {
        console.log("hello, I'm a product");
    }, []);

    // Destructuring props.data and providing default values if props.data is not provided
    const { title,  price, image } = props.data || {
        title: "Default Product",
        category: "Default Category",
        price: 0,
        image: "",
        id: "0",
    };

    function handleQuantityChange(qty) {
        setQuantity(qty);
    }

function handleAdd() {
    const prodWithQuantity = {
        ...props.data,
        quantity: quantity
    };

    addToCart(prodWithQuantity); //call the global function
}


    function getPrice() {
        return props.data.price.toFixed(2);
    }

    function getTotal() {
        const total = props.data.price * quantity
        return total.toFixed(2);
    }


    return (
        <div className="product">
            {/* Conditionally render the image if available */}
            {image && <img src={"/images/" + image} alt="" />}

            <h5>{title}</h5>
            <div className="prices">
                <label>{getPrice()}</label>
                <label>{getTotal()}</label>
            </div>
            <QuantityPicker onChange={handleQuantityChange} />
            <button onClick={handleAdd} className="btn btn-small btn-success">Add</button>
        </div>
    );
}

export default Product;
