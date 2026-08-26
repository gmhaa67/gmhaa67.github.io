// ============================================================
// MADO & MIDO'S SHOP
// LOGIN / SIGN UP SYSTEM
// ============================================================


let currentUser = null;


// ============================================================
// START
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCurrentUser();

        createAuthScreen();

        updateAuthArea();

    }
);


// ============================================================
// LOAD USER
// ============================================================

function loadCurrentUser() {

    try {

        const saved =
            localStorage.getItem(
                "currentUser"
            );


        if (saved) {

            currentUser =
                JSON.parse(saved);

        }

    } catch (error) {

        currentUser = null;

    }

}


// ============================================================
// CREATE LOGIN SCREEN
// ============================================================

function createAuthScreen() {

    if (
        document.getElementById(
            "auth-screen"
        )
    ) {
        checkAuthScreen();
        return;
    }


    const screen =
        document.createElement("div");


    screen.id =
        "auth-screen";


    screen.innerHTML = `

        <div class="auth-box">

            <div class="auth-logo">
                🛍️
            </div>

            <h1>
                Mado & Mido's Shop
            </h1>

            <p class="auth-subtitle">
                Welcome! Please log in or create an account.
            </p>


            <!-- LOGIN -->

            <div id="login-form">

                <h2>
                    Welcome Back
                </h2>


                <input
                    type="text"
                    id="login-username"
                    placeholder="Username"
                >


                <input
                    type="password"
                    id="login-password"
                    placeholder="Password"
                >


                <button
                    onclick="loginUser()"
                >
                    Login
                </button>


                <p
                    id="login-message"
                    class="auth-message"
                ></p>


                <p class="auth-switch">

                    Don't have an account?

                    <button
                        class="text-button"
                        onclick="showSignup()"
                    >
                        Sign Up
                    </button>

                </p>

            </div>


            <!-- SIGN UP -->

            <div
                id="signup-form"
                style="display:none;"
            >

                <h2>
                    Create Account
                </h2>


                <input
                    type="text"
                    id="signup-username"
                    placeholder="Choose a username"
                >


                <input
                    type="email"
                    id="signup-email"
                    placeholder="Email"
                >


                <input
                    type="password"
                    id="signup-password"
                    placeholder="Create a password"
                >


                <input
                    type="password"
                    id="signup-confirm"
                    placeholder="Confirm password"
                >


                <button
                    onclick="signupUser()"
                >
                    Sign Up
                </button>


                <p
                    id="signup-message"
                    class="auth-message"
                ></p>


                <p class="auth-switch">

                    Already have an account?

                    <button
                        class="text-button"
                        onclick="showLogin()"
                    >
                        Sign In
                    </button>

                </p>

            </div>


            <div class="guest-section">

                <div class="guest-line">
                    <span>or</span>
                </div>


                <button
                    class="guest-button"
                    onclick="continueAsGuest()"
                >
                    Continue as Guest
                </button>


                <p>
                    Guests can browse products,
                    but cannot add to cart or checkout.
                </p>

            </div>

        </div>

    `;


    document.body.appendChild(
        screen
    );


    checkAuthScreen();

}


// ============================================================
// SHOW / HIDE LOGIN
// ============================================================

function checkAuthScreen() {

    const screen =
        document.getElementById(
            "auth-screen"
        );


    if (!screen) return;


    if (currentUser) {

        screen.style.display =
            "none";

        return;

    }


    const guestMode =
        localStorage.getItem(
            "guestMode"
        );


    if (guestMode === "true") {

        screen.style.display =
            "none";

    } else {

        screen.style.display =
            "flex";

    }

}


// ============================================================
// OPEN LOGIN SCREEN
// ============================================================

function showAuthScreen() {

    const screen =
        document.getElementById(
            "auth-screen"
        );


    if (!screen) {

        createAuthScreen();

        return;

    }


    screen.style.display =
        "flex";


    showLogin();

}


// ============================================================
// LOGIN FORM
// ============================================================

function showLogin() {

    const login =
        document.getElementById(
            "login-form"
        );


    const signup =
        document.getElementById(
            "signup-form"
        );


    if (login) {

        login.style.display =
            "block";

    }


    if (signup) {

        signup.style.display =
            "none";

    }

}


// ============================================================
// SIGN UP FORM
// ============================================================

function showSignup() {

    const login =
        document.getElementById(
            "login-form"
        );


    const signup =
        document.getElementById(
            "signup-form"
        );


    if (login) {

        login.style.display =
            "none";

    }


    if (signup) {

        signup.style.display =
            "block";

    }

}


// ============================================================
// SIGN UP
// ============================================================

