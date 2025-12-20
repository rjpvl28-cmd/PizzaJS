let hasDiscount = false;

// ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
    
    // раскрытие текста в блоке info
    const infoLink = document.querySelector('.info__link');
    if (infoLink) {
        infoLink.addEventListener('click', function () {
            const infoText = document.querySelector('.info__text');
            if (infoText) {
                infoText.classList.toggle('info__text--active');
                let buttonText = this.textContent;
                this.textContent = this.dataset.hello;
                this.dataset.hello =  buttonText;
            }
        })
    }

    // открытие попапа фильтра
    const popupFilter = document.querySelector('.popup-filter');
    if (popupFilter) {
        const buttonPopup = document.querySelector('.catalog__filter');
        if (buttonPopup) {
            buttonPopup.addEventListener('click', function () {
                document.body.classList.add('no-scroll');
                popupFilter.classList.add('popup-filter--show');
                setTimeout(function () {
                    popupFilter.classList.add('popup-filter--active');
                }, 10);
            })
        }

        const buttonPopupClose = document.querySelector('.popup-filter__close');
        if (buttonPopupClose) {
            buttonPopupClose.addEventListener('click', function () {
                popupFilter.classList.remove('popup-filter--active');
                setTimeout(function () {
                    popupFilter.classList.remove('popup-filter--show');
                    document.body.classList.remove('no-scroll');
                }, 300);
            });
        }
    }

    // формирование групп фильтров в попапе
    const titles = [
        "Общее",
        "Сыр",
        "Мясо",
        "Компонент"
    ];

    const buttons = [
        [
            "Супер хит",
            'Новинка',
            "С мясом",
            "Вегетарианская",
            "С курицей",
            "Без лука",
            "С грибами",
            "С морепродуктами",
            "Барбекью"
        ],
        [
            "Реджанито",
            "Моцарелла",
            "Чеддер",
            "С голубой плесенью",
            "Смесь итальянских сыров",
            "Мягкий молодой сыр лука",
        ],
        [
            "Пепперони",
            "Свинина",
            "Ветчина",
            "Бекон",
            "Говядина",
            "Чоризо",
            "Колбаски",
            "Куриная грудка",
        ],
        [
            "Креветка",
            "Ананасы",
            "Шампиньоны",
            "Лук",
            "Перец халапеньо",
            "Орегано",
            "Зеленый перец",
            "Томаты",
            "Чеснок",
            "Красный перец",
            "Оливки",
            "Маслины",
            "Клубника",
            "Смесь итальянских трав",
        ]
    ];

    const groups = document.querySelector('.popup-filter__groups');
    if (groups) {
        let groupHtml = '';
        for(let i = 0; i < titles.length; i++) {
            let buttonsHtml = '';
            for(let j = 0; j < buttons[i].length; j++) {
                buttonsHtml = buttonsHtml + `<button>${buttons[i][j]}</button>`;
            }
            groupHtml = groupHtml + `<div class="popup-filter__group">
                        <h4>${titles[i]}</h4>
                        <div class="popup-filter__checkbox">
                            ${buttonsHtml}
                        </div>
                    </div>`;
        }
        groups.innerHTML = groupHtml;
    }

    // формирование пагинации
    const n = 1000;
    const here = document.querySelector('.here');
    if (here) {
        let paginationHtml = '';
        for (let i = 1; i <= n; i++) {
            if (i <= 3 || i > n - 3) {
                paginationHtml = paginationHtml + `<li>
                        <a href="#" class="pagination__button">${i}</a>
                    </li>`;
            }
            if (i == 3) {
                paginationHtml = paginationHtml + `<li>
                        <span>...</span>
                    </li>`;
            }
        }
        here.outerHTML = paginationHtml;
    }

    // формирование категорий на главной странице
    const categories = [
        {
            icon: "icon-sale",
            title: 'Акции',
            isActive: true
        },
        {
            icon: "icon-pizza",
            title: 'Пицца',
            isActive: false
        },
        {
            icon: "icon-sushi",
            title: 'Суши',
            isActive: false
        },
        {
            icon: "icon-juice",
            title: 'Напитки',
            isActive: false
        },
        {
            icon: "icon-snakes",
            title: 'Закуски',
            isActive: false
        },
        {
            icon: "icon-combo",
            title: 'Комбо',
            isActive: false
        },
        {
            icon: "icon-desert",
            title: 'Десерты',
            isActive: false
        },
        {
            icon: "icon-souce",
            title: 'Соусы',
            isActive: false
        },
    ];

    const categoriesList = document.querySelector('.categories__list');
    if (categoriesList) {
        let categoriesHtml = '';
        categories.forEach(function (category) {
            let isActive = '';
            if (category.isActive == true) {
                isActive = 'active';
            }
            categoriesHtml = categoriesHtml + `<li>
                        <a href="#" class="categories__link ${isActive}">
                            <svg width="24" height="24">
                                <use xlink:href="images/icons/sprite.svg#${category.icon}" />
                            </svg>
                            ${category.title}
                        </a>
                    </li>`;
        });
        categoriesList.innerHTML = categoriesHtml;
    }

    let cartItems = [
        {
            id: 1,
            image: 'images/product-1.jpg',
            name: 'Пепперони по-деревенски',
            desc: 'Традиционное тесто, 25 см',
            price: 399,
            quantity: 1
        },
        {
            id: 2,
            image: 'images/product-2.jpg',
            name: 'Пепперони по-деревенски',
            desc: 'Традиционное тесто, 25 см',
            price: 399,
            quantity: 1
        },
        {
            id: 3,
            image: 'images/product-3.jpg',
            name: 'Пепперони по-деревенски',
            desc: 'Традиционное тесто, 25 см',
            price: 399,
            quantity: 1
        },
    ];
    renderCartItems(cartItems);

    // получение корзины с сервера
    /*
    fetch('https://example.shaklein.dev/cart/').then(function (response) {
        return response.json();
    }).then(function (data) {
        cartItems = data.cartItems;
        renderCartItems(cartItems);
    });
    */

    // изменение количества товара
    const cartContainer = document.querySelector('.cart__items');
    if (cartContainer) {
        cartContainer.addEventListener('click', function (event) {
            // увеличение количества товара
            let buttonPlus = event.target.closest('.cart__item-plus');
            if (buttonPlus) {
                const container = event.target.closest('.cart__item');
                const productId = container.dataset.id;
                cartItems = increaseProductQuantity(cartItems, productId);
            }

            // уменьшение количества товара
            let buttonMinus = event.target.closest('.cart__item-minus');
            if (buttonMinus) {
                const container = event.target.closest('.cart__item');
                const productId = container.dataset.id;
                cartItems = decreaseProductQuantity(cartItems, productId);
            }
        });

        cartContainer.addEventListener('change', function (event) {
            // изменение количества товара через input
            let cartInput = event.target.closest('.cart__item-quantity');
            if (cartInput) {
                const container = cartInput.closest('.cart__item');
                const productId = container.dataset.id;
                if (!cartInput.value)
                    cartInput.value = 0; 
                cartItems = updateProductQuantity(cartItems, productId, cartInput.value);
            }
        });
    }

    // оформление заказа
    const chekoutButton = document.querySelector('.checkout__button');
    if (chekoutButton) {
        chekoutButton.addEventListener('click', function () {
            sendOrder(cartItems);
        });
    }

    // применение промокода
    const applyPromocodeButton = document.querySelector('.cart__apply-promocode');
    if (applyPromocodeButton) {
        applyPromocodeButton.addEventListener('click', function () {
            const promocodeInput = document.querySelector('input[name="promocode"]');
            hasDiscount = false;
            if (promocodeInput.value === '777') {
                hasDiscount = true;
            }
            renderTotalPrice(cartItems);
        });
    }
});

