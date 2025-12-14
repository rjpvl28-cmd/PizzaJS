let totalCart = 0;

// ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
    
    // раскрытие текста в блоке info
    const infoLink = document.querySelector('.info__link')
    if (infoLink) {
        infoLink.addEventListener('click', function () {
            const infoText = document.querySelector('.info__text')
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
                popupFilter.classList.add('popup-filter--show')
                setTimeout(function () {
                    popupFilter.classList.add('popup-filter--active')
                }, 10);
            })
        }

        const buttonPopupClose = document.querySelector('.popup-filter__close');
        if (buttonPopupClose) {
            buttonPopupClose.addEventListener('click', function () {
                popupFilter.classList.remove('popup-filter--active')
                setTimeout(function () {
                    popupFilter.classList.remove('popup-filter--show')
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
                buttonsHtml = buttonsHtml + `<button>${buttons[i][j]}</button>`
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
                    </li>`
        });
        categoriesList.innerHTML = categoriesHtml;
    }

    let cartItems = [];

    fetch("https://example.shaklein.dev/cart/").then(function (responce) {
        return responce.json();
    }).then(function (data) {
        cartItems = data.cartItems;
        renderCartItems();
    });

    function renderCartItems() {

        const cartItemsBlock = document.querySelector('.cart__items');
        if (cartItemsBlock) {
            let cartItemsHtml = '';
            cartItems.forEach(function (cartItem, itemIndex) {
                cartItemsHtml += `<div class="cart__item">
                                <div class="cart__item-about">
                                    <img src="${cartItem.image}" alt="" class="cart__item-img">
                                    <div class="cart__item-info">
                                        <div class="cart__item-name">${cartItem.name}</div>
                                        <div class="cart__item-desc">${cartItem.desc}</div>
                                    </div>
                                </div>
                                <div class="cart__item-numbers">
                                    <div class="cart__item-calc">
                                        <button class="cart__item-minus" data-index="${itemIndex}">-</button>
                                        <input type="number" value="${cartItem.quantity}"
                                            class="cart__item-quantity" data-index="${itemIndex}">
                                        <button class="cart__item-plus" data-index="${itemIndex}">+</button>
                                    </div>
                                    <div class="cart__item-sum">${(cartItem.price * cartItem.quantity).toLocaleString()} ₽</div>
                                </div>
                            </div>`;
                totalCart += cartItem.price * cartItem.quantity;
            });
            renderTotalPrice(cartItems);
            cartItemsBlock.innerHTML = cartItemsHtml;

            const cartInputs = document.querySelectorAll('.cart__item-quantity');
            if (cartInputs.length) {
                cartInputs.forEach(function (cartInput) {
                    cartInput.addEventListener('input', function () {
                        if (this.value === '')
                            this.value = 0;
                        if (this.value > 999)
                            this.value = 999;
                        if (this.value < 0)
                            this.value = 0;
                        this.value = +this.value;
                        const cartItemIndex = this.dataset.index;
                        cartItems[cartItemIndex].quantity = this.value;

                        const cartItem = cartItems[cartItemIndex];
                        const total = cartItem.price * cartItem.quantity;

                        const container = this.closest('.cart__item-numbers');
                        const sumHtml = container.querySelector('.cart__item-sum');
                        if (sumHtml) {
                            sumHtml.textContent = total.toLocaleString() + ' ₽';
                        }
                        renderTotalPrice(cartItems);
                    }); 
                });
            }
        }
    }

    // увеличение и уменьшение количества товара
    const cart = document.querySelector('.cart__items');
    if (cart) {
        cart.addEventListener('click', function (event) {
            let buttonPlus = event.target.closest('.cart__item-plus');
            if (buttonPlus) {
                const productIndex = buttonPlus.dataset.index;
                const cartItem = cartItems[productIndex]; 
                const container = event.target.closest('.cart__item-numbers');
                const cartInput = container.querySelector('.cart__item-quantity');
                if (+cartInput.value < 999) {
                    cartInput.value = +cartInput.value + 1;
                    cartItems[productIndex].quantity = cartInput.value;
                    // отобразить новую итоговую цену
                    renderTotalPrice(cartItems);
                }
                const total = (+cartInput.value * cartItem.price);
                container.querySelector('.cart__item-sum').textContent = total + ' ₽';
            }

            let buttonMinus = event.target.closest('.cart__item-minus');
            if (buttonMinus) {
                const productIndex = buttonMinus.dataset.index;
                const cartItem = cartItems[productIndex]; 
                const container = event.target.closest('.cart__item-numbers');
                const cartInput = container.querySelector('.cart__item-quantity');
                if (+cartInput.value > 0) {
                    cartInput.value = +cartInput.value - 1;
                    cartItems[productIndex].quantity = cartInput.value;
                    // отобразить новую итоговую цену
                    renderTotalPrice(cartItems);
                }
                const total = (+cartInput.value * cartItem.price);
                container.querySelector('.cart__item-sum').textContent = total + ' ₽';
            }
        });
    }
    // отправка формы
    const checkoutButton = document.querySelector('.chekout__button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function () {
            fetch("https://example.shaklein.dev/cart/", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json;charset=utf-8"
                },
                body: JSON.stringify({
                    cartItems: cartItems,
                    name: 'ppp',
                    phone: '777',
                    email: '@gmail',
                    comment: 'thx',
                })
            }).then(function (responce) {
                return responce.json();

            }).then(function (data) {
                console.log(data)
            })
        })
    }
});

const cartTotalHtml = document.querySelectorAll('.cartTotalHtml');

function renderTotalPrice(items) {
    totalCart = 0;
    items.forEach(function (item) {
        totalCart += item.price * item.quantity;
    });
    if (cartTotalHtml.length) {
        cartTotalHtml.forEach(function (cartTotalItem) {
            cartTotalItem.textContent = totalCart.toLocaleString()
        });
    }
}