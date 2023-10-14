import axios from "axios";

let catalog =[
{
    "title": "Graphic Tee", //example
    "category": "Tops",
    "price": 29.00,
    "image": "oversizedTee.jpeg", //find image to asssociate w/product (./images)
    "id": "1",
},
{
    "title": "Athletic Shorts",
    "category": "Bottoms",
    "price": 24.95,
    "image": "shorts.jpeg",
    "id": "2",
},
{
    "title": "Nike Low",
    "category": "Shoes",
    "price": 130.95,
    "image": "shoes.jpeg",
    "id": "3",
},
{
    "title": "Anime Hoodie",
    "category": "Tops",
    "price": 24.95,
    "image": "hoodie.jpeg",
    "id": "4",
},
{
    "title": "Straight Cargo Pant",
    "category": "Bottoms",
    "price": 34.95,
    "image": "CargoPant.png",
    "id": "5",
},
{
    "title": "Denim Jacket",
    "category": "Tops",
    "price": 49.95,
    "image": "jacket.jpeg",
    "id": "6",
},
{
    "title": "Warner - Mexico tee",
    "category": "Tees",
    "price": 29.98,
    "image": "WarnerTee.png",
    "id": "7",
},
{
    "title": "49ers Oversized Tee",
    "category": "Tees",
    "price": 34.98,
    "image": "49ersTee.png",
    "id": "8",
}

]

class DataService {
    serverURL = "http://127.0.0.1:5000";

    async getProducts() {
        //***Uncomment next line to work with local data***
        return catalog;

        //call the server
        const response = await axios.get (this.serverURL + '/api/products');
        return response.data;
    }

    async getCategories() {
        const response = await axios.get(this.serverURL + "/api/categories");
        return response.data;
    }

    getCategoriesFromLocalData() {
        // Extract unique categories from the catalog array
        const uniqueCategories = [...new Set(catalog.map(item => item.category))];
        return uniqueCategories;
    }
    

    async saveProduct(prod) {
        const response = await axios.post(this.serverURL +'/api/products', prod);
        return response.data;
    }

    async saveCoupon(coupon) {
        const response = await axios.post(this.serverURL +'/api/coupons', coupon);
        return response.data;
    }


    async deleteProduct(id) {
        const response = await axios.delete(this.serverURL + '/api/products/id/' + id);
        return response.data;
    }
}

export default DataService;