// функция отрисовки товаров в корзине
function renderCartItems(cartItems) {
    const cartItemsBlock = document.querySelector('.cart__items');
    if (cartItemsBlock) {
        let cartItemsHtml = '';
        cartItems.forEach(function (cartItem) {
            cartItem.sum = (cartItem.price * cartItem.quantity).toLocaleString();
            cartItemsHtml += `<div class="cart__item" data-id="${cartItem.id}">
                            <div class="cart__item-about">
                                <img src="${cartItem.image}" alt="" class="cart__item-img">
                                <div class="cart__item-info">
                                    <div class="cart__item-name">${cartItem.name}</div>
                                    <div class="cart__item-desc">${cartItem.desc}</div>
                                </div>
                            </div>
                            <div class="cart__item-numbers">
                                <div class="cart__item-calc">
                                    <button class="cart__item-minus">-</button>
                                    <input type="number" value="${cartItem.quantity}"
                                        class="cart__item-quantity" step="1">
                                    <button class="cart__item-plus">+</button>
                                </div>
                                <div class="cart__item-sum">${cartItem.sum} ₽</div>
                            </div>
                        </div>`;
        });
        cartItemsBlock.innerHTML = cartItemsHtml;
        renderTotalPrice(cartItems);
    }
}

// получение индекса товара в массиве по id
function getProductIndexById(cartItems, id) {
    const productIndex = cartItems.findIndex(function(cartItem) {
        return cartItem.id == id;
    });
    return productIndex;
}

