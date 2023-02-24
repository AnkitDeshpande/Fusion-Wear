let cart = JSON.parse(localStorage.getItem("cart")) || [];
let logName = JSON.parse(localStorage.getItem("logName"));
let cont = document.querySelector(".cart-container");

displayproduct(cart);
function displayproduct() {
    cont.innerHTML = "";
    cart.forEach((element) => {
        let cardEl = document.createElement("div");
        let imgEl = document.createElement("img");
        let brandEl = document.createElement("h3");
        let categoryEl = document.createElement("p");
        let detailEl = document.createElement("p");
        let quantityEl = document.createElement("span");
        let priceEl = document.createElement("h4");
        let increment = document.createElement("button");
        let decrement = document.createElement("button");
        let remove = document.createElement("button");
        remove.setAttribute("id", "btn");

        increment.className = "inc";
        decrement.className = "dec";
        remove.className = "rm";

        imgEl.src = element.image;
        brandEl.textContent = element.brand;
        priceEl.textContent = `₹${element.price}`;
        detailEl.textContent = element.details;
        categoryEl.textContent = element.category;
        quantityEl.textContent = element.quantity;
        increment.textContent = "+";
        decrement.textContent = "-";
        remove.textContent = "Remove";

        remove.addEventListener("click", () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger",
                },
                buttonsStyling: false,
            });

            swalWithBootstrapButtons
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, Remove it!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        cart = cart.filter((ele) => {
                            return ele.id !== element.id;
                        });
                        swalWithBootstrapButtons.fire(
                            "Removed!",
                            "Your product has been removed.",
                            "success"
                        );
                        localStorage.setItem("cart", JSON.stringify(cart));
                        displayproduct();
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            "Cancelled",
                            "Your product was not removed:)",
                            "error"
                        );
                    }
                });
        });
        increment.addEventListener("click", () => {
            element = element.quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            displayproduct();
        });
        decrement.addEventListener("click", () => {
            if (element.quantity > 1) {
                element = element.quantity--;
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            displayproduct();
        });

        cardEl.append(
            imgEl,
            brandEl,
            priceEl,
            detailEl,
            decrement,
            quantityEl,
            increment,
            remove
        );
        cont.append(cardEl);
    });
    displayBill();
    calculateTotal();
}
displayproduct();

function calculateTotal() {
    let totalCost = 0;
    let totalItems = 0;
    for (let i = 0; i < cart.length; i++) {
        totalCost += Math.floor(cart[i].price * cart[i].quantity);
        totalItems += cart[i].quantity;
    }
    return { totalCost, totalItems };
}

function displayBill() {
    const { totalCost, totalItems } = calculateTotal();
    const totalCostEl = document.getElementById("total-cost");
    const totalItemsEl = document.getElementById("total-items");
    totalCostEl.textContent = "₹" + Number(totalCost);
    totalItemsEl.textContent = totalItems;
}

const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
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
