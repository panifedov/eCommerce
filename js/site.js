const PRODUCTS = {
   "1": {
       "name": "goose",
       "image": "img/goose.jpeg",
       "gr": 3,
       "price": 220,
       "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
   },
   "2": {
       "name": "shock",
       "image": "img/shock.jpeg",
       "gr": 1,
       "price": 543,
       "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
   },
   "3": {
       "name": "ninja",
       "image": "img/ninja.jpeg",
       "gr": 2,
       "price": 252,
       "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
   },
   "4": {
       "name": "apple",
       "image": "img/apple.jpeg",
       "gr": 6,
       "price": 111,
       "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
   },
   "5": {
       "name": "chitos",
       "image": "img/chitos.jpeg",
       "gr": 5,
       "price": 532,
       "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
   },
   "6": {
       "name": "red",
       "image": "img/red.jpeg",
       "price": 611,
       "gr": 2,
       "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa quos nostrum obcaecati quibusdam excepturi consequatur? Dicta nihil ad deserunt expedita quasi voluptas voluptatem dolorum perspiciatis et est tempore architecto, dignissimos porro eum nobis perferendis ab ducimus voluptatibus reiciendis cum nesciunt enim rem rerum sapiente. Labore reiciendis dicta in, saepe eaque molestiae libero officia rem illum, doloribus cupiditate dolores accusantium error consectetur asperiores nesciunt, minus ipsa? Hic sint aspernatur libero, at quidem error harum. Eum labore id quis quo dolore, veritatis delectus amet sequi dolorum accusamus voluptatibus in. Nostrum voluptatibus voluptates ipsam minus qui, quam impedit officiis doloribus deserunt architecto?"
   },
};
let localStorageCart = {};

function getPageName() {
    let path = window.location.pathname
    let PageName = path.split('/').pop().slice(0, -5)
    return PageName
};
//INIT
function init() {
    renderWidget()
    const PageName = getPageName()
    if (PageName === 'catalog') {
        renderCatalogPage()
    };
    if (PageName === 'cart') {
        renderCartPage();
    }
};
init();
//---------------------------------------
function renderCatalogPage() {
    const productsContainer = document.querySelector('.products-container');
    let htmlCatalog = '';
    for (let i in PRODUCTS) {
        htmlCatalog += `
                <div class="product-item" data-id="${i}">
                   <div class="products-item-name">
                   <h1>${PRODUCTS[i].name}</h1>
                </div>
                <img src="${PRODUCTS[i].image}" alt="">
                <div class="product-item-info">${PRODUCTS[i].text} </div>
                <div class="span-info">
                    <span class="span-price">${PRODUCTS[i].price}$</span>
                    <span class="span-gr">${PRODUCTS[i].gr}gr</span>
                </div>
                   <button class="button-in-cart" onclick="handleAddToCartEvent()">ADD TO CART</button>
                </div>`;
    };
    productsContainer.innerHTML = htmlCatalog;
};

function handleAddToCartEvent() {
    const product = this.event.target.closest(".product-item");
    let productId = product.dataset.id;
    if (localStorageCart[productId] !== undefined) {
        localStorageCart[productId]++;
    } else {
        localStorageCart[productId] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
    document.location.reload()
}

function renderWidget() {
    saveItemLocalStorageInLocalStorageCart()
    let cost = 0;
    let quantity = 0;
    for (let i in localStorageCart) {
        quantity += Number(localStorageCart[i]);
    }
    document.querySelector('.price-cart-counter').innerHTML = quantity;
    for (let i in localStorageCart) {
        cost += Number(localStorageCart[i]) * Number(PRODUCTS[i].price);
    }
    document.querySelector('.price-cart-price').innerHTML = cost + '$';
};

function saveItemLocalStorageInLocalStorageCart() {
    if (localStorage.getItem('cart') != null) {
        localStorageCart = JSON.parse(localStorage.getItem('cart'));
    }
    return localStorageCart
}

function renderCartPage() {
    saveItemLocalStorageInLocalStorageCart()
    const cartProductContainer = document.querySelector('.product-container-tabel');
    let products = PRODUCTS;
    let htmlCart = '';
    for (let i in localStorageCart) {
        htmlCart += `
          <div class="product-cart" data-id="${i}" > 
             <div class="product-img"><img class="product-photo " src="${products[i].image}"></img>
             </div>
             <div class="product-name ">${products[i].name}</div>
             <div class="product-price ">${products[i].price}$/${products[i].gr}gr</div>
             <div class="product-counter ">
                <button class="minus-product " onclick="handleCartItemQuantityDecrease()" data-minus="${i}">-</button>
                <div class="product-quantity">${localStorageCart[i]} </div>
                <button class="plus-product" onclick="handleCartItemQuantityIncrease()" data-plus="${i}">+</button>
             </div>
             <div class="product-subTotal">
                ${localStorageCart[i]*products[i].price}$ 
             </div>
             <button class="remove" onclick="handleCartRemoveItem()">Remove</button>
          </div>`;
    };
    cartProductContainer.innerHTML = htmlCart;
};

function handleCartItemQuantityIncrease() {
    const product = this.event.target.closest(".product-cart");
    let productId = product.dataset.id;
    if (localStorageCart[productId] !== undefined) {
        localStorageCart[productId]++;
    } else {
        localStorageCart[productId] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
    document.location.reload()
};

function handleCartItemQuantityDecrease() {
    const product = this.event.target.closest(".product-cart");
    let productId = product.dataset.id;
    if (localStorageCart[productId] > 1) {
        localStorageCart[productId]--;
    } else {
        delete localStorageCart[productId];
    }
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
    document.location.reload()
}

function handleCartRemoveItem() {
    const product = this.event.target.closest(".product-cart");
    let productId = product.dataset.id;
    delete localStorageCart[productId];
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
    document.location.reload()
}
 
