let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = [
    {
        name: "Apple iPhone 13 Pro Max",
        description:
            "The ultimate iPhone for power users, with the best camera system, longest battery life, and largest display yet.",
        image: "https://www.reliancedigital.in/medias/Apple-MLL63HN-A-Smart-Phones-491997745-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjIyOTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2gyNC85Nzc2MDQ1MzI2MzY2LmpwZ3xkYzQwYTgyMTJlOWVjM2U0OGZiMGE4ZmMyMTBhYWQ0YmFkNGYyMjI3ZTc4NGIxNmU1Mjc4Yzk5MDZjZjgwY2Mz",
        price: 149999.0,
        category: "Electronics",
        brand: "Apple",
    },
    {
        name: "Samsung Galaxy S21 Ultra",
        description:
            "The flagship smartphone from Samsung, with a powerful processor, stunning camera, and 5G capabilities.",
        image: "https://freeshopdirecto.com/venezuela/127-large_default/galaxy-s21-ultra-5g.jpg",
        price: 111199.0,
        category: "Electronics",
        brand: "Samsung",
    },
    {
        name: "Bose QuietComfort 35 II Wireless Headphones",
        description:
            "The best noise-cancelling headphones in the market, with premium sound quality and a comfortable fit.",
        image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.PNG/jcr:content/renditions/cq5dam.web.1280.1280.png",
        price: 1999.0,
        category: "Electronics",
        brand: "Bose",
    },
    {
        name: "Fitbit Charge 5",
        description:
            "The latest fitness tracker from Fitbit, with advanced health monitoring features and a sleek design.",
        image: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/charge-5/device-360/black/prod0.png",
        price: 179.95,
        category: "Fitness",
        brand: "Fitbit",
    },
    {
        name: "Nike Air Zoom Pegasus 38",
        description:
            "The iconic running shoe from Nike, with responsive cushioning and a breathable mesh upper.",
        image: "https://cdn.shopify.com/s/files/1/0614/3809/9651/products/194955811337_3_600x.jpg?v=1655987147",
        price: 119.99,
        category: "Sports",
        brand: "Nike",
    },
    {
        name: "Samsung Galaxy Z Fold 3",
        description:
            "A foldable smartphone that folds like a book and can be used as a tablet. Comes with a high-quality camera and 5G support.",
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-99814/Samsung-Z-Fold3-5G-featured-image-packshot-review.jpg",
        price: 149999,
        category: "Electronics",
        brand: "Samsung",
    },
    {
        name: "Sony WH-1000XM4",
        description:
            "Wireless noise-cancelling headphones with an exceptional sound quality, a long battery life, and a comfortable fit.",
        image: "https://dam.which.co.uk/SR17275-0607-00-front-615x461.jpg",
        price: 24990,
        category: "Electronics",
        brand: "Sony",
    },
    {
        name: "Lululemon Align Pant",
        description:
            "Comfortable, high-waisted leggings made with buttery soft fabric that feels like a second skin. Ideal for yoga, Pilates, and other low-impact workouts.",
        image: "https://people.com/thmb/iPEHe1VBRsI4GyGwLEtLRDr9GqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/lululemon-align-high-rise-pant-pockets-black-8d761f203252476fb184bfe7e4c701d7.jpg",
        price: 8000,
        category: "Clothing",
        brand: "Lululemon",
    },
    {
        name: "Tumi Alpha 3 Garment Bag",
        description:
            "A stylish and durable garment bag with a versatile design that allows you to pack your suits, dresses, and other formalwear with ease. Comes with multiple compartments and pockets for added convenience.",
        image: "https://assets.ajio.com/medias/sys_master/root/h93/hc9/16326000345118/-473Wx593H-410161931-black-MODEL2.jpg",
        price: 65000,
        category: "Luggage",
        brand: "Tumi",
    },
];

const url = "https://fakestoreapi.com/products";
let logName = JSON.parse(localStorage.getItem("logName"));
global = [];
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        global = data;
        console.log(global);
        display(global);
    })
    .catch((err) => {
        console.error(err);
    });

container1 = document.querySelector(".container1");
function display(data) {
    container1.innerHTML = null;
    for (let i = 0; i < data.length; i++) {
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
            if (!("logName" in localStorage)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You have to login before adding Items to cart!",
                });
                return;
            } else {
                cart.push({ quantity: 1, ...data[i] });
                Swal.fire(
                    "Yay !!!",
                    `${data[i].title}` + " was added to cart!",
                    "success"
                );
                localStorage.setItem("cart", JSON.stringify(cart));
            }
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

const carousel = document.querySelector(".carousel");
products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <p class="description">${product.description}</p>
        <div class="buttons">
            <button class="add-to-cart">Add to cart</button>
            <button class="view-details">View details</button>
        </div>
    `;
    carousel.appendChild(productDiv);
});

// initialize carousel with infinite loop and automatic transition
const productsLength = products.length;
const productWidth = document.querySelector(".product").offsetWidth;
const carouselWidth = productWidth * productsLength;
const carouselWrapper = document.createElement("div");
carouselWrapper.classList.add("carousel-wrapper");
carouselWrapper.style.width = carouselWidth + "px";
carouselWrapper.innerHTML = carousel.innerHTML;
carousel.innerHTML = "";
carousel.append(carouselWrapper);

let currentPosition = 0;

setInterval(() => {
    currentPosition -= productWidth;
    if (currentPosition < -carouselWidth + productWidth) {
        currentPosition = 0;
    }
    carouselWrapper.style.transform = `translateX(${currentPosition}px)`;
}, 5000);

const addToCartButton = document.querySelectorAll(".add-to-cart");
const viewDetailsButton = document.querySelectorAll(".view-details");

for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", () => {
        if (!("logName" in localStorage)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have to login before adding Items to cart!",
            });
            return;
        }
        cart.push({ quantity: 1, ...products[i] });
        Swal.fire(
            "Yay !!!",
            `${products[i].name}` + " was added to cart!",
            "success"
        );
        localStorage.setItem("cart", JSON.stringify(cart));
    });
    viewDetailsButton[i].addEventListener("click", () => {
        localStorage.setItem("details", JSON.stringify(products[i]));
        location.href = "./product.html";
    });
}

if (localStorage.getItem("logName") != null) {
    let profile = document.getElementById("profile");
    let logout = document.getElementById("logout");
    profile.innerText = logName.username;
    logout.innerText = "Logout";
    logout.addEventListener("click", () => {
        localStorage.removeItem("logName");
        localStorage.removeItem("cart");
        location.reload();
    });
}

let filter = document.getElementById("filter");
filter.addEventListener("change", () => {
    if (filter.value == "") {
        display(global);
    } else {
        let filtered = global.filter((el) => el.category == filter.value);
        console.log(filtered);
        display(filtered);
    }
});

let searchbtn = document.getElementById("searchbtn");
let searchinput = document.getElementById("search");
searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let searchParams = searchinput.value;
    let searched = global.filter((element) => {
        if (element.title.toUpperCase().includes(searchParams.toUpperCase())) {
            return true;
        } else {
            return false;
        }
    });
    display(searched);
});