function signupUser() {

    const username =
        document.getElementById(
            "signup-username"
        ).value.trim();


    const email =
        document.getElementById(
            "signup-email"
        ).value.trim();


    const password =
        document.getElementById(
            "signup-password"
        ).value;


    const confirm =
        document.getElementById(
            "signup-confirm"
        ).value;


    const message =
        document.getElementById(
            "signup-message"
        );


    if (
        !username ||
        !email ||
        !password ||
        !confirm
    ) {

        message.style.color =
            "#ff4757";

        message.textContent =
            "Please fill in every field.";

        return;

    }


    if (password.length < 6) {

        message.style.color =
            "#ff4757";

        message.textContent =
            "Password must be at least 6 characters.";

        return;

    }


    if (password !== confirm) {

        message.style.color =
            "#ff4757";

        message.textContent =
            "Passwords do not match.";

        return;

    }


    let accounts = [];


    try {

        accounts =
            JSON.parse(
                localStorage.getItem(
                    "accounts"
                )
            ) || [];

    } catch (error) {

        accounts = [];

    }


    const exists =
        accounts.some(
            function (account) {

                return (
                    account.username.toLowerCase() ===
                    username.toLowerCase()
                );

            }
        );


    if (exists) {

        message.style.color =
            "#ff4757";

        message.textContent =
            "That username already exists.";

        return;

    }


    accounts.push({

        username: username,

        email: email,

        password: password

    });


    localStorage.setItem(
        "accounts",
        JSON.stringify(accounts)
    );


    currentUser = {

        username: username,

        email: email

    };


    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );


    localStorage.removeItem(
        "guestMode"
    );


    message.style.color =
        "#2ecc71";


    message.textContent =
        "Account created!";


    setTimeout(
        function () {

            hideAuthScreen();

            updateAuthArea();

        },
        500
    );

}


// ============================================================
// LOGIN
// ============================================================

function loginUser() {

    const username =
        document.getElementById(
            "login-username"
        ).value.trim();


    const password =
        document.getElementById(
            "login-password"
        ).value;


    const message =
        document.getElementById(
            "login-message"
        );


    if (!username || !password) {

        message.style.color =
            "#ff4757";

        message.textContent =
            "Enter your username and password.";

        return;

    }


    let accounts = [];


    try {

        accounts =
            JSON.parse(
                localStorage.getItem(
                    "accounts"
                )
            ) || [];

    } catch (error) {

        accounts = [];

    }


    const account =
        accounts.find(
            function (user) {

                return (
                    user.username.toLowerCase() ===
                    username.toLowerCase() &&
                    user.password === password
                );

            }
        );


    if (!account) {

        message.style.color =
            "#ff4757";

        message.textContent =
            "Incorrect username or password.";

        return;

    }


    currentUser = {

        username: account.username,

        email: account.email

    };


    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );


    localStorage.removeItem(
        "guestMode"
    );


    message.style.color =
        "#2ecc71";


    message.textContent =
        "Login successful!";


    setTimeout(
        function () {

            hideAuthScreen();

            updateAuthArea();

        },
        500
    );

}


// ============================================================
// GUEST
// ============================================================

function continueAsGuest() {

    currentUser = null;


    localStorage.removeItem(
        "currentUser"
    );


    localStorage.setItem(
        "guestMode",
        "true"
    );


    hideAuthScreen();

    updateAuthArea();

}


// ============================================================
// LOGOUT
// ============================================================

function logoutUser() {

    currentUser = null;


    localStorage.removeItem(
        "currentUser"
    );


    localStorage.removeItem(
        "guestMode"
    );


    updateAuthArea();

    showAuthScreen();

}


// ============================================================
// HIDE
// ============================================================

function hideAuthScreen() {

    const screen =
        document.getElementById(
            "auth-screen"
        );


    if (screen) {

        screen.style.display =
            "none";

    }

}


// ============================================================
// CHECK LOGIN
// ============================================================

function isLoggedIn() {

    return currentUser !== null;

}


// ============================================================
// CART PROTECTION
// ============================================================

function requireLoginForCart() {

    if (isLoggedIn()) {

        return true;

    }


    alert(
        "🔐 You need to log in or create an account before adding products to your cart."
    );


    showAuthScreen();


    return false;

}


// ============================================================
// CHECKOUT PROTECTION
// ============================================================

function requireLoginForCheckout() {

    if (isLoggedIn()) {

        return true;

    }


    alert(
        "🔐 You need to log in before checking out."
    );


    showAuthScreen();


    return false;

}


// ============================================================
// HEADER AUTH AREA
// ============================================================

function updateAuthArea() {

    const area =
        document.getElementById(
            "auth-area"
        );


    if (!area) return;


    if (currentUser) {

        area.innerHTML = `

            <span class="welcome-user">
                👋 ${currentUser.username}
            </span>

            <button
                class="logout-btn"
                onclick="logoutUser()"
            >
                Logout
            </button>

        `;

    } else {

        area.innerHTML = `

            <button
                class="login-header-btn"
                onclick="showAuthScreen()"
            >
                Login / Sign Up
            </button>

        `;

    }

}