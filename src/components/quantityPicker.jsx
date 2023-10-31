// create the componet and render a button 
import "./quantityPicker.css";
import { useState } from "react"; //this allows 'state variables: are global'


function QuantitiyPicker(props){
// 'quantity' is a variable & 'setQuantity' is the function
    const [quantity, setQuantity] = useState(1); //this is the initial value

    function increase(){
        let val = quantity + 1;
        setQuantity(val); // this is the assigned value : immutable so client cannot alter code
        props.onChange(val);
    }

    function decrease(){
        if(quantity===1) return; //breaks operation if 1, (negates having negative numbers)
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
    }


    return(
    <div className="qt-picker">
        <button class="btn btn-info" disabled = {quantity===1}onClick={decrease}>-</button>
        <label>{quantity}</label>
        <button class="btn btn-info" onClick={increase}>+</button>
    </div>
    );
}
export default QuantitiyPicker;