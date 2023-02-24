export let menu_products = [{
    name: "Cheesecake",
    img: "../../assets/Food/22_cheesecake.png",
    price: 9.90,
    description: "Good cheesecake, maybe even the best!",
    availability: true
},
{
    name: "Apple Pie",
    img: "../../assets/Food/05_apple_pie.png",
    price: 20,
    description: "Worlds best apple pie, they say never available!",
    availability: false
},{
    name: "Bread",
    img: "../../assets/Food/07_bread.png",
    price: 4.5,
    description: "Very good apetizer!",
    availability: true
},{
    name: "Burger",
    img: "../../assets/Food/15_burger.png",
    price: 11.90,
    description: "Very good burger, cruelty free pixels!",
    availability: true
},{
    name: "Burrito",
    img: "../../assets/Food/18_burrito.png",
    price: 9.90,
    description: "Very tasty, much wow",
    availability: true
},{
    name: "Cookies",
    img: "../../assets/Food/28_cookies.png",
    price: 3.20,
    description: "gBefore you leave, take some cookies",
    availability: true
}];

export interface Idish{
    name: string;
    img: string;
    price: number;
    description: string;
    availability: boolean;
}