// увеличение количества товара
function increaseProductQuantity(cartItems, id) {
    const productIndex = getProductIndexById(cartItems, id);
    const cartItem = cartItems[productIndex]; 
    cartItems = updateProductQuantity(cartItems, id, cartItem.quantity + 1);
    return cartItems;
}

// уменьшение количества товара
function decreaseProductQuantity(cartItems, id) {
    const productIndex = getProductIndexById(cartItems, id);
    const cartItem = cartItems[productIndex]; 
    cartItems = updateProductQuantity(cartItems, id, cartItem.quantity - 1);
    return cartItems;
}

// обновление количества товара
function updateProductQuantity(cartItems, id, quantity) {
    const productIndex = getProductIndexById(cartItems, id);

    quantity = parseInt(quantity);
    if (quantity > 999)
        quantity = 999;

    if (quantity <= 0) {
        cartItems = removeProductFromCart(cartItems, id);
        return cartItems;
    }

    cartItems[productIndex].quantity = quantity;

    renderCartItem(cartItems, id);
    renderTotalPrice(cartItems);

    return cartItems;
}

// удаление товара из корзины
function removeProductFromCart(cartItems, id) {
    const productIndex = getProductIndexById(cartItems, id);
    cartItems.splice(productIndex, 1);
    renderCartItems(cartItems);
    return cartItems;
}

// отрисовка суммы конкретного товара
function renderCartItem(cartItems, id) {
    const container = document.querySelector(`.cart__item[data-id="${id}"]`);
    const productIndex = getProductIndexById(cartItems, id);
    const cartItem = cartItems[productIndex];

    const productInput = container.querySelector('.cart__item-quantity');
    productInput.value = cartItem.quantity;

    const sum = (cartItem.quantity * cartItem.price).toLocaleString();
    container.querySelector('.cart__item-sum').textContent = sum + ' ₽';
}

// отрисовка общей суммы корзины
function renderTotalPrice(cartItems) {
    const cartTotalHtml = document.querySelectorAll('.cartTotalHtml');
    let totalCart = 0;
    cartItems.forEach(function (item) {
        totalCart += item.price * item.quantity;
    });
    if (hasDiscount) {
        totalCart = totalCart * 0.9;
    }
    if (cartTotalHtml.length) {
        cartTotalHtml.forEach(function (cartTotalItem) {
            cartTotalItem.textContent = totalCart.toLocaleString() + ' ₽';
        });
    }
}

// отправка заказа на сервер
function sendOrder(cartItems) {
    const nameInput = document.querySelector('input[name="name"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const emailInput = document.querySelector('input[name="email"]');
    const commentInput = document.querySelector('textarea[name="comment"]');
    const promocodeInput = document.querySelector('input[name="promocode"]');

    fetch('https://example.shaklein.dev/cart/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            comment: commentInput.value,
            promocode: promocodeInput.value,
            cartItems: cartItems
        }),
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        alert('Заказ успешно оформлен!');
        console.log(data);
    });
}