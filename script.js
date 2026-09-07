// =====================================================
// MADO & MIDO'S SHOP - PRODUCTS
// =====================================================

const products = [

    // ELECTRONICS
    {
        id: 1,
        title: "The Mado Ultimate Gaming PC",
        price: 1899,
        category: "electronics",
        img: "pc.png.jpg",
        fallbacks: ["pc.png", "pc.png.png", "pc.jpg"]
    },

    {
        id: 2,
        title: "Mido Vision Pro",
        price: 3500,
        category: "electronics",
        img: "visionpro.png.png",
        fallbacks: ["visionpro.png", "visionpro.png.jpg", "visionpro.jpg"]
    },

    {
        id: 3,
        title: "Mado Custom AMOLED Smart Watch",
        price: 210,
        category: "electronics",
        img: "band.png",
        fallbacks: ["band.png.png", "band.png.jpg", "band.jpg"]
    },

    {
        id: 4,
        title: "Mado Gaming Laptop",
        price: 1200,
        category: "electronics",
        img: "laptopgame.png",
        fallbacks: ["laptopgame.png.png", "laptopgame.png.jpg", "laptopgame.jpg"]
    },

    {
        id: 14,
        title: "Mado PS5",
        price: 499,
        category: "electronics",
        img: "ps5.png",
        fallbacks: ["ps5.png.png", "ps5.png.jpg", "ps5.jpg"]
    },

    {
        id: 15,
        title: "Mado PS4",
        price: 399,
        category: "electronics",
        img: "ps4.png",
        fallbacks: ["ps4.png.png", "ps4.png.jpg", "ps4.jpg"]
    },


    // CLOTHES
    {
        id: 5,
        title: "Mido Signature Streetwear Denim",
        price: 89.99,
        category: "clothes",
        img: "denim.png",
        fallbacks: ["denim.png.png", "denim.png.jpg", "denim.jpg"]
    },

    {
        id: 6,
        title: "Mado Oversized Cozy Hoodie",
        price: 65,
        category: "clothes",
        img: "bluehoodie.png.jpg",
        fallbacks: ["bluehoodie.png", "bluehoodie.png.png", "bluehoodie.jpg"]
    },


    // SHOES
    {
        id: 8,
        title: "Mido Air Ultra Street Sneakers",
        price: 115,
        category: "shoes",
        img: "sneakers.png",
        fallbacks: ["sneakers.png.png", "sneakers.png.jpg", "sneakers.jpg"]
    },

    {
        id: 9,
        title: "Mado Retro Premium Suede Boots",
        price: 155,
        category: "shoes",
        img: "boots.png",
        fallbacks: ["boots.png.png", "boots.png.jpg", "boots.jpg"]
    },


    // PLUSH
    {
        id: 11,
        title: "Cursed 12-Inch Pomni Plush",
        price: 9999,
        category: "plush",
        img: "pomni.png",
        fallbacks: ["pomni.png.png", "pomni.png.jpg", "pomni.jpg"]
    },

    {
        id: 12,
        title: "Alya Plush",
        price: 100000,
        category: "plush",
        img: "plush.png",
        fallbacks: ["plush.png.png", "plush.png.jpg", "plush.jpg"]
    },

    {
        id: 13,
        title: "SpongeBob Plush",
        price: 230,
        category: "plush",
        img: "sponge.png",
        fallbacks: ["sponge.png.png", "sponge.png.jpg", "sponge.jpg"]
    },


    // GAMING
{
    id: 16,
    title: "Robux",
    price: 10,
    category: "gift cards",
    img: "robux.png",
    fallbacks: [
        "robux.png",
        "robux.png.png",
        "robux.png.jpg",
        "robux.jpg"
    ]
},
{
    id: 17,
    title: "56 Inch big tv",
    price: 698,
    category: "electronics",
    img: "12inchahhtv.png",
    fallbacks: [
        "12inchahhtv.png",
        "12inchahhtv.png.png",
        "12inchahhtv.png.jpg",
        "12inchahhtv.jpg"
    ]
},
{
    id: 18,
    title: "youtube premium for 12 months/1 year",
    price: 70,
    category: "gift cards",
    img: "pre.png",
    fallbacks: [
        "pre.png",
        "pre.png.png",
        "pre.png.jpg",
        "pre.jpg"
    ]
},
{
    id: 18,
    title: "13,500 vbux fornite giftcard",
    price: 100,
    category: "gift cards",
    img: "fort.png",
    fallbacks: [
        "fort.png",
        "fort.png.png",
        "fort.png.jpg",
        "fort.jpg"
    ]
},
{
    id: 19,
    title: "fancy a5 wagyu steak(uncooked)",
    price: 300,
    category: "food",
    img: "yum.png",
    fallbacks: [
        "yum.png",
        "yum.png.png",
        "yum.png.jpg",
        "yum.jpg"
    ]
},
{
    id: 20,
    title: "Platinum arowana (most expensive fish in the world)",
    price: 400000,
    category: "food",
    img: "f.png",
    fallbacks: [
        "f.png",
        "f.png.png",
        "f.png.jpg",
        "f.jpg"
    ]
},
{
    id: 21,
    title: "nintendo switch lite yellow",
    price: 350,
    category: "electronics",
    img: "n1.png",
    fallbacks: [
        "n1.png",
        "n1.png.png",
        "n1.png.jpg",
        "n1.jpg"
    ]
},
{
    id: 22,
    title: "nintendo switch 1 ",
    price: 1000,
    category: "electronics",
    img: "n2.png",
    fallbacks: [
        "n2.png",
        "n2.png.png",
        "n2.png.jpg",
        "n2.jpg"
    ]
},
{
    id: 23,
    title: "nintendo switch 2 black",
    price: 1500,
    category: "electronics",
    img: "n3.png",
    fallbacks: [
        "n3.png",
        "n3.png.png",
        "n3.png.jpg",
        "n3.jpg"
    ]
},
{
    id: 24,
    title: "minecraft giftcard 1720 minecoins!",
    price: 200,
    category: "gift cards",
    img: "minecraft.png",
    fallbacks: [
        "minecraft.png",
        "minecraft.png.png",
        "minecraft.png.jpg",
        "minecraft.jpg"
    ]
},
{
    id: 25,
    title: "mido maid outfit",
    price: 100000,
    category: "clothes",
    img: "mido.png",
    fallbacks: [
        "mido.png",
        "mido.png.png",
        "mido.png.jpg",
        "mido.jpg"
    ]
},
{
    id: 26,
    title: "mado iphone 17 pro max",
    price: 1500,
    category: "electronics",
    img: "1.png",
    fallbacks: [
        "1.png",
        "1.png.png",
        "1.png.jpg",
        "1.jpg"
    ]
},
{
    id: 27,
    title: "foltyn christmas plush",
    price: 44,
    category: "plush",
    img: "foltyn.png",
    fallbacks: [
        "foltyn.png",
        "foltyn.png.png",
        "foltyn.png.jpg",
        "foltyn.jpg"
    ]
},
{
    id: 28,
    title: "caylus plush!",
    price: 27,
    category: "plush",
    img: "cay.png",
    fallbacks: [
        "cay.png",
        "cay.png.png",
        "cay.png.jpg",
        "cay.jpg"
    ]
},
{
    id: 29,
    title: "cash plush!",
    price: 27,
    category: "plush",
    img: "cah.png",
    fallbacks: [
        "cah.png",
        "cah.png.png",
        "cah.png.jpg",
        "cah.jpg"
    ]
},
{
    id: 30,
    title: "jax plush!",
    price: 10000,
    category: "plush",
    img: "j.png",
    fallbacks: [
        "j.png",
        "j.png.png",
        "j.png.jpg",
        "j.jpg"
    ]
},
{
    id: 31,
    title: "toyota gr86 2026 model red!",
    price: 1000000,
    category: "cars",
    img: "tah.png",
    fallbacks: [
        "tah.png",
        "tah.png.png",
        "tah.png.jpg",
        "tah.jpg"
    ]
},
{
    id: 32,
    title: "lamborigini revulto model 2016",
    price: 1239000,
    category: "cars",
    img: "tap1.png",
    fallbacks: [
        "tap1.png",
        "tap1.png.png",
        "tap1.png.jpg",
        "tap1.jpg"
    ]
},
{
    id: 33,
    title: "meta quest 3 (new pomni gooning game)",
    price: 700,
    category: "electronics",
    img: "met.png",
    fallbacks: [
        "met.png",
        "met.png.png",
        "met.png.jpg",
        "met.jpg",
    ]
},
{
    id: 34,
    title: "2 karart ruby women custom ring",
    price: 2300000,
    category: "custom jewelry",
    img: "ruby1.png",
    fallbacks: [
        "ruby1.png",
        "ruby1.png.png",
        "ruby1.png.jpg",
        "ruby1.jpg"
    ]
},
{
    id: 35,
    title: "2 karart ruby women custom ring",
    price: 9780000,
    category: "custom jewelry",
    img: "ruby2.png",
    fallbacks: [
        "ruby2.png",
        "ruby2.png.png",
        "ruby2.png.jpg",
        "ruby2.jpg"
    ]
},
{
    id: 36,
    title: "24 karart gold ring",
    price: 9780000,
    category: "custom jewelry",
    img: "ruby3.png",
    fallbacks: [
        "ruby3.png",
        "ruby3.png.png",
        "ruby3.png.jpg",
        "ruby3.jpg"
    ]
},
{
    id: 37,
    title: "Shopping Gift Card",
    price: 50,
    category: "gift cards",
    img: "shopping.png",
    fallbacks: [
        "shopping.png",
        "shopping.png.png",
        "shopping.png.jpg",
        "shopping.jpg"
    ]
}
];


