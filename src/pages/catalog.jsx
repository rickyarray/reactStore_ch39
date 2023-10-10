import React, { useEffect, useState } from "react";
import Product from "../components/product";
import "./catalog.css";
import DataService from "../services/dataService";

function Catalog() {
    // State variables for products, categories, and products to display
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);

    // Fetch the catalog data and initialize categories on component mount
    useEffect(() => {
        console.log("The component is loaded");
        loadCatalog();
    }, []);

    // Log the updated prodsToDisplay and products states
    useEffect(() => {
        console.log("prodsToDisplay updated:", prodsToDisplay);
        console.log("products updated:", products);
    }, [prodsToDisplay, products]);

    // Load catalog data and set initial prodsToDisplay state
    async function loadCatalog() {
        try {
            let service = new DataService();
            let prods = await service.getProducts();
            console.log("Fetched products:", prods);

            if (prods && prods.length > 0) {
                setProducts(prods);

                // Updated categories
                let cats = await service.getCategories();
                setCategories(cats);

                setProdsToDisplay(prods); // Display all products by default
            } else {
                console.log("No products found.");
            }
        } catch (error) {
            console.error("Error loading products:", error);
        }
    }

    // Filter products based on selected category
    function filter(caty) {
        console.log("Filtering by category:", caty);
        const filteredProducts = products.filter((prod) => prod.category === caty);
        console.log("Filtered products:", filteredProducts);
        setProdsToDisplay(filteredProducts);
    }

    // Clear filter and display all products
    function clearFilter() {
        setProdsToDisplay(products);
    }

    return (
        <div className="catalog">
            <h1>Check out our {products.length} amazing products in our catalog</h1>
            <br />

            <button onClick={clearFilter} className="btn btn-sm btn-dark btn-filter">
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => filter(category)}
                    className="btn btn-sm btn-primary btn-filter"
                >
                    {category}
                </button>
            ))}
            <br />

            {prodsToDisplay.map((p) => (
                <Product key={p.id} data={p} />
            ))}
        </div>
    );
}

export default Catalog;