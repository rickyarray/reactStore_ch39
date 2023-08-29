import { useEffect, useState } from "react";
import "./admin.css";
import DataService from "../services/dataService";



function Admin() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

useEffect(function() {
    loadData();

}, []);

async function loadData() {
    let service = new DataService();
    const prods = await service.getProducts();
    setAllProducts(prods);
}

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

//save to server
        let copy = {...product};
        copy.price = parseFloat(copy.price);
        let service = new DataService();
        service.saveProduct(copy);


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

                <hr />
                <ul className="product-list">
                    {allProducts.map(prod => <li key={prod._id}> {prod.title} ${prod.price} <button className="btn btn-sm btn-danger">Remove</button>
</li>)}
                </ul>
                
            </div>

           
        </div>
    )
}


export default Admin;