// =====================================================
// CART
// =====================================================

let cartList = [];

try {
    const savedCart = localStorage.getItem("cartList");

    if (savedCart) {
        cartList = JSON.parse(savedCart);
    }

    if (!Array.isArray(cartList)) {
        cartList = [];
    }

} catch (error) {
    cartList = [];
}

let selectedShipping = 0;
let discountPercentage = 0;
const appliedCouponCodes = new Set();

const couponDiscounts = {
    MADO100: 0.50,
    MIDO67: 0.50,
    ALYA123: 0.50,
    TANJIROANDTOOTANAGI123: 0.50,
    MADO50: 0.50,
    MIDO50: 0.50,
    WELCOME10: 0.10,
    SHOP10: 0.10
};


// =====================================================
// START
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

    const productsGrid =
        document.getElementById("products-grid");

    if (productsGrid) {
        renderProducts(products);
    }

    if (document.getElementById("cart-items-wrapper")) {
        renderCartItems();
    }

    loadTheme();

});


// =====================================================
// IMAGE LOADER WITH FALLBACK
// =====================================================

function loadProductImage(img, product) {

    let currentFallback =
        parseInt(img.dataset.fallbackIndex || "0");

    if (currentFallback >= product.fallbacks.length) {

        img.onerror = null;

        img.style.background = "#e5e7eb";

        img.alt = product.title;

        return;
    }

    const nextImage =
        product.fallbacks[currentFallback];

    img.dataset.fallbackIndex =
        currentFallback + 1;

    img.src = nextImage;
}


