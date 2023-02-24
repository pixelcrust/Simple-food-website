export let menu_products = [{
    name: "test2",
    img: "../../assets/Food/01_dish.png",
    price: 202,
    description: "bad stuff",
    availability: true
},
{
    name: "test",
    img: "../../assets/Food/01_dish.png",
    price: 20,
    description: "good stuff yum yum",
    availability: false
},{
    name: "test",
    img: "../../assets/Food/01_dish.png",
    price: 20,
    description: "good stuff yum yum",
    availability: true
},{
    name: "test",
    img: "../../assets/Food/01_dish.png",
    price: 20,
    description: "good stuff yum yum",
    availability: true
},{
    name: "test",
    img: "../../assets/Food/01_dish.png",
    price: 20,
    description: "good stuff yum yum",
    availability: true
}];

export interface Idish{
    name: string;
    img: string;
    price: number;
    description: string;
    availability: boolean;
}