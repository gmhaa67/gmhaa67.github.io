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
    id: 42,
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
},
{
    id: 38,
    title: "world cup 2026 football",
    price: 200,
    category: "football",
    img: "futbal.png",
    fallbacks: [
        "futbal.png",
        "futbal.png.png",
        "football.png"
    ]
},
{
    id: 39,
    title: "proffessional goalkeeping gloves",
    price: 127,
    category: "football",
    img: "goalkeeper.png",
    fallbacks: [
        "goalkeeper.png",
        "goalkeeper.png.png",
        "goalkeeper.jpg"
    ]
}
,{
    id: 40,
    title: "proffessional football boots",
    price: 127,
    category: "football",
    img: "depends.png",
    fallbacks: [
        "depends.png",
        "depends.png.png",
        "depends.jpg"
    ]
}
,{
    id: 41,
    title: "ronaldo signed jersey",
    price: 50000,
    category: "football",
    img: "dependss.png",
    fallbacks: [
        "dependss.png",
        "dependss.png.png",
        "dependss.png.jpg",
        "dependss.jpg"
    ]
}
];


// =====================================================
// CART
// =====================================================

let cartList = [];
const inventoryStorageKey = "shop-product-inventory";
const defaultMaxStock = 20;
const restockDelay = 60 * 1000;

function getInventoryState() {

    try {
        const savedInventory = JSON.parse(localStorage.getItem(inventoryStorageKey) || "{}");
        return savedInventory && typeof savedInventory === "object" ? savedInventory : {};
    } catch (error) {
        return {};
    }
}

function saveInventoryState(inventory) {

    try {
        localStorage.setItem(inventoryStorageKey, JSON.stringify(inventory));
    } catch (error) {
        console.warn("Could not save product inventory.", error);
    }
}

function getProductInventory(product) {

    const inventory = getInventoryState();
    const productKey = String(product.id);
    const maxStock = Math.max(1, Number(product.maxStock) || defaultMaxStock);
    const initialStock = Math.min(maxStock, Math.max(1, Number(product.initialStock) || (5 + (product.id * 7) % 16)));
    let item = inventory[productKey];

    if (!item || typeof item !== "object") {
        item = { stock: initialStock, maxStock: maxStock, restockAt: 0 };
        inventory[productKey] = item;
        saveInventoryState(inventory);
    }

    item.maxStock = maxStock;
    item.stock = Math.floor(Math.max(0, Math.min(maxStock, Number(item.stock) || 0)));

    if (item.stock === 0 && item.restockAt && Date.now() >= Number(item.restockAt)) {
        item.stock = Math.floor(Math.random() * maxStock) + 1;
        item.restockAt = 0;
        saveInventoryState(inventory);
    }

    return item;
}

function updateProductInventory(productId, quantity) {

    const inventory = getInventoryState();
    const product = products.find(function (item) { return item.id === productId; });
    if (!product) return;

    const item = getProductInventory(product);
    item.stock = Math.floor(Math.max(0, item.stock - Math.max(1, Number(quantity) || 1)));
    if (item.stock === 0) {
        item.restockAt = Date.now() + restockDelay;
    }

    inventory[String(productId)] = item;
    saveInventoryState(inventory);
}

function restoreProductInventory(productId, quantity) {

    const inventory = getInventoryState();
    const product = products.find(function (item) { return item.id === productId; });
    if (!product) return;

    const item = getProductInventory(product);
    item.stock = Math.floor(Math.min(item.maxStock, item.stock + Math.max(0, Number(quantity) || 0)));
    item.restockAt = 0;
    inventory[String(productId)] = item;
    saveInventoryState(inventory);
}

function scheduleInventoryRefresh(product) {

    const inventory = getProductInventory(product);
    if (inventory.stock !== 0 || !inventory.restockAt) return;

    const delay = Math.max(500, Number(inventory.restockAt) - Date.now() + 100);
    window.setTimeout(function () {
        getProductInventory(product);
        if (document.getElementById("products-grid")) renderProducts(products);
        if (document.getElementById("product-detail")) renderProductDetail();
    }, delay);
}

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
const walletStorageKey = "shop-wallet";
const creditValue = 4.5;
const walletMoneyCodes = {
    ILOVEKENZI123: 100000,
    THISGUYISFAT: 100000,
    GIMMEMONEY: 1000000,
    GOBESERK: 500000,
    MADOBOOST: 250000,
    MIDOMONEY: 750000,
    SHOPPINGSPREE: 2500000,
    BIGBANK: 10000000,
    CASHWAVE: 25000,
    MONEYRAIN: 50000,
    GOLDENWALLET: 75000,
    QUICKCASH: 125000,
    LUCKYBUYER: 150000,
    MEGAPAYOUT: 200000,
    CASHBLAST: 300000,
    RICHMODE: 400000,
    MONEYDROP: 600000,
    MILLIONAIRE: 1000000,
    CASHKING: 1500000,
    MONEYMACHINE: 2000000,
    BANKROLL: 3000000,
    ULTRACASH: 5000000,
    FORTUNECOOKIE: 7500000,
    JACKPOTSHOP: 10000000,
    GOLDRAIN: 12000000,
    CASHCOMET: 15000000,
    TREASURECHEST: 20000000,
    ROYALPAYOUT: 25000000,
    DIAMONDBANK: 30000000,
    CASHLEGEND: 40000000,
    INFINITEFUNDS: 50000000,
    SUPERCASH: 65000000,
    MONEYVERSE: 80000000,
    BIGSPENDER: 100000000,
    CASHOVERLOAD: 125000000,
    GOLDENCARD: 150000000,
    BILLIONAIRE: 250000000,
    UNLIMITEDSHOP: 500000000,
    COSMICCASH: 750000000,
    FINALFORTUNE: 1000000000,
    MADOSECRET: 2500000000
};
const walletCreditCodes = {
    CREDITDROP: 100,
    BLUECREDITS: 500,
    MADOPOINTS: 1000,
    MIDOREWARDS: 2500,
    CREDITFRENZY: 10000,
    LEGENDARYSHOPPER: 50000,
    BLUEBONUS: 100,
    CREDITSPARK: 250,
    POINTSPULSE: 400,
    REWARDRAIN: 750,
    SHOPPOINTS: 1000,
    CREDITBOOST: 1500,
    MADOCOINS: 2000,
    MIDOBLUE: 3000,
    CREDITBLAST: 5000,
    POINTSPOWER: 7500,
    REWARDWAVE: 10000,
    BLUEFORTUNE: 15000,
    CREDITKING: 20000,
    SUPERPOINTS: 25000,
    CREDITCOMET: 30000,
    GOLDENCREDITS: 40000,
    POINTSLEGEND: 50000,
    REWARDROCKET: 75000,
    CREDITCHEST: 100000,
    BLUEJACKPOT: 125000,
    MADOLEGEND: 150000,
    MIDOMASTER: 200000,
    CREDITOVERLOAD: 250000,
    POINTSVAULT: 300000,
    ROYALCREDITS: 400000,
    INFINITEPOINTS: 500000,
    CREDITVERSE: 650000,
    SUPERREWARDS: 800000,
    BLUEBILLION: 1000000,
    COSMICPOINTS: 1500000,
    FINALCREDITS: 2500000,
    SECRETREWARDS: 5000000
};