// =====================================================
// RENDER PRODUCTS
// =====================================================

function renderProducts(productList) {

    const grid =
        document.getElementById("products-grid");

    if (!grid) return;

    grid.innerHTML = "";

    productList.forEach(function (product) {

        const card =
            document.createElement("div");

        card.className = "product-card";


        const image =
            document.createElement("img");

        image.src = product.img;

        image.alt = product.title;

        image.style.width = "100%";
        image.style.height = "220px";
        image.style.objectFit = "cover";
        image.style.borderRadius = "15px";

        image.dataset.fallbackIndex = "0";

        image.onerror = function () {

            loadProductImage(this, product);

        };


        const title =
            document.createElement("h3");

        title.textContent =
            product.title;


        const price =
            document.createElement("p");

        price.className = "product-price";

        price.textContent =
            "$" +
            product.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });


        const button =
            document.createElement("button");

        button.className = "add-btn";

        button.textContent =
            "Add to Cart 🛒";

        button.onclick = function () {

            addToCart(product.id);

        };


        card.appendChild(image);

        card.appendChild(title);

        card.appendChild(price);

        card.appendChild(button);

        grid.appendChild(card);

    });
}


// =====================================================
// CATEGORY FILTER
// =====================================================

function filterCategory(category) {

    if (category === "all") {
        renderProducts(products);
        return;
    }

    const filtered = products.filter(function(product) {
        return product.category === category;
    });

    renderProducts(filtered);
}

// =====================================================
// ADD TO CART
// =====================================================

function addToCart(id) {

    if (typeof requireLoginForCart === "function" && !requireLoginForCart()) {
        return;
    }

    const product =
        products.find(function (p) {

            return p.id === id;

        });

    if (!product) return;

    const existing =
        cartList.find(function (item) {

            return item.id === id;

        });

    if (existing) {

        existing.quantity++;

    } else {

        cartList.push({

            id: product.id,

            title: product.title,

            price: product.price,

            quantity: 1

        });

    }

    localStorage.setItem(
        "cartList",
        JSON.stringify(cartList)
    );

    updateCartCount();

    if (document.getElementById("cart-items-wrapper")) {
        renderCartItems();
    }

    alert(
        "🛒 Added " +
        product.title +
        " to your cart!"
    );
}


