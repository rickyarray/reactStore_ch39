import React, { useEffect } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {
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

    return (
        <div className="product">
            {/* Conditionally render the image if available */}
            {image && <img src={"/images/" + image} alt="" />}

            <h5>{title}</h5>
            <div className="prices">
                <label>{price}</label>
                <label>Total</label>
            </div>
            <QuantityPicker />
        </div>
    );
}

export default Product;
