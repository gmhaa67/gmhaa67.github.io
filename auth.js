// ============================================================
// MADO & MIDO'S SHOP
// LOGIN / SIGN UP SYSTEM
// ============================================================


let currentUser = null;

const SUPABASE_URL = "https://obmqizlwaoknqcbjpkex.supabase.co";
const SUPABASE_KEY = "sb_publishable_J9ssrbXkA2Jp2I9NlvPzsQ_wjkfFhv4";


// ============================================================
// START
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCurrentUser();

        applyAdminSiteSettings();

        loadSharedAdminSettings();

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


    const existingAccountIndex =
        accounts.findIndex(
            function (account) {

                return (
                    account.username.toLowerCase() ===
                    username.toLowerCase()
                );

            }
        );


    const account = {

        username: username,

        email: email,

        password: password

    };


    if (existingAccountIndex >= 0) {

        accounts[existingAccountIndex] = account;

    } else {

        accounts.push(account);

    }


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

    if (typeof resetAdminChanges === "function") {
        resetAdminChanges();
    }


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

        const adminButton = isAdminAccount()
            ? `
                <button
                    class="admin-btn"
                    onclick="openAdminPanel()"
                >
                    Admin Panel
                </button>
            `
            : "";

        area.innerHTML = `

            <span class="welcome-user">
                👋 ${currentUser.username}
            </span>

            ${adminButton}

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


// ============================================================
// TEMPORARY ADMIN PANEL
// ============================================================

function getAdminSettings() {

    try {
        return JSON.parse(localStorage.getItem("adminSettings")) || {};
    } catch (error) {
        return {};
    }
}


function saveAdminSettings(settings) {
    localStorage.setItem("adminSettings", JSON.stringify(settings));
}


async function loadSharedAdminSettings() {

    try {
        const response = await fetch(
            SUPABASE_URL + "/rest/v1/site_settings?id=eq.1&select=settings",
            {
                headers: {
                    apikey: SUPABASE_KEY,
                    Authorization: "Bearer " + SUPABASE_KEY
                }
            }
        );

        if (!response.ok) return;

        const rows = await response.json();
        const sharedSettings = rows[0] && rows[0].settings;

        if (sharedSettings && typeof sharedSettings === "object") {
            saveAdminSettings(sharedSettings);
            applyAdminSiteSettings();
            updateAuthArea();
        }
    } catch (error) {
        console.warn("Shared settings are unavailable.", error);
    }
}


async function saveSharedAdminSettings(settings) {

    try {
        const response = await fetch(SUPABASE_URL + "/rest/v1/site_settings", {
            method: "POST",
            headers: {
                apikey: SUPABASE_KEY,
                Authorization: "Bearer " + SUPABASE_KEY,
                "Content-Type": "application/json",
                Prefer: "resolution=merge-duplicates,return=minimal"
            },
            body: JSON.stringify({
                id: 1,
                settings: settings,
                updated_at: new Date().toISOString()
            })
        });

        if (!response.ok) {
            throw new Error("Supabase returned " + response.status);
        }

        return true;
    } catch (error) {
        console.warn("Shared settings could not be saved.", error);
        return false;
    }
}


function applyAdminSiteSettings() {

    const settings = getAdminSettings();

    if (settings.theme === "dark") {
        document.body.classList.add("dark-theme");
    }

    if (settings.accentColor) {
        document.body.style.setProperty("--accent-color", settings.accentColor);
    }

    if (settings.pageColor) {
        document.body.style.setProperty("--bg-color", settings.pageColor);
    }

    if (settings.textColor) {
        document.body.style.setProperty("--text-color", settings.textColor);
    }

    if (settings.cardColor) {
        document.body.style.setProperty("--card-bg", settings.cardColor);
    }

    Object.keys(settings.text || {}).forEach(function (selector) {
        setAdminText(selector, settings.text[selector]);
    });

    if (settings.nav) {
        document.querySelectorAll("header nav a").forEach(function (link, index) {
            const item = settings.nav[index];
            if (!item) return;
            link.textContent = item.label || link.textContent;
            if (item.href) link.href = item.href;
        });
    }

    if (typeof products !== "undefined" && Array.isArray(settings.products)) {
        settings.products.forEach(function (savedProduct, index) {
            const product = products[index];
            if (!product || !savedProduct) return;
            product.title = savedProduct.title || product.title;
            product.price = Number(savedProduct.price) >= 0 ? Number(savedProduct.price) : product.price;
            product.category = savedProduct.category || product.category;
            product.img = savedProduct.img || product.img;
            if (Array.isArray(savedProduct.fallbacks) && savedProduct.fallbacks.length) {
                product.fallbacks = savedProduct.fallbacks;
            }
        });
    }
}

function isAdminAccount() {

    if (!currentUser) {
        return false;
    }

    try {

        const accounts =
            JSON.parse(localStorage.getItem("accounts")) || [];

        return accounts.some(function (account) {
            const username = account.username.toLowerCase();

            return username === currentUser.username.toLowerCase() &&
                ((username === "mido-t7" &&
                    account.password === "midoismybestfriend") ||
                    (username === "mado67alya" &&
                        account.password === "ilovealyashemywife123"));
        });

    } catch (error) {
        return false;
    }
}


function openAdminPanel() {

    if (!isAdminAccount()) return;

    const panelPassword =
        prompt("Type panel password");

    if (panelPassword !== "6767616193") {
        alert("Incorrect panel password.");
        return;
    }

    let panel = document.getElementById("admin-panel");

    if (!panel) {

        panel = document.createElement("div");
        panel.id = "admin-panel";
        document.body.appendChild(panel);

    }

    renderAdminPanel(panel);
}


function renderAdminPanel(panel) {

    const logoText = getAdminText(".logo", "Mado & Mido's Shop");
    const heroTitle = getAdminText(".hero h1", "");
    const heroDescription = getAdminText(".hero p", "");
    const heroButton = getAdminText(".hero .cta-btn", "");

    const productRows = typeof products === "undefined"
        ? "<p>Product controls are unavailable on this page.</p>"
        : products.map(function (product, index) {
            return `
                <label class="admin-product-row">
                    <img
                        class="admin-product-preview"
                        src="${escapeAdminValue(product.img)}"
                        alt=""
                        data-product-preview="${index}"
                    >
                    <input
                        type="text"
                        value="${escapeAdminValue(product.title)}"
                        data-product-title-index="${index}"
                    >
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value="${product.price}"
                        data-product-index="${index}"
                    >
                    <input
                        type="text"
                        value="${escapeAdminValue(product.category)}"
                        data-product-category-index="${index}"
                        placeholder="Category"
                    >
                    <input
                        type="text"
                        value="${escapeAdminValue(product.img)}"
                        data-product-image-index="${index}"
                        placeholder="Photo file or URL"
                        oninput="previewAdminProductImage(this)"
                    >
                    <input
                        type="text"
                        value="${escapeAdminValue((product.fallbacks || []).join(", "))}"
                        data-product-fallback-index="${index}"
                        placeholder="Fallback photos, comma separated"
                    >
                </label>
            `;
        }).join("");

    panel.innerHTML = `
        <div class="admin-panel-card">
            <button class="admin-close-btn" onclick="closeAdminPanel()">&times;</button>
            <h2>Welcome Admin</h2>
            <p class="admin-note">Changes are saved in this browser and apply across the shop.</p>

            <h3>Site names and text</h3>
            <div class="admin-text-controls">
                <label>
                    Shop name
                    <input type="text" id="admin-logo-text" value="${escapeAdminValue(logoText)}">
                </label>
                <label>
                    Hero title
                    <input type="text" id="admin-hero-title" value="${escapeAdminValue(heroTitle)}">
                </label>
                <label>
                    Hero description
                    <textarea id="admin-hero-description">${escapeAdminText(heroDescription)}</textarea>
                </label>
                <label>
                    Hero button
                    <input type="text" id="admin-hero-button" value="${escapeAdminValue(heroButton)}">
                </label>
            </div>

            <h3>Navigation</h3>
            <div class="admin-text-controls admin-nav-controls">
                ${Array.from(document.querySelectorAll("header nav a")).map(function (link, index) {
                    const settings = getAdminSettings().nav || [];
                    const item = settings[index] || {};
                    return `
                        <label>
                            Link ${index + 1} label
                            <input type="text" value="${escapeAdminValue(item.label || link.textContent.trim())}" data-nav-label-index="${index}">
                        </label>
                        <label>
                            Link ${index + 1} page
                            <input type="text" value="${escapeAdminValue(item.href || link.getAttribute("href") || "")}" data-nav-href-index="${index}">
                        </label>
                    `;
                }).join("")}
            </div>

            <h3>Appearance</h3>
            <div class="admin-color-controls visible admin-appearance-controls">
                <label>Theme
                    <select id="admin-theme">
                        <option value="light" ${getAdminSettings().theme !== "dark" ? "selected" : ""}>Light</option>
                        <option value="dark" ${getAdminSettings().theme === "dark" ? "selected" : ""}>Dark</option>
                    </select>
                </label>
                <label>Accent <input type="color" id="admin-accent-color" value="${getAdminSettings().accentColor || "#6c5ce7"}" oninput="previewAdminColors()"></label>
                <label>Page <input type="color" id="admin-page-color" value="${getAdminSettings().pageColor || "#f8f9fd"}" oninput="previewAdminColors()"></label>
                <label>Text <input type="color" id="admin-text-color" value="${getAdminSettings().textColor || "#1f2937"}" oninput="previewAdminColors()"></label>
                <label>Cards <input type="color" id="admin-card-color" value="${getAdminSettings().cardColor || "#ffffff"}" oninput="previewAdminColors()"></label>
            </div>

            <h3>Products, prices and photos</h3>
            <div class="admin-product-list">${productRows}</div>

            <button
                class="admin-change-colors-btn"
                onclick="toggleAdminColorControls()"
            >
                Change Colors
            </button>

            <h3>Package controls</h3>
            <div class="admin-tracking-controls">
                <input type="text" id="admin-tracking-code" placeholder="MADO-123456">
                <button onclick="createAdminTrackingCode()">Create Test Code</button>
                <button onclick="setAdminTrackingStage(0)">Getting Ready</button>
                <button onclick="setAdminTrackingStage(1)">Flying</button>
                <button onclick="setAdminTrackingStage(2)">Order Here</button>
                <button class="admin-reset-btn" onclick="resetAdminTracking()">Reset Package</button>
            </div>

            <div class="admin-actions">
                <button onclick="applyAdminChanges()">Apply Changes</button>
                <button class="admin-reset-btn" onclick="resetAdminChanges()">Reset</button>
            </div>
        </div>
    `;

    panel.style.display = "flex";
}


function escapeAdminValue(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}


function escapeAdminText(value) {

    return escapeAdminValue(value).replace(/'/g, "&#39;");
}


function getAdminText(selector, fallback) {

    const element = document.querySelector(selector);

    return element ? element.textContent.trim() : fallback;
}


function setAdminText(selector, value) {

    document.querySelectorAll(selector).forEach(function (element) {

        if (element.dataset.adminOriginalText === undefined) {
            element.dataset.adminOriginalText = element.textContent;
        }

        element.textContent = value;
    });
}


function applyAdminChanges() {

    const settings = getAdminSettings();
    settings.text = {
        ".logo": document.getElementById("admin-logo-text")?.value.trim() || "Mado & Mido's Shop",
        ".hero h1": document.getElementById("admin-hero-title")?.value.trim() || "",
        ".hero p": document.getElementById("admin-hero-description")?.value.trim() || "",
        ".hero .cta-btn": document.getElementById("admin-hero-button")?.value.trim() || ""
    };
    settings.nav = Array.from(document.querySelectorAll("[data-nav-label-index]")).map(function (input, index) {
        const hrefInput = document.querySelector(`[data-nav-href-index="${index}"]`);
        return { label: input.value.trim(), href: hrefInput ? hrefInput.value.trim() : "" };
    });
    settings.theme = document.getElementById("admin-theme")?.value || "light";
    settings.accentColor = document.getElementById("admin-accent-color")?.value;
    settings.pageColor = document.getElementById("admin-page-color")?.value;
    settings.textColor = document.getElementById("admin-text-color")?.value;
    settings.cardColor = document.getElementById("admin-card-color")?.value;
    settings.products = [];

    if (typeof products !== "undefined") {

        document.querySelectorAll("[data-product-title-index]").forEach(function (input) {

            const product = products[Number(input.dataset.productTitleIndex)];

            if (product && product.originalTitle === undefined) {
                product.originalTitle = product.title;
            }

            if (product) {
                product.title = input.value.trim() || product.title;
            }
        });

        document.querySelectorAll("[data-product-index]").forEach(function (input) {

            const product = products[Number(input.dataset.productIndex)];

            if (product && input.value !== "") {
                if (product.originalPrice === undefined) {
                    product.originalPrice = product.price;
                }

                product.price = Number(input.value);
            }
        });

        document.querySelectorAll("[data-product-category-index]").forEach(function (input) {
            const product = products[Number(input.dataset.productCategoryIndex)];
            if (product && input.value.trim()) product.category = input.value.trim();
        });

        document.querySelectorAll("[data-product-image-index]").forEach(function (input) {
            const product = products[Number(input.dataset.productImageIndex)];
            if (product && input.value.trim()) product.img = input.value.trim();
        });

        document.querySelectorAll("[data-product-fallback-index]").forEach(function (input) {
            const product = products[Number(input.dataset.productFallbackIndex)];
            const fallbacks = input.value.split(",").map(function (item) {
                return item.trim();
            }).filter(Boolean);
            if (product && fallbacks.length) product.fallbacks = fallbacks;
        });

        settings.products = products.map(function (product) {
            return {
                title: product.title,
                price: product.price,
                category: product.category,
                img: product.img,
                fallbacks: product.fallbacks || []
            };
        });

        if (typeof renderProducts === "function") {
            renderProducts(products);
        }
    }

    const logoText = document.getElementById("admin-logo-text");
    const heroTitle = document.getElementById("admin-hero-title");
    const heroDescription = document.getElementById("admin-hero-description");
    const heroButton = document.getElementById("admin-hero-button");

    if (logoText) setAdminText(".logo", logoText.value.trim());
    if (heroTitle) setAdminText(".hero h1", heroTitle.value.trim());
    if (heroDescription) setAdminText(".hero p", heroDescription.value.trim());
    if (heroButton) setAdminText(".hero .cta-btn", heroButton.value.trim());

    document.querySelectorAll("[data-nav-label-index]").forEach(function (input, index) {
        const link = document.querySelectorAll("header nav a")[index];
        const hrefInput = document.querySelector(`[data-nav-href-index="${index}"]`);
        if (link) {
            link.textContent = input.value.trim() || link.textContent;
            if (hrefInput && hrefInput.value.trim()) link.href = hrefInput.value.trim();
        }
    });

    const accentColor = document.getElementById("admin-accent-color");
    const pageColor = document.getElementById("admin-page-color");

    if (accentColor) {
        document.body.style.setProperty("--accent-color", accentColor.value);
    }

    if (pageColor) {
        document.body.style.setProperty("--bg-color", pageColor.value);
    }

    if (settings.textColor) {
        document.body.style.setProperty("--text-color", settings.textColor);
    }

    if (settings.cardColor) {
        document.body.style.setProperty("--card-bg", settings.cardColor);
    }

    if (settings.theme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }

    saveAdminSettings(settings);
    saveSharedAdminSettings(settings).then(function (saved) {
        alert(saved
            ? "Admin changes saved for everyone."
            : "Saved on this device, but the shared database is not ready yet.");
    });
}


function resetAdminChanges() {

    localStorage.removeItem("adminSettings");
    window.location.reload();
    return;

    document.body.style.removeProperty("--accent-color");
    document.body.style.removeProperty("--bg-color");

    if (typeof products !== "undefined") {

        products.forEach(function (product) {

            if (product.originalTitle !== undefined) {
                product.title = product.originalTitle;
                delete product.originalTitle;
            }

            if (product.originalPrice !== undefined) {
                product.price = product.originalPrice;
                delete product.originalPrice;
            }
        });

        if (typeof renderProducts === "function") {
            renderProducts(products);
        }
    }

    document.querySelectorAll("[data-admin-original-text]").forEach(function (element) {
        element.textContent = element.dataset.adminOriginalText;
        delete element.dataset.adminOriginalText;
    });

    closeAdminPanel();
}


function closeAdminPanel() {

    const panel = document.getElementById("admin-panel");

    if (panel) {
        panel.remove();
    }
}


function createAdminTrackingCode() {

    const input = document.getElementById("admin-tracking-code");
    const code = input && input.value.trim().toUpperCase()
        ? input.value.trim().toUpperCase()
        : "MADO-" + Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem("lastOrderNumber", code);
    localStorage.setItem("orderStartedAt", String(Date.now()));
    localStorage.setItem("orderStage", "0");
    localStorage.setItem("orderStatus", "Getting order ready");

    alert("Test tracking code created: " + code);
}


function setAdminTrackingStage(stage) {

    if (!localStorage.getItem("lastOrderNumber")) {
        createAdminTrackingCode();
    }

    localStorage.setItem("orderStage", String(stage));
    localStorage.setItem(
        "orderStatus",
        ["Getting order ready", "Flying to your country", "Order here"][stage]
    );
    localStorage.setItem("orderStartedAt", String(Date.now()));

    alert("Package stage updated.");
}


function resetAdminTracking() {

    localStorage.removeItem("lastOrderNumber");
    localStorage.removeItem("orderStartedAt");
    localStorage.removeItem("orderStage");
    localStorage.removeItem("orderStatus");

    alert("Package tracking was reset.");
}


function toggleAdminColorControls() {

    const controls = document.getElementById("admin-color-controls");

    if (controls) {
        controls.classList.toggle("visible");
    }
}


function previewAdminColors() {

    const accentColor = document.getElementById("admin-accent-color");
    const pageColor = document.getElementById("admin-page-color");

    if (accentColor) {
        document.body.style.setProperty("--accent-color", accentColor.value);
    }

    if (pageColor) {
        document.body.style.setProperty("--bg-color", pageColor.value);
    }

    const textColor = document.getElementById("admin-text-color");
    const cardColor = document.getElementById("admin-card-color");

    if (textColor) {
        document.body.style.setProperty("--text-color", textColor.value);
    }

    if (cardColor) {
        document.body.style.setProperty("--card-bg", cardColor.value);
    }
}


function previewAdminProductImage(input) {

    const index = Number(input.dataset.productImageIndex);
    const preview = document.querySelector(`[data-product-preview="${index}"]`);

    if (preview && input.value.trim()) {
        preview.src = input.value.trim();
    }
}