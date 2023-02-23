let cart = JSON.parse(localStorage.getItem("cart")) || [];
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

const url = "https://fakestoreapi.com/products";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        display(data);
        display2(data);
    })
    .catch((err) => {
        console.error(err);
    });
container1 = document.querySelector(".container1");
function display(data) {
    for (let i = 0; i < 6; i++) {
        let prod = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h4");
        let ratings = document.createElement("p");
        let price = document.createElement("p");
        let btn = document.createElement("button");
        let details = document.createElement("button");

        img.setAttribute("src", data[i].image);
        title.innerText = data[i].title;
        ratings.innerText = `Ratings : ${data[i].rating.rate}`;
        price.innerText = `₹${data[i].price}`;
        btn.innerText = "Add to cart";
        btn.addEventListener("click", () => {
            cart.push(data[i]);
            Swal.fire(
                "Yay !!!",
                `${data[i].title}` + " was added to cart!",
                "success"
            );
            localStorage.setItem("cart", JSON.stringify(cart));
        });
        details.innerText = "View details";
        details.addEventListener("click", () => {
            localStorage.setItem("details", JSON.stringify(data[i]));
            location.href = "./product.html";
        });

        prod.append(img, title, ratings, price, btn, details);
        container1.append(prod);
    }
}

container2 = document.querySelector(".container2");
function display2(data) {
    for (let i = 6; i < data.length; i++) {
        let prod = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h4");
        let ratings = document.createElement("p");
        let price = document.createElement("p");
        let btn = document.createElement("button");
        let details = document.createElement("button");

        img.setAttribute("src", data[i].image);
        title.innerText = data[i].title;
        ratings.innerText = `Ratings : ${data[i].rating.rate}`;
        price.innerText = `₹${data[i].price}`;
        btn.innerText = "Add to cart";
        btn.addEventListener("click", () => {
            cart.push(data[i]);
            Swal.fire(
                "Yay !!!",
                `${data[i].title}` + " was added to cart!",
                "success"
            );
            localStorage.setItem("cart", JSON.stringify(cart));
        });
        details.innerText = "View details";
        details.addEventListener("click", () => {
            localStorage.setItem("details", JSON.stringify(data[i]));
            location.href = "./product.html";
        });

        prod.append(img, title, ratings, price, btn, details);
        container2.append(prod);
    }
}
