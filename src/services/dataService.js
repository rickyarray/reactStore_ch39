import axios from "axios";

let catalog =[
{
    "title": "Graphic Tee", //example
    "category": "Shirts",
    "price": 29.00,
    "image": "oversizedTee.jpeg", //find image to asssociate w/product (./images)
    "id": "1",
},
{
    "title": "Athletic Shorts",
    "category": "Shorts",
    "price": 24.95,
    "image": "shorts.jpeg",
    "id": "2",
},
{
    "title": "Nike",
    "category": "Shoes",
    "price": 130.95,
    "image": "shoes.jpeg",
    "id": "3",
},
{
    "title": "Anime Hoodie",
    "category": "outerwear",
    "price": 24.95,
    "image": "hoodie.jpeg",
    "id": "4",
},
{
    "title": "Straight pant",
    "category": "jeans",
    "price": 29.95,
    "image": "pants.jpeg",
    "id": "5",
},
{
    "title": "Denim Jacket",
    "category": "outerwear",
    "price": 44.95,
    "image": "jacket.jpeg",
    "id": "6",
},
{
    "title": "Orange",
    "category": "fruit",
    "price": 16.98,
    "image": "orange.png",
    "id": "7",
},
{
    "title": "Orange",
    "category": "fruit",
    "price": 16.98,
    "image": "orange.png",
    "id": "8",
}

]

class DataService {
    serverURL = "http://127.0.0.1:5000";

    async getProducts() {
        //***Uncomment next line to work with local data***
        //return catalog;

        //call the server
        const response = await axios.get (this.serverURL + '/api/products');
        return response.data;
    }

    async getCatagories() {
        const response = await axios.get(this.serverURL + "/api/categories");
        return response.data;
    }

    async saveProduct(prod) {
        const response = await axios.post(this.serverURL +'/api/products', prod);
        return response.data;
    }
}

export default DataService;