function getWalletState() {
    try {
        const storedWallet = localStorage.getItem(walletStorageKey);
        const wallet = storedWallet ? JSON.parse(storedWallet) : {};
        return {
            credits: Math.max(0, Number(wallet.credits) || 0),
            money: Math.max(0, Number(wallet.money) || 0),
            usedCodes: Array.isArray(wallet.usedCodes) ? wallet.usedCodes : [],
            version: 1
        };
    } catch (error) {
        return { credits: 0, money: 0, usedCodes: [] };
    }
}

function saveWalletState(wallet) {
    localStorage.setItem(walletStorageKey, JSON.stringify(wallet));
    updateWalletDisplay();
}

function creditsForPrice(price) {
    return Math.max(1, Math.round(Number(price) / creditValue));
}

function formatWalletNumber(value) {
    return Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function getCartCreditTotal(items) {
    return items.reduce(function (sum, item) {
        return sum + creditsForPrice(item.price) * Math.max(0, Number(item.quantity) || 0);
    }, 0);
}

function updateWalletDisplay() {
    const wallet = getWalletState();
    document.querySelectorAll("[data-wallet-credits]").forEach(function (element) {
        element.textContent = formatWalletNumber(wallet.credits);
    });
    document.querySelectorAll("[data-wallet-money]").forEach(function (element) {
        element.textContent = "$" + formatWalletNumber(wallet.money);
    });
}

function openWalletPanel() {
    let panel = document.getElementById("wallet-panel");
    if (panel) {
        panel.remove();
        return;
    }

    panel = document.createElement("section");
    panel.id = "wallet-panel";
    panel.className = "wallet-panel";
    panel.innerHTML = `
        <button class="wallet-close" aria-label="Close wallet" onclick="openWalletPanel()">&times;</button>
        <p class="wallet-kicker">YOUR REWARDS WALLET</p>
        <div class="wallet-balance-grid">
            <div class="wallet-balance-card"><span>Credits</span><strong data-wallet-credits>0</strong></div>
            <div class="wallet-balance-card money-balance"><span>Money</span><strong data-wallet-money>$0</strong></div>
        </div>
        <p class="wallet-rate">1 credit = $4.50</p>
        <p class="wallet-persistence-note">Balances save automatically and stay after a page refresh.</p>
        <div class="wallet-form">
            <label for="wallet-code-input">Redeem a code</label>
            <div class="wallet-input-row"><input id="wallet-code-input" placeholder="Enter money or credit code"><button onclick="redeemWalletCode()">Redeem</button></div>
            <p id="wallet-message" class="wallet-message"></p>
        </div>
        <div class="wallet-form">
            <label for="wallet-exchange-input">Exchange credits for money</label>
            <div class="wallet-input-row"><input id="wallet-exchange-input" type="number" min="1" step="1" placeholder="Credits to exchange"><button onclick="exchangeWalletCredits()">Exchange</button></div>
        </div>
        <div class="wallet-form donation-form">
            <label for="wallet-donation-input">Donate money</label>
            <div class="wallet-input-row"><input id="wallet-donation-input" type="number" min="1" step="0.01" placeholder="Amount to donate"><button onclick="donateWalletMoney()">Donate</button></div>
        </div>
    `;
    document.body.appendChild(panel);
    updateWalletDisplay();
}

function redeemWalletCode() {
    const input = document.getElementById("wallet-code-input");
    const message = document.getElementById("wallet-message");
    if (!input || !message) return;

    const code = input.value.trim().toUpperCase();
    const wallet = getWalletState();
    if (!code) {
        message.textContent = "Enter a code first.";
        message.className = "wallet-message is-error";
        return;
    }

    if (walletMoneyCodes[code] !== undefined) {
        wallet.money += walletMoneyCodes[code];
        message.textContent = "Added $" + formatWalletNumber(walletMoneyCodes[code]) + " to your balance.";
    } else if (walletCreditCodes[code] !== undefined) {
        wallet.credits += walletCreditCodes[code];
        message.textContent = "Added " + formatWalletNumber(walletCreditCodes[code]) + " credits to your balance.";
    } else {
        message.textContent = "That code is not valid.";
        message.className = "wallet-message is-error";
        return;
    }

    saveWalletState(wallet);
    message.className = "wallet-message is-success";
    input.value = "";
}

function exchangeWalletCredits() {
    const input = document.getElementById("wallet-exchange-input");
    const message = document.getElementById("wallet-message");
    const amount = Math.floor(Number(input && input.value));
    const wallet = getWalletState();
    if (!amount || amount < 1 || amount > wallet.credits) {
        if (message) {
            message.textContent = "Enter an amount up to your available credits.";
            message.className = "wallet-message is-error";
        }
        return;
    }

    wallet.credits -= amount;
    wallet.money += amount * creditValue;
    saveWalletState(wallet);
    if (message) {
        message.textContent = "Exchanged " + formatWalletNumber(amount) + " credits for $" + formatWalletNumber(amount * creditValue) + ".";
        message.className = "wallet-message is-success";
    }
    if (input) input.value = "";
}

function donateWalletMoney() {
    const input = document.getElementById("wallet-donation-input");
    const message = document.getElementById("wallet-message");
    const amount = Math.round(Number(input && input.value) * 100) / 100;
    const wallet = getWalletState();

    if (!amount || amount < 1 || amount > wallet.money) {
        if (message) {
            message.textContent = "Enter an amount up to your available money.";
            message.className = "wallet-message is-error";
        }
        return;
    }

    wallet.money -= amount;
    saveWalletState(wallet);
    if (message) {
        message.textContent = "Thanks for your kindness! You donated $" + formatWalletNumber(amount) + ".";
        message.className = "wallet-message is-success";
    }
    if (input) input.value = "";
}

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

    installShopLanguageControl();
    applyShopLanguage();
    updateCartCount();
    updateWalletDisplay();

    const productsGrid =
        document.getElementById("products-grid");

    if (productsGrid) {
        renderProducts(products);
    }

    if (document.getElementById("cart-items-wrapper")) {
        renderCartItems();
    }

    if (document.getElementById("product-detail")) {
        renderProductDetail();
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
// PRODUCT DETAIL + REVIEWS
// =====================================================

const productReviewStorageKey = "shop-product-reviews";
const productReviewVoteStorageKey = "shop-product-review-votes";
const lifetimePurchaseStorageKey = "shop-session-purchases";
const shopLanguageStorageKey = "shop-language";
const shopAvatarStorageKey = "shop-avatar";
const shopVerifiedNotificationKey = "shop-session-verified-notification-shown";
const shopRuntimeId = String(Date.now()) + Math.random().toString(36).slice(2);

const shopTranslations = {
    en: {
        home: "Home",
        products: "Products",
        track: "Track Package",
        cart: "Cart",
        language: "Language",
        customerReviews: "Customer reviews",
        yourRating: "Your rating",
        selected: "Selected",
        writeReview: "Write your review...",
        submitReview: "Submit review",
        reply: "Reply",
        writeReply: "Write a reply...",
        postReply: "Post reply",
        verifiedBuyer: "Verified buyer",
        congratulations: "Congratulations! You are now a verified buyer after purchasing 200 products.",
        automaticReply: "Thanks for sharing your thoughts! The community appreciates your reply.",
        chooseAvatar: "Profile picture",
        featuredProducts: "Featured Products",
        shopNow: "Shop Now",
        browseProducts: "Browse Products",
        yourCart: "Your Cart",
        orderSummary: "Order Summary",
        subtotal: "Subtotal",
        shipping: "Shipping",
        total: "Total",
        clearCart: "Clear Cart",
        checkout: "Checkout",
        trackPackage: "Track Your Package",
        profileSettings: "Profile settings",
        pickPhoto: "Pick your photo"
    },
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        track: "تتبع الطلب",
        cart: "السلة",
        language: "اللغة",
        customerReviews: "آراء العملاء",
        yourRating: "تقييمك",
        selected: "المحدد",
        writeReview: "اكتب مراجعتك...",
        submitReview: "إرسال المراجعة",
        reply: "رد",
        writeReply: "اكتب رداً...",
        postReply: "نشر الرد",
        verifiedBuyer: "مشتري موثق",
        congratulations: "تهانينا! أصبحت الآن مشترياً موثقاً بعد شراء 200 منتج.",
        automaticReply: "شكراً لمشاركة رأيك! المجتمع يقدر ردك.",
        chooseAvatar: "الصورة الشخصية",
        featuredProducts: "المنتجات المميزة",
        shopNow: "تسوق الآن",
        browseProducts: "تصفح المنتجات",
        yourCart: "سلتك",
        orderSummary: "ملخص الطلب",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        total: "الإجمالي",
        clearCart: "إفراغ السلة",
        checkout: "الدفع",
        trackPackage: "تتبع طلبك",
        profileSettings: "إعدادات الملف الشخصي",
        pickPhoto: "اختر صورتك"
    }
};

function getShopLanguage() {
    return localStorage.getItem(shopLanguageStorageKey) === "ar" ? "ar" : "en";
}

function translateShop(key) {
    return shopTranslations[getShopLanguage()][key] || shopTranslations.en[key] || key;
}

function getShopAvatar() {
    const savedAvatar = localStorage.getItem(shopAvatarStorageKey);
    return savedAvatar || "plush.png.png";
}

const profilePhotoChoices = [
    { name: "Alya", image: "plush.png.png" },
    { name: "Pomni", image: "pomni.png.png" },
    { name: "Jax", image: "j.png" },
    { name: "Cash", image: "cah.png" }
];

function openProfilePhotoPicker() {
    const existingPicker = document.getElementById("profile-photo-picker");
    if (existingPicker) {
        existingPicker.remove();
        return;
    }

    const picker = document.createElement("div");
    picker.id = "profile-photo-picker";
    picker.className = "profile-photo-picker";
    picker.innerHTML = `
        <div class="profile-photo-picker-card" role="dialog" aria-label="${translateShop("pickPhoto")}">
            <button type="button" class="profile-photo-close" aria-label="Close">×</button>
            <h3>${translateShop("pickPhoto")}</h3>
            <div class="profile-photo-options">
                ${profilePhotoChoices.map(function (choice) {
                    const selected = getShopAvatar() === choice.image ? "selected" : "";
                    return `<button type="button" class="profile-photo-option ${selected}" data-profile-photo="${choice.image}"><img src="${choice.image}" alt="${choice.name}" onerror="this.src='j.png'"><span>${choice.name}</span></button>`;
                }).join("")}
            </div>
        </div>
    `;
    document.body.appendChild(picker);

    picker.querySelector(".profile-photo-close").addEventListener("click", function () {
        picker.remove();
    });
    picker.addEventListener("click", function (event) {
        if (event.target === picker) picker.remove();
    });
    picker.querySelectorAll("[data-profile-photo]").forEach(function (button) {
        button.addEventListener("click", function () {
            localStorage.setItem(shopAvatarStorageKey, button.dataset.profilePhoto);
            picker.remove();
            if (document.getElementById("product-detail")) renderProductDetail();
        });
    });
}

function showShopNotification(message) {
    const existing = document.querySelector(".shop-notification");
    if (existing) existing.remove();

    const notification = document.createElement("div");
    notification.className = "shop-notification";
    notification.textContent = message;
    document.body.appendChild(notification);
    window.setTimeout(function () {
        notification.classList.add("is-hidden");
        window.setTimeout(function () { notification.remove(); }, 300);
    }, 5000);
}

function applyShopLanguage() {
    const language = getShopLanguage();
    const direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.classList.toggle("arabic-language", language === "ar");

    document.querySelectorAll("header nav a").forEach(function (link) {
        const href = link.getAttribute("href") || "";
        if (href.includes("index.html")) link.textContent = translateShop("home");
        if (href.includes("products.html")) link.textContent = translateShop("products");
        if (href.includes("track.html")) link.textContent = translateShop("track");
    });

    document.querySelectorAll(".cart-icon").forEach(function (element) {
        const count = element.querySelector("#cart-count");
        element.childNodes[0].textContent = translateShop("cart") + " 🛒 ";
        if (count) element.appendChild(count);
    });

    const commonText = {
        "Featured Products": translateShop("featuredProducts"),
        "Shop Now": translateShop("shopNow"),
        "Browse Products": translateShop("browseProducts"),
        "Your Cart": translateShop("yourCart"),
        "Order Summary": translateShop("orderSummary"),
        "Subtotal": translateShop("subtotal"),
        "Shipping": translateShop("shipping"),
        "Total": translateShop("total"),
        "Clear Cart": translateShop("clearCart"),
        "Checkout": translateShop("checkout"),
        "Track Your Package": translateShop("trackPackage")
    };
    document.querySelectorAll("body *:not(script):not(style)").forEach(function (element) {
        if (element.children.length === 0) {
            const text = element.textContent.trim();
            if (commonText[text]) element.textContent = commonText[text];
        }
    });

    const selector = document.getElementById("shop-language-select");
    if (selector) {
        selector.value = language;
        const label = selector.parentElement.querySelector("span");
        if (label) label.textContent = translateShop("language");
    }

    const profileButton = document.querySelector(".profile-settings-btn");
    if (profileButton) {
        profileButton.title = translateShop("profileSettings");
        profileButton.setAttribute("aria-label", translateShop("profileSettings"));
    }

    if (document.getElementById("product-detail")) {
        renderProductDetail();
    }
}

function installShopLanguageControl() {
    const headerRight = document.querySelector("header .header-right");
    if (!headerRight || document.getElementById("shop-language-select")) return;

    const wrapper = document.createElement("label");
    wrapper.className = "language-control";
    wrapper.innerHTML = `<span>${translateShop("language")}</span><select id="shop-language-select" aria-label="${translateShop("language")}"><option value="en">English</option><option value="ar">العربية</option></select>`;
    wrapper.querySelector("select").addEventListener("change", function (event) {
        localStorage.setItem(shopLanguageStorageKey, event.target.value);
        applyShopLanguage();
    });
    headerRight.insertBefore(wrapper, headerRight.firstChild);

    const profileButton = document.createElement("button");
    profileButton.type = "button";
    profileButton.className = "profile-settings-btn";
    profileButton.title = translateShop("profileSettings");
    profileButton.setAttribute("aria-label", translateShop("profileSettings"));
    profileButton.textContent = "⚙";
    profileButton.addEventListener("click", openProfilePhotoPicker);
    headerRight.insertBefore(profileButton, headerRight.firstChild);
}

function getLifetimePurchaseCount() {

    try {
        const parsedValue = JSON.parse(sessionStorage.getItem(lifetimePurchaseStorageKey) || "0");
        const value = Number(parsedValue);
        return Number.isFinite(value) ? Math.max(0, value) : 0;
    } catch (error) {
        return 0;
    }
}

function setLifetimePurchaseCount(value) {

    const safeValue = Math.max(0, Number(value) || 0);

    try {
        sessionStorage.setItem(lifetimePurchaseStorageKey, String(safeValue));
    } catch (error) {
        console.warn("Could not save lifetime purchase count.", error);
    }
}

function hasVerifiedBuyerBadge(review) {

    if (!review) return false;

    if (review.user === "You") {
        return getLifetimePurchaseCount() >= 200;
    }

    if (review.verified === true) {
        return true;
    }

    return false;
}

function getReviewDisplayName(review) {

    if (!review || !review.user) {
        return "Guest";
    }

    return review.user;
}

function getReviewAvatar(review, index) {
    const reviewUser = String(review && review.user || "").toLowerCase();

    if (reviewUser === "mido" || reviewUser === "mido-t7" || reviewUser === "mido_t7") {
        return "pomni.png.png";
    }

    if (reviewUser === "alya") {
        return "plush.png.png";
    }

    if (reviewUser === "you") {
        return getShopAvatar();
    }

    if (review && review.avatar === "plush.png.png") {
        return "j.png";
    }

    return (review && review.avatar && review.avatar.includes(".")) ? review.avatar : "j.png";
}

function getReplyAvatar(reply) {
    const replyUser = String(reply && reply.user || "").toLowerCase();

    if (replyUser === "alya") return "plush.png.png";
    if (replyUser === "mido" || replyUser === "mido-t7" || replyUser === "mido_t7" || replyUser === "pomni") {
        return "pomni.png.png";
    }
    if (replyUser === "you" || replyUser === "mado") return getShopAvatar();
    if (reply && reply.avatar === "plush.png.png") return "j.png";

    return reply && reply.avatar && reply.avatar.includes(".") ? reply.avatar : "j.png";
}

function getAutomaticReplies(review) {
    const reviewUser = String(review && review.user || "").toLowerCase();
    const replies = [];

    if (reviewUser === "you" || reviewUser === "mado") {
        replies.push({
            user: "Alya",
            avatar: "plush.png.png",
            text: Math.random() > 0.5 ? "Hi Mado!" : "Umm... I like you."
        });
    } else if (reviewUser === "mido" || reviewUser === "mido-t7" || reviewUser === "mido_t7") {
        replies.push({
            user: "Pomni",
            avatar: "pomni.png.png",
            text: Math.random() > 0.5 ? "Hi Mido!" : "Umm... I like you."
        });
    } else {
        replies.push({
            user: "Noah",
            avatar: "j.png",
            text: "Thanks for sharing your thoughts!"
        });
    }

    replies.push(
        {
            user: "Mila",
            avatar: "cah.png",
            text: "I enjoyed reading this too."
        },
        {
            user: "Theo",
            avatar: "j.png",
            text: "This is a thoughtful reply."
        },
        {
            user: "Nina",
            avatar: "futbal.png",
            text: "I agree with what you said!"
        }
    );

    return replies;
}

function getReviewVoteState(productId, reviewIndex) {

    try {
        const votes = JSON.parse(localStorage.getItem(productReviewVoteStorageKey) || "{}");
        const key = String(productId) + ":" + String(reviewIndex);
        return votes[key] || "none";
    } catch (error) {
        return "none";
    }
}

function setReviewVoteState(productId, reviewIndex, vote) {

    try {
        const votes = JSON.parse(localStorage.getItem(productReviewVoteStorageKey) || "{}");
        const key = String(productId) + ":" + String(reviewIndex);
        if (vote === "none") {
            delete votes[key];
        } else {
            votes[key] = vote;
        }
        localStorage.setItem(productReviewVoteStorageKey, JSON.stringify(votes));
    } catch (error) {
        console.warn("Could not save review vote state.", error);
    }
}

function buildDefaultReviews(product) {

    const categoryComments = {
        electronics: [
            "The build quality feels premium and the performance is exactly what I expected.",
            "This electronic item arrived quickly and the setup was easy.",
            "It looks great in person and works smoothly every day.",
            "The finish is clean and the features feel worth the price.",
            "I’ve been using this for a while and it still feels reliable.",
            "This product has a premium look and really delivers on quality.",
            "The setup was simple and the performance feels smooth from day one.",
            "It looks sleek and the quality feels exactly as premium as advertised."
        ],
        clothes: [
            "The fit feels comfortable and the material looks much better in person.",
            "The stitching is solid and the design feels stylish without being over the top.",
            "This outfit is super comfortable and looks great for everyday wear.",
            "I liked the quality and the colour matched the description perfectly.",
            "It feels soft, looks premium, and is easy to style.",
            "The quality is better than expected and the fit feels right.",
            "The fabric feels soft and the design is clean and modern.",
            "Very comfortable and looks much more expensive than the price tag."
        ],
        shoes: [
            "The comfort is excellent and the design looks premium right away.",
            "They feel sturdy, stylish, and very easy to wear all day.",
            "The fit is great and the finish looks clean and high quality.",
            "I was impressed by how comfortable these were from the first wear.",
            "The quality feels strong and the look definitely stands out.",
            "Great value for a pair that looks this good and feels this comfortable.",
            "Very comfortable and the grip feels stable when walking around.",
            "The design looks premium and the materials feel durable."
        ],
        plush: [
            "This plush is adorable and the texture feels really soft and detailed.",
            "The quality is surprisingly good and it looks even better in person.",
            "It feels soft, well-made, and makes a great display piece.",
            "The design is cute and the finish feels polished and premium.",
            "I bought it as a gift and it was a huge hit.",
            "The plush looks amazing and the details are really well done.",
            "It feels super soft and the detailing is really clean.",
            "Very playful and nice to display in a bedroom or living room."
        ],
        football: [
            "The football feels great in hand and the grip is solid during play.",
            "It looks professional, feels durable, and works well in training.",
            "The quality feels reliable and the design stands out on the pitch.",
            "This football feels premium and comfortable to use in practice.",
            "The finish looks excellent and it holds up well during games.",
            "Great for training or casual play and the quality feels worth it.",
            "The ball keeps its shape well and feels consistent from kick to kick.",
            "It has a nice feel when striking and the surface looks clean and durable.",
            "Perfect for everyday football, with good balance and a solid grip.",
            "The ball is easy to control and feels more premium than expected.",
            "It handles nicely in practice and looks sharp on the pitch.",
            "The material feels sturdy and it performs well in both training and casual matches.",
            "The ball feels balanced and sits well in the foot when passing or shooting.",
            "It gives a clean feel when striking and has good control during play."
        ],
        "gift cards": [
            "Quick and easy to use, and the value feels exactly as expected.",
            "Very convenient and simple to redeem without any hassle.",
            "A practical gift option that feels smooth and instant.",
            "The process was quick and the value made it worth it.",
            "Good convenience and easy to send as a gift.",
            "This was a great option and the delivery was fast and straightforward.",
            "Very simple to redeem and the value feels right for the price.",
            "Great for gifting and the process is super straightforward."
        ],
        food: [
            "The product arrived in great condition and looked really premium.",
            "The quality felt authentic and the presentation was excellent.",
            "It definitely looked and tasted like a luxury item.",
            "The product feels premium and the flavour was worth the price.",
            "Really good quality and the packaging felt high end.",
            "The presentation is polished and the product feels special.",
            "The product looks premium and the taste matches the quality.",
            "Very high quality packaging and the item felt authentic and fresh."
        ],
        cars: [
            "The details on this are incredible and it looks even better in person.",
            "This model has excellent attention to detail and a premium finish.",
            "The design feels realistic and the quality is impressive.",
            "It looks amazing and the craftsmanship feels really high end.",
            "The detailing is sharp and the overall look feels very premium.",
            "This is a standout piece with a strong design and excellent finish.",
            "The details are really sharp and the finish feels excellent.",
            "Very realistic design and the quality feels premium from every angle."
        ],
        "custom jewelry": [
            "The craftsmanship is excellent and the finish feels premium and personal.",
            "It looks elegant in person and the detail work is very impressive.",
            "The design is beautiful and the overall quality feels exceptional.",
            "This piece feels premium, unique, and very well-made.",
            "The detailing is stunning and the finish feels luxurious.",
            "It looks classy and the quality matches the premium design.",
            "Very rich design and the finish feels beautifully made.",
            "The detail and shine are excellent and it feels one of a kind."
        ]
    };

    const productTitle = (product && product.title) ? product.title : "product";
    const productType = (product && product.category) ? product.category : "electronics";
    const categoryBase = categoryComments[productType] || categoryComments.electronics;
    const titleTag = productTitle.replace(/[^a-zA-Z0-9 ]/g, "").trim() || "product";

    const specificComments = [
        `The ${productTitle} looks even better in person and feels premium quality.`,
        `I bought the ${productTitle} and it definitely exceeded my expectations.`,
        `The ${productTitle} has excellent detail and feels worth the price.`,
        `This ${productType} item is a great choice if you want something stylish and reliable.`,
        `The ${titleTag} design is impressive and the craftsmanship stands out.`,
        `I’d recommend the ${productTitle} because it looks premium and performs really well.`,
        `The ${productTitle} feels polished and the details really stand out.`,
        `This is one of the better ${productType} items I’ve bought recently.`
    ];

    const negativeComments = [
        "The product is decent, but I expected a little more value for the price.",
        "Looks good, but it took longer than expected to arrive.",
        "The quality is okay, though I think it could be better for the cost.",
        "The item works fine, but the sizing or finish was not exactly what I wanted.",
        "It is good overall, but there are a few small details I would improve.",
        "The product is nice, but shipping was slower than I hoped.",
        "It is solid, but it is not as premium as I had hoped.",
        "This works well enough, though I expected a slightly better finish.",
        "The design is nice, but there are a few quality details I would tweak.",
        "Good product overall, but I think it could be a bit more durable.",
        "It does the job, but I expected a more premium feel from the material.",
        "The product was fine, yet I think the value could be a little better.",
        "It is okay, but I think the quality feels a little simple for the price.",
        "The product works as expected, but I hoped for a stronger finish."
    ];

    const allComments = [...categoryBase, ...specificComments, ...negativeComments];
    const ratingSeed = (product && product.id ? product.id : 1) * 13 % allComments.length;

    const reviewList = [
        { user: "Mido", verified: true, rating: 5, likes: 18, dislikes: 1, replies: [{ user: "Pomni", avatar: "pomni.png.png", text: "Hi Mido! I like this review." }, { user: "Ava", text: "Totally agree — it looks even better in person." }], comment: allComments[(ratingSeed + 0) % allComments.length] },
        { user: "Alya", verified: true, rating: 4.5, likes: 15, dislikes: 2, replies: [{ user: "Noah", text: "Same here, the quality feels really good." }], comment: allComments[(ratingSeed + 2) % allComments.length] },
        { user: "Ava", verified: false, rating: 5, likes: 21, dislikes: 0, replies: [{ user: "Rin", text: "This is seriously worth it." }], comment: allComments[(ratingSeed + 4) % allComments.length] },
        { user: "Leo", verified: false, rating: 3, likes: 6, dislikes: 3, replies: [{ user: "Nina", text: "A bit slow on delivery but the product is okay." }], comment: negativeComments[(ratingSeed + 1) % negativeComments.length] },
        { user: "Zoe", verified: true, rating: 5, likes: 19, dislikes: 1, replies: [{ user: "Sam", text: "I’d buy it again." }], comment: allComments[(ratingSeed + 3) % allComments.length] },
        { user: "Nina", verified: false, rating: 2.5, likes: 4, dislikes: 4, replies: [{ user: "Theo", text: "I get that, but still looks good overall." }], comment: negativeComments[(ratingSeed + 3) % negativeComments.length] },
        { user: "Sam", verified: false, rating: 4, likes: 11, dislikes: 2, replies: [{ user: "Mila", text: "Nice review, I agree with you." }], comment: allComments[(ratingSeed + 5) % allComments.length] },
        { user: "Noah", verified: true, rating: 5, likes: 24, dislikes: 0, replies: [{ user: "Kai", text: "Looks great and feels premium." }], comment: allComments[(ratingSeed + 6) % allComments.length] },
        { user: "Mila", verified: false, rating: 4.5, likes: 13, dislikes: 2, replies: [{ user: "Lena", text: "Super happy with this purchase." }], comment: allComments[(ratingSeed + 7) % allComments.length] },
        { user: "Kai", verified: true, rating: 3.5, likes: 8, dislikes: 3, replies: [{ user: "Omar", text: "It’s decent, but feels a little simple for the price." }], comment: negativeComments[(ratingSeed + 5) % negativeComments.length] },
        { user: "Rin", verified: false, rating: 5, likes: 17, dislikes: 0, replies: [{ user: "Mido", text: "Exactly — this one is worth it." }], comment: allComments[(ratingSeed + 8) % allComments.length] },
        { user: "Theo", verified: true, rating: 4, likes: 12, dislikes: 1, replies: [{ user: "Alya", text: "The quality definitely holds up." }], comment: allComments[(ratingSeed + 9) % allComments.length] },
        { user: "Lena", verified: false, rating: 5, likes: 22, dislikes: 1, replies: [{ user: "Zoe", text: "I’d recommend it for sure." }], comment: allComments[(ratingSeed + 10) % allComments.length] },
        { user: "Omar", verified: false, rating: 2, likes: 3, dislikes: 6, replies: [{ user: "Sam", text: "Not my experience, but still fair feedback." }], comment: negativeComments[(ratingSeed + 9) % negativeComments.length] }
    ];

    return reviewList;
}

function getSavedProductReviews(product) {

    const productId = product && product.id ? product.id : "unknown";

    try {
        const savedReviews = JSON.parse(localStorage.getItem(productReviewStorageKey) || "{}");
        const productReviews = savedReviews[productId];

        if (Array.isArray(productReviews) && productReviews.length > 0) {
            return productReviews.filter(function (review) {
                return review && (review.user !== "You" || review.sessionId === shopRuntimeId);
            }).map(function (review) {
                return {
                    user: review.user || "Guest",
                    avatar: String(review.user || "").toLowerCase() === "alya"
                        ? "plush.png.png"
                        : (String(review.user || "").toLowerCase() === "you" ? getShopAvatar()
                        : ((["mido", "mido-t7", "mido_t7"].includes(String(review.user || "").toLowerCase())) ? "pomni.png.png" : (review.avatar === "plush.png.png" ? "j.png" : (review.avatar || "j.png")))),
                    verified: review.user === "You"
                        ? getLifetimePurchaseCount() >= 200
                        : Boolean(review.verified),
                    rating: Number(review.rating) || 0,
                    comment: review.comment || "",
                    likes: Number(review.likes) || 0,
                    dislikes: Number(review.dislikes) || 0,
                    replies: Array.isArray(review.replies)
                        ? review.replies.filter(function (reply) {
                            return reply && reply.user !== "Fan";
                        })
                        : []
                };
            });
        }
    } catch (error) {
        return buildDefaultReviews(product);
    }

    return buildDefaultReviews(product);
}

function saveProductReviews(productId, reviews) {

    try {
        const savedReviews = JSON.parse(localStorage.getItem(productReviewStorageKey) || "{}");
        savedReviews[productId] = reviews;
        localStorage.setItem(productReviewStorageKey, JSON.stringify(savedReviews));
    } catch (error) {
        console.warn("Could not save product reviews.", error);
    }
}

function getAverageRating(reviews) {

    if (!Array.isArray(reviews) || reviews.length === 0) {
        return 0;
    }

    const total = reviews.reduce(function (sum, review) {
        return sum + (Number(review.rating) || 0);
    }, 0);

    return total / reviews.length;
}

function openProductPage(productId) {

    window.location.href = "product.html?id=" + productId;
}

function renderProductDetail() {

    const detailRoot = document.getElementById("product-detail");

    if (!detailRoot) return;

    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));
    const product = products.find(function (item) {
        return item.id === productId;
    });

    if (!product) {
        detailRoot.innerHTML = `
            <div class="product-detail-empty">
                <h2>Product not found</h2>
                <p>The item you requested is no longer available.</p>
                <a href="products.html" class="back-to-products">Back to products</a>
            </div>
        `;
        return;
    }

    const reviews = getSavedProductReviews(product);
    const averageRating = getAverageRating(reviews);
    const inventory = getProductInventory(product);
    const quantity = inventory.stock;
    scheduleInventoryRefresh(product);
    const primaryImage = product.img || "";
    const allImages = [primaryImage].concat(product.fallbacks || []).filter(Boolean);
    const uniqueImages = [...new Set(allImages)];
    const relatedProducts = products.filter(function (item) {
        return item.category === product.category && item.id !== product.id;
    }).slice(0, 4);

    detailRoot.innerHTML = `
        <div class="product-detail-shell">
            <div class="product-detail-header">
                <button class="secondary-btn" onclick="window.location.href='products.html'">← Back to products</button>
            </div>

            <div class="product-detail-content">
                <div class="product-gallery">
                    <img
                        id="detail-main-image"
                        src="${primaryImage}"
                        alt="${product.title}"
                        onerror="this.src='${uniqueImages[1] || 'https://via.placeholder.com/600x600?text=Product'}';"
                    >
                    <div class="product-gallery-thumbs">
                        ${uniqueImages.map(function (image, index) {
                            return `
                                <button class="thumb-btn ${index === 0 ? "active" : ""}" data-image="${image}">
                                    <img src="${image}" alt="${product.title} thumbnail" onerror="this.style.display='none'">
                                </button>
                            `;
                        }).join("")}
                    </div>
                </div>

                <div class="product-detail-info">
                    <span class="product-category-label">${product.category}</span>
                    <h1>${product.title}</h1>

                    <div class="product-rating-row">
                        <div class="stars" aria-label="Average rating ${averageRating.toFixed(1)} out of 5">
                            ${renderStars(averageRating)}
                        </div>
                        <span>${averageRating.toFixed(1)} / 5</span>
                    </div>

                    <p class="product-detail-price">$${Number(product.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p class="product-credits product-detail-credits">Price in credits: ${creditsForPrice(product.price)} | Earned after purchase</p>
                    <p class="product-description">${product.description || "A premium item designed for style, comfort, and everyday use."}</p>

                    <div class="product-detail-actions">
                        <div class="qty-picker ${quantity === 0 ? "is-disabled" : ""}">
                            <button type="button" data-qty-action="decrease" ${quantity === 0 ? "disabled" : ""}>−</button>
                            <input id="detail-qty" type="number" min="1" max="${Math.max(1, quantity)}" value="${quantity === 0 ? 0 : 1}" ${quantity === 0 ? "disabled" : ""}>
                            <button type="button" data-qty-action="increase" ${quantity === 0 ? "disabled" : ""}>+</button>
                        </div>

                        <button class="add-btn detail-add-btn" data-add-product="${product.id}" ${quantity === 0 ? "disabled" : ""}>${quantity === 0 ? "Sold out" : "Add to Cart 🛒"}</button>
                    </div>

                    <div class="product-stock">
                        ${quantity > 0 ? `<strong>Available:</strong> ${quantity} in stock` : `<strong>Sold out.</strong> Restocking soon.`}
                    </div>
                </div>
            </div>

            <div class="product-review-section">
                <h2>${translateShop("customerReviews")}</h2>

                <div class="review-form">
                    <label>${translateShop("yourRating")}</label>
                    <div class="interactive-stars" id="interactive-stars">
                        ${[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(function (star) {
                            return `<button type="button" class="star-btn" data-value="${star}">${star % 1 === 0 ? "★" : "⯨"}</button>`;
                        }).join("")}
                    </div>
                    <div class="selected-rating-label" id="selected-rating-label">${translateShop("selected")}: 0/5</div>

                    <textarea id="new-comment" rows="4" placeholder="${translateShop("writeReview")}"></textarea>
                    <button type="button" class="primary-btn" id="submit-review">${translateShop("submitReview")}</button>
                </div>

                <div class="product-comment-list">
                    ${reviews.map(function (review, reviewIndex) {
                        const reviewVerified = hasVerifiedBuyerBadge(review);
                        return `
                            <article class="comment-item" data-review-index="${reviewIndex}">
                                <div class="comment-head">
                                    <div class="comment-user">
                                        <img class="review-avatar" src="${getReviewAvatar(review, reviewIndex)}" alt="${getReviewDisplayName(review)} profile picture" onerror="this.src='j.png'">
                                        <strong>${getReviewDisplayName(review)}</strong>
                                        ${reviewVerified ? '<span class="verified-badge">Verified buyer</span>' : ""}
                                    </div>
                                    <span class="mini-stars">${renderStars(Number(review.rating) || 0)}</span>
                                </div>
                                <p>${review.comment}</p>
                                <div class="comment-actions">
                                    <button class="comment-like-btn" type="button" data-review-index="${reviewIndex}" data-vote="like">👍 <span>${Number(review.likes || 0)}</span></button>
                                    <button class="comment-dislike-btn" type="button" data-review-index="${reviewIndex}" data-vote="dislike">👎 <span>${Number(review.dislikes || 0)}</span></button>
                                    <button class="comment-reply-toggle" type="button" data-review-index="${reviewIndex}">${translateShop("reply")} (${(review.replies || []).length})</button>
                                </div>
                                <div class="reply-box hidden" data-reply-box="${reviewIndex}">
                                    <textarea data-reply-input="${reviewIndex}" rows="2" placeholder="${translateShop("writeReply")}"></textarea>
                                    <button class="primary-btn reply-submit" type="button" data-review-index="${reviewIndex}">${translateShop("postReply")}</button>
                                </div>
                                ${(Array.isArray(review.replies) && review.replies.length ? `
                                    <div class="reply-list">
                                        ${review.replies.map(function (reply) {
                                            return `
                                                <div class="reply-item">
                                                    <div class="reply-user"><img class="review-avatar" src="${getReplyAvatar(reply)}" alt="${reply.user} profile picture" onerror="this.src='j.png'"><strong>${reply.user}</strong></div>
                                                    <p>${reply.text}</p>
                                                </div>
                                            `;
                                        }).join("")}
                                    </div>
                                ` : "")}
                            </article>
                        `;
                    }).join("")}
                </div>
            </div>

            <div class="related-products-section">
                <div class="related-header-row">
                    <h2>You may also like</h2>
                </div>
                <div class="related-products-grid">
                    ${relatedProducts.map(function (item) {
                        return `
                            <article class="related-product-card" data-related-id="${item.id}">
                                <img src="${item.img}" alt="${item.title}" onerror="this.src='${(item.fallbacks || [])[0] || 'https://via.placeholder.com/300x220?text=Shop'}';">
                                <div class="related-product-body">
                                    <h3>${item.title}</h3>
                                    <p>$${Number(item.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    <button type="button" class="secondary-btn related-btn">View item</button>
                                </div>
                            </article>
                        `;
                    }).join("") || '<p class="related-empty">No related products in this category yet.</p>'}
                </div>
            </div>
        </div>
    `;

    const detailImage = document.getElementById("detail-main-image");
    if (detailImage && uniqueImages.length > 1) {
        document.querySelectorAll(".thumb-btn").forEach(function (button) {
            button.addEventListener("click", function () {
                const selected = button.dataset.image;
                if (selected) {
                    detailImage.src = selected;
                    document.querySelectorAll(".thumb-btn").forEach(function (thumb) {
                        thumb.classList.toggle("active", thumb === button);
                    });
                }
            });
        });
    }

    const qtyInput = document.getElementById("detail-qty");
    if (qtyInput) {
        document.querySelectorAll("[data-qty-action]").forEach(function (button) {
            button.addEventListener("click", function () {
                const action = button.dataset.qtyAction;
                let nextValue = Number(qtyInput.value || 1);
                if (action === "increase") nextValue += 1;
                if (action === "decrease") nextValue -= 1;
                nextValue = Math.min(quantity, Math.max(1, nextValue));
                qtyInput.value = nextValue;
            });
        });
    }

    const addButton = document.querySelector("[data-add-product]");
    if (addButton) {
        addButton.addEventListener("click", function () {
            const chosenQty = Number(qtyInput?.value || 1);
            addToCart(product.id, chosenQty);
        });
    }

    let currentRating = 0;
    const ratingLabel = document.getElementById("selected-rating-label");

    document.querySelectorAll(".star-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            currentRating = Number(button.dataset.value);

            document.querySelectorAll(".star-btn").forEach(function (star) {
                const starValue = Number(star.dataset.value);
                const selected = starValue <= currentRating;
                const isHalfSelected = Number.isInteger(currentRating) === false && starValue === currentRating;
                star.classList.toggle("selected", selected);
                star.textContent = isHalfSelected ? "⯨" : (selected ? "★" : "☆");
            });

            if (ratingLabel) {
                ratingLabel.textContent = translateShop("selected") + ": " + currentRating.toFixed(1).replace(".0", "") + "/5";
            }
        });
    });

    const submitReview = document.getElementById("submit-review");
    const newCommentInput = document.getElementById("new-comment");
    if (submitReview && newCommentInput) {
        submitReview.addEventListener("click", function () {
            const commentText = newCommentInput.value.trim();

            if (!commentText || currentRating === 0) {
                alert("Please add a rating and a comment before submitting.");
                return;
            }

            const updatedReviews = getSavedProductReviews(product);
            const newReview = {
                user: "You",
                sessionId: shopRuntimeId,
                avatar: getShopAvatar(),
                verified: getLifetimePurchaseCount() >= 200,
                rating: currentRating,
                likes: 0,
                dislikes: 0,
                replies: [],
                comment: commentText
            };
            newReview.replies = getAutomaticReplies(newReview);
            updatedReviews.unshift(newReview);

            saveProductReviews(product.id, updatedReviews);
            renderProductDetail();
        });
    }

    document.querySelectorAll(".comment-like-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            const reviewIndex = Number(button.dataset.reviewIndex);
            const reviewsForProduct = getSavedProductReviews(product);
            const targetReview = reviewsForProduct[reviewIndex];
            if (!targetReview) return;

            const currentVote = getReviewVoteState(product.id, reviewIndex);
            if (currentVote === "like") {
                return;
            }

            if (currentVote === "dislike") {
                targetReview.dislikes = Math.max(0, Number(targetReview.dislikes || 0) - 1);
            }

            targetReview.likes = Math.max(0, Number(targetReview.likes || 0) + 1);
            setReviewVoteState(product.id, reviewIndex, "like");
            saveProductReviews(product.id, reviewsForProduct);
            renderProductDetail();
        });
    });

    document.querySelectorAll(".comment-dislike-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            const reviewIndex = Number(button.dataset.reviewIndex);
            const reviewsForProduct = getSavedProductReviews(product);
            const targetReview = reviewsForProduct[reviewIndex];
            if (!targetReview) return;

            const currentVote = getReviewVoteState(product.id, reviewIndex);
            if (currentVote === "dislike") {
                return;
            }

            if (currentVote === "like") {
                targetReview.likes = Math.max(0, Number(targetReview.likes || 0) - 1);
            }

            targetReview.dislikes = Math.max(0, Number(targetReview.dislikes || 0) + 1);
            setReviewVoteState(product.id, reviewIndex, "dislike");
            saveProductReviews(product.id, reviewsForProduct);
            renderProductDetail();
        });
    });

    document.querySelectorAll(".comment-reply-toggle").forEach(function (button) {
        button.addEventListener("click", function () {
            const reviewIndex = Number(button.dataset.reviewIndex);
            const replyBox = document.querySelector('[data-reply-box="' + reviewIndex + '"]');
            if (replyBox) {
                replyBox.classList.toggle("hidden");
            }
        });
    });

    document.querySelectorAll(".reply-submit").forEach(function (button) {
        button.addEventListener("click", function () {
            const reviewIndex = Number(button.dataset.reviewIndex);
            const reviewsForProduct = getSavedProductReviews(product);
            const targetReview = reviewsForProduct[reviewIndex];
            const replyInput = document.querySelector('[data-reply-input="' + reviewIndex + '"]');

            if (!targetReview || !replyInput) return;

            const replyText = replyInput.value.trim();
            if (!replyText) {
                alert("Please type a reply first.");
                return;
            }

            targetReview.replies = targetReview.replies || [];
            targetReview.replies.push({
                user: "Fan",
                avatar: getShopAvatar(),
                text: replyText
            });

            getAutomaticReplies(targetReview).forEach(function (automaticReply) {
                targetReview.replies.push(automaticReply);
            });

            saveProductReviews(product.id, reviewsForProduct);
            renderProductDetail();
        });
    });

    document.querySelectorAll(".related-product-card").forEach(function (card) {
        card.addEventListener("click", function (event) {
            if (event.target && event.target.closest(".related-btn")) {
                event.stopPropagation();
            }
            const relatedId = Number(card.dataset.relatedId);
            if (relatedId) {
                window.location.href = "product.html?id=" + relatedId;
            }
        });
    });
}

