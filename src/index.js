let products = [
    {
        name: "Apple iPhone 13 Pro Max",
        description:
            "The ultimate iPhone for power users, with the best camera system, longest battery life, and largest display yet.",
        image: "https://www.reliancedigital.in/medias/Apple-MLL63HN-A-Smart-Phones-491997745-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjIyOTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2gyNC85Nzc2MDQ1MzI2MzY2LmpwZ3xkYzQwYTgyMTJlOWVjM2U0OGZiMGE4ZmMyMTBhYWQ0YmFkNGYyMjI3ZTc4NGIxNmU1Mjc4Yzk5MDZjZjgwY2Mz",
        price: `₹${149999.0}`,
        category: "Electronics",
        brand: "Apple",
    },
    {
        name: "Samsung Galaxy S21 Ultra",
        description:
            "The flagship smartphone from Samsung, with a powerful processor, stunning camera, and 5G capabilities.",
        image: "https://freeshopdirecto.com/venezuela/127-large_default/galaxy-s21-ultra-5g.jpg",
        price: `₹${111199.0}`,
        category: "Electronics",
        brand: "Samsung",
    },
    {
        name: "Bose QuietComfort 35 II Wireless Headphones",
        description:
            "The best noise-cancelling headphones in the market, with premium sound quality and a comfortable fit.",
        image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.PNG/jcr:content/renditions/cq5dam.web.1280.1280.png",
        price: `₹${1999.0}`,
        category: "Electronics",
        brand: "Bose",
    },
    {
        name: "Fitbit Charge 5",
        description:
            "The latest fitness tracker from Fitbit, with advanced health monitoring features and a sleek design.",
        image: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/charge-5/device-360/black/prod0.png",
        price: `₹${179.95}`,
        category: "Fitness",
        brand: "Fitbit",
    },
    {
        name: "Nike Air Zoom Pegasus 38",
        description:
            "The iconic running shoe from Nike, with responsive cushioning and a breathable mesh upper.",
        image: "https://cdn.shopify.com/s/files/1/0614/3809/9651/products/194955811337_3_600x.jpg?v=1655987147",
        price: `₹${119.99}`,
        category: "Sports",
        brand: "Nike",
    },
];

let carousel = document.querySelector(".carousel");
let slider = [];
let index = 0;
const parallax = () => {
    let slide = document.createElement("div");
    let img = document.createElement("img");
    let content = document.createElement("content");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let price = document.createElement("p");
    let category = document.createElement("p");
    let brand = document.createElement("p");

    img.append(document.createTextNode(""));
    h1.append(document.createTextNode(products[index].name));
    p.append(document.createTextNode(products[index].description));
    price.append(document.createTextNode(products[index].price));
    category.append(document.createTextNode(products[index].category));
    brand.append(document.createTextNode(products[index].brand));

    content.append(h1, p, category, brand, price);
    slide.append(content, img);
    carousel.append(slide);

    img.src = products[index].image;
    index = (index + 1) % products.length;

    //setting element
    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "product-title";
    p.className = "product.desc";
    price.className = "product-price";
    category.className = "product-category";
    brand.className = "product-brand";

    slider.push(slide);
};

setInterval(() => {
    parallax();
}, 3000);