// =====================================================
// CART COUNT
// =====================================================

function updateCartCount() {

    const count =
        document.getElementById("cart-count");

    if (!count) return;

    const total =
        cartList.reduce(function (sum, item) {

            return sum + item.quantity;

        }, 0);

    count.textContent = total;
}


// =====================================================
// CART DISPLAY
// =====================================================

function renderCartItems() {

    const wrapper =
        document.getElementById("cart-items-wrapper");

    if (!wrapper) return;

    if (cartList.length === 0) {

        wrapper.innerHTML =
            "<p>Your cart is empty.</p>";

        calculateTotals();

        return;
    }

    wrapper.innerHTML = "";

    cartList.forEach(function (item) {

        const row =
            document.createElement("div");

        row.className = "cart-row";

        row.innerHTML = `
            <div>
                <strong>${item.title}</strong>
                <p>$${Number(item.price).toFixed(2)}</p>
            </div>

            <div class="qty-controls">

                <button onclick="updateQuantity(${item.id}, -1)">
                    -
                </button>

                <span>${item.quantity}</span>

                <button onclick="updateQuantity(${item.id}, 1)">
                    +
                </button>

            </div>
        `;

        wrapper.appendChild(row);

    });

    calculateTotals();
}


// =====================================================
// QUANTITY
// =====================================================

function updateQuantity(id, change) {

    const item =
        cartList.find(function (p) {

            return p.id === id;

        });

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        cartList =
            cartList.filter(function (p) {

                return p.id !== id;

            });
    }

    localStorage.setItem(
        "cartList",
        JSON.stringify(cartList)
    );

    updateCartCount();

    renderCartItems();
}


// =====================================================
// CLEAR CART
// =====================================================

function clearEntireCart() {

    cartList = [];

    localStorage.removeItem("cartList");

    updateCartCount();

    if (document.getElementById("cart-items-wrapper")) {
        renderCartItems();
    }
}


// =====================================================
// SHIPPING
// =====================================================

function changeShipping(amount) {

    selectedShipping = amount;

    calculateTotals();
}


// =====================================================
// COUPONS
// =====================================================

function applyCouponCode() {

    const input =
        document.getElementById("coupon-input");

    const message =
        document.getElementById("coupon-message");

    if (!input || !message) return;

    const code =
        input.value.trim().toUpperCase();

    const couponValue = couponDiscounts[code];

    if (couponValue !== undefined && !appliedCouponCodes.has(code)) {

        appliedCouponCodes.add(code);
        discountPercentage = Math.min(
            1,
            discountPercentage + couponValue
        );

        message.textContent =
            `${code} applied. Total discount: ${discountPercentage * 100}%`;

        message.style.color =
            "#00ddff";

        const row =
            document.getElementById("discount-row");

        if (row) {
            row.style.display = "flex";
        }

        const label = row ? row.querySelector("span") : null;

        if (label) {
            label.textContent =
                `Discount (${discountPercentage * 100}%):`;
        }

    } else if (appliedCouponCodes.has(code)) {

        message.textContent =
            "That coupon has already been applied.";

        message.style.color =
            "#ffb142";

    } else {

        message.textContent =
            "Invalid Coupon Code.";

        message.style.color =
            "#ff4757";

        const row =
            document.getElementById("discount-row");

        if (row && appliedCouponCodes.size === 0) {
            row.style.display = "none";
        }
    }

    calculateTotals();

}


// =====================================================
// TOTALS
// =====================================================

function calculateTotals() {

    let subtotal = 0;

    cartList.forEach(function (item) {

        subtotal +=
            Number(item.price) *
            Number(item.quantity);

    });

    const discount =
        subtotal * discountPercentage;

    const taxable =
        subtotal - discount;

    const tax =
        taxable * 0.12;

    const total =
        taxable +
        tax +
        selectedShipping;


    const subtotalElement =
        document.getElementById("summary-subtotal");

    const discountElement =
        document.getElementById("summary-discount");

    const taxElement =
        document.getElementById("summary-tax");

    const shippingElement =
        document.getElementById("summary-shipping");

    const totalElement =
        document.getElementById("summary-total");


    if (subtotalElement) {
        subtotalElement.textContent =
            "$" + subtotal.toFixed(2);
    }

    if (discountElement) {
        discountElement.textContent =
            "-$" + discount.toFixed(2);
    }

    if (taxElement) {
        taxElement.textContent =
            "$" + tax.toFixed(2);
    }

    if (shippingElement) {
        shippingElement.textContent =
            "$" + selectedShipping.toFixed(2);
    }

    if (totalElement) {
        totalElement.textContent =
            "$" + total.toFixed(2);
    }
}


