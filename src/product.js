// Retrieve data from local storage
const productDetails = JSON.parse(localStorage.getItem("details"));
let logName = JSON.parse(localStorage.getItem("logName"));
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

let btn = document.getElementById("add-to-cart");
btn.addEventListener("click", () => {
    if (!("logName" in localStorage)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have to login before adding Items to cart!",
        });
        return;
    } else {
        cart.push({ quantity: 1, ...productDetails });
        Swal.fire(
            "Yay !!!",
            `${productDetails.title}` + " was added to cart!",
            "success"
        );
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});

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