function renderStars(score) {

    const value = Math.max(0, Math.min(5, Number(score) || 0));
    const starString = [];

    for (let i = 1; i <= 5; i++) {
        if (value >= i) {
            starString.push("★");
        } else if (value >= i - 0.5 && value < i) {
            starString.push("⯨");
        } else {
            starString.push("☆");
        }
    }

    return starString.join("");
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
        card.style.cursor = "pointer";

        card.addEventListener("click", function (event) {
            if (event.target && event.target.closest(".add-btn")) {
                return;
            }
            openProductPage(product.id);
        });

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

        const credits = document.createElement("p");
        credits.className = "product-credits";
        credits.textContent = "Price in credits: " + creditsForPrice(product.price);

        const inventory = getProductInventory(product);
        scheduleInventoryRefresh(product);

        const stock = document.createElement("p");
        stock.className = inventory.stock > 0 ? "product-card-stock" : "product-card-stock sold-out";
        stock.textContent = inventory.stock > 0 ? inventory.stock + " left" : "Sold out";


        const button =
            document.createElement("button");

        button.className = "add-btn";

        button.disabled = inventory.stock === 0;

        button.textContent =
            inventory.stock === 0 ? "Sold out" : "Add to Cart 🛒";

        button.onclick = function (event) {
            event.stopPropagation();
            addToCart(product.id);
        };


        card.appendChild(image);

        card.appendChild(title);

        card.appendChild(price);

        card.appendChild(credits);

        card.appendChild(stock);

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

function addToCart(id, quantityInput) {

    if (typeof requireLoginForCart === "function" && !requireLoginForCart()) {
        return;
    }

    const product =
        products.find(function (p) {

            return p.id === id;

        });

    if (!product) return;

    const quantity =
        Math.max(1, Number(quantityInput) || 1);

    const availableStock = getProductInventory(product).stock;
    const existingQuantity = cartList.find(function (item) {
        return item.id === id;
    })?.quantity || 0;

    if (availableStock === 0) {
        alert(product.title + " is sold out. Please wait for the restock.");
        return;
    }

    if (quantity > availableStock) {
        alert("Only " + availableStock + " of " + product.title + " remain available.");
        return;
    }

    const existing =
        cartList.find(function (item) {

            return item.id === id;

        });

    if (existing) {

        existing.quantity += quantity;

    } else {

        cartList.push({

            id: product.id,

            title: product.title,

            price: product.price,

            quantity: quantity

        });

    }

    localStorage.setItem(
        "cartList",
        JSON.stringify(cartList)
    );

    updateProductInventory(id, quantity);

    updateCartCount();

    if (document.getElementById("cart-items-wrapper")) {
        renderCartItems();
    }

    if (document.getElementById("product-detail")) {
        renderProductDetail();
    }

    alert(
        "🛒 Added " +
        quantity +
        " of " +
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

    if (change > 0) {
        const product = products.find(function (candidate) { return candidate.id === id; });
        const availableStock = product ? getProductInventory(product).stock : 0;
        if (change > availableStock) {
            alert("Only " + availableStock + " more are available.");
            return;
        }
    }

    if (change < 0) {
        restoreProductInventory(id, Math.min(item.quantity, Math.abs(change)));
    }

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

function clearEntireCart(restoreStock = true) {

    if (restoreStock) {
        cartList.forEach(function (item) {
            restoreProductInventory(item.id, item.quantity);
        });
    }

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

    const wallet = getWalletState();
    const subtotal = cartList.reduce(function (sum, item) {
        return sum + Number(item.price) * Number(item.quantity);
    }, 0);
    const total = (subtotal - subtotal * discountPercentage) * 1.12 + selectedShipping;

    if (wallet.money < total) {
        alert(
            "You need $" + formatWalletNumber(total) + " to buy this order, but your wallet has $" +
            formatWalletNumber(wallet.money) + ". Open the blue wallet button to redeem a money code."
        );
        return;
    }

    const purchasedQuantity = cartList.reduce(function (sum, item) {
        return sum + Math.max(0, Number(item.quantity) || 0);
    }, 0);

    const previousPurchaseCount = getLifetimePurchaseCount();
    const updatedPurchaseCount = previousPurchaseCount + purchasedQuantity;
    setLifetimePurchaseCount(updatedPurchaseCount);

    const earnedCredits = getCartCreditTotal(cartList);
    wallet.money -= total;
    wallet.credits += earnedCredits;
    saveWalletState(wallet);

    if (previousPurchaseCount < 200 && updatedPurchaseCount >= 200 && !sessionStorage.getItem(shopVerifiedNotificationKey)) {
        sessionStorage.setItem(shopVerifiedNotificationKey, "true");
        showShopNotification(translateShop("congratulations"));
    }

    localStorage.setItem("lastOrderNumber", orderNumber);
    localStorage.setItem("orderStatus", "Getting order ready");
    localStorage.setItem("orderStartedAt", String(Date.now()));
    localStorage.setItem("orderStage", "0");

    alert(
        "🚀 Order processed successfully! Your tracking code is " +
        orderNumber + "\nYou earned " + formatWalletNumber(earnedCredits) + " credits!"
    );

    clearEntireCart(false);
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