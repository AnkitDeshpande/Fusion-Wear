let purchase = document.querySelector("form");
purchase.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Thank you!! Delivery is on the way!! ",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://giphy.com/embed/TIeTxUeyPeFI771jTF")
    left top
    no-repeat
  `,
    });
});
