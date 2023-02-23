// Retrieve data from local storage
const productDetails = JSON.parse(localStorage.getItem("details"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display product details on the page
document.getElementById("product-image").src = productDetails.image;
document.getElementById("product-title").textContent = productDetails.title;
document.getElementById(
    "product-price"
).textContent = `₹${productDetails.price}`;
document.getElementById("product-description").textContent +=
    productDetails.description;
document.getElementById("product-category").textContent =
    productDetails.category;
document.getElementById(
    "product-rating"
).textContent = `Rating: ${productDetails.rating.rate} (${productDetails.rating.count} reviews)`;

let btn = document.getElementById("add-to-cart");
btn.addEventListener("click", () => {
    cart.push(productDetails);
    Swal.fire(
        "Yay !!!",
        `${productDetails.title}` + " was added to cart!",
        "success"
    );
    localStorage.setItem("cart", JSON.stringify(cart));
});
