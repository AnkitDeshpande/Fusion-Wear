const users = JSON.parse(localStorage.getItem("users")) || [];

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document
        .querySelector("#linkCreateAccount")
        .addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.classList.add("form--hidden");
            createAccountForm.classList.remove("form--hidden");
        });

    // Show the login form when the link is clicked
    document.querySelector("#linkLogin").addEventListener("click", (e) => {
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    createAccountForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.querySelector("#signupUsername").value.trim();
        const email = document.querySelector("#signupEmail").value.trim();
        const password = document.querySelector("#signupPassword").value.trim();
        const confirmPassword = document
            .querySelector("#signupConfirmPassword")
            .value.trim();

        const userExists = users.some((user) => user.username === username);
        if (userExists) {
            alert("Username is already taken. Please choose another one.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        createAccountForm.reset();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const usernameOrEmail = document
            .querySelector("#loginUsername")
            .value.trim();
        const password = document.querySelector("#loginPassword").value.trim();

        const user = users.find(
            (user) =>
                user.username === usernameOrEmail ||
                user.email === usernameOrEmail
        );

        if (user && user.password == password) {
            localStorage.setItem(
                "logName",
                JSON.stringify({ logged: true, ...user })
            );
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: "success",
                title: "Signed in successfully",
            });
            setInterval(() => {
                location.href = "./index.html";
            }, 3000);
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });
});
