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

    getProducts() {
        return catalog;
    }
}

export default DataService;