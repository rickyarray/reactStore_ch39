import { useState } from "react";
import "./admin.css";

function Admin() {
    const [product, setProduct] = useState({});

    function handleInputChange(e) {
        console.log(e.target.value);
        const val = e.target.value;
        let name = e.target.name;
        

        // create copy, modify it, set it back
        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
    }

    return (
        <div className="admin page">
            <h1>Store Management</h1>

            <div className="parent-container">
                <h3>Register Products</h3>
                <div>
                    <label className="form-label">Title</label>
                    <input onBlur={handleInputChange} name="title" type="text" className="form-control"/>
                </div>

                <div>
                    <label className="form-label">Category</label>
                    <input onBlur={handleInputChange} name="category" type="text" className="form-control"/>
                </div>

                <div>
                    <label className="form-label">Image</label>
                    <input onBlur={handleInputChange} name="image"type="text" className="form-control"/>
                </div>

                <div>
                    <label className="form-label">Price</label>
                    <input onBlur={handleInputChange} name="price"type="number" className="form-control"/>
                </div>

                <button onClick={saveProduct} className="btn btn-dark">Save Product</button>

            </div>
        </div>
    )
}

export default Admin;