// =====================================================
// DARK MODE
// =====================================================

function toggleTheme() {

    document.body.classList.toggle("dark-theme");

    const button =
        document.getElementById("theme-toggle");

    if (button) {

        button.textContent =
            document.body.classList.contains("dark-theme")
                ? "☀️"
                : "🌙";
    }

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme")
            ? "dark"
            : "light"
    );
}


function loadTheme() {

    if (
        localStorage.getItem("theme") === "dark"
    ) {

        document.body.classList.add("dark-theme");

        const button =
            document.getElementById("theme-toggle");

        if (button) {
            button.textContent = "☀️";
        }
    }
}


// =====================================================
// CHECKOUT
// =====================================================

function triggerCheckoutAlert() {

    if (cartList.length === 0) {

        alert(
            "Your cart is empty! Add products before checking out."
        );

        return;
    }

    const orderNumber =
        "MADO-" + Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem("lastOrderNumber", orderNumber);
    localStorage.setItem("orderStatus", "Getting order ready");
    localStorage.setItem("orderStartedAt", String(Date.now()));
    localStorage.setItem("orderStage", "0");

    alert(
        "🚀 Order processed successfully! Your tracking code is " +
        orderNumber
    );

    clearEntireCart();
}


function checkout() {

    if (typeof requireLoginForCheckout === "function" && !requireLoginForCheckout()) {
        return;
    }

    triggerCheckoutAlert();

}


// =====================================================
// PACKAGE TRACKING
// =====================================================

const trackingStages = [
    { name: "Getting order ready", duration: 30 },
    { name: "Flying to your country", duration: 60 },
    { name: "Order here", duration: 0 }
];

let trackingTimer = null;

function getTrackingProgress() {

    const startedAt = Number(localStorage.getItem("orderStartedAt"));
    const forcedStage = Number(localStorage.getItem("orderStage"));

    if (!startedAt || Number.isFinite(forcedStage) && forcedStage > 0) {
        return {
            stage: Math.max(0, Math.min(2, forcedStage || 0)),
            progress: forcedStage >= 2 ? 100 : forcedStage === 1 ? 33 : 0
        };
    }

    const elapsed = (Date.now() - startedAt) / 1000;

    if (elapsed < trackingStages[0].duration) {
        return { stage: 0, progress: 0 };
    }

    if (elapsed < trackingStages[0].duration + trackingStages[1].duration) {
        return { stage: 1, progress: 33 };
    }

    return { stage: 2, progress: 100 };
}

function renderTrackingResult() {

    const input = document.getElementById("tracking-number");
    const result = document.getElementById("tracking-result");

    if (!input || !result) return;

    const number = input.value.trim().toUpperCase();
    const savedOrder = localStorage.getItem("lastOrderNumber");

    if (!number) {
        result.innerHTML = "<p class=\"tracking-error\">Please enter an order number.</p>";
        return;
    }

    if (number !== savedOrder) {
        result.innerHTML = `
            <div class="tracking-status">
                <h2>Order Not Found</h2>
                <p>We couldn't find an order with that tracking number.</p>
            </div>
        `;
        return;
    }

    const tracking = getTrackingProgress();
    const status = trackingStages[tracking.stage].name;

    result.innerHTML = `
        <div class="tracking-status">
            <h2>Order Found!</h2>
            <p>Order Number: <strong>${number}</strong></p>
            <div class="tracking-progress" aria-label="Package progress">
                <div class="tracking-progress-fill" style="width:${tracking.progress}%"></div>
            </div>
            <div class="tracking-stages">
                ${trackingStages.map(function (stage, index) {
                    return `<span class="${index <= tracking.stage ? "complete" : ""}">${stage.name}</span>`;
                }).join("")}
            </div>
            <span class="status-badge">${status}</span>
        </div>
    `;

    if (trackingTimer) clearTimeout(trackingTimer);

    if (tracking.stage < 2) {
        trackingTimer = setTimeout(renderTrackingResult, 1000);
    }
}

function trackPackage() {
    renderTrackingResult();
}