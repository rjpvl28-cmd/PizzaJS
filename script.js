// alert('retard all') 
// выводит окошко на экран//

// Только раскрытие текста
// document.querySelector('.info__link').addEventListener('click', function () {
//    this.remove();
//    document.querySelector('.info__text').classList.add('info__text--active');
// }); 

let buttonText;  
let buttonText2 = "Скрыть текст";

// раскрыть_свернуть

document.querySelector('.info__link').addEventListener('click', function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    buttonText = this.textContent;
    this.textContent = buttonText2;
    buttonText2 = buttonText;
})


// ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
    const popupFilter = document.querySelector('.popup-filter');

    if (popupFilter) {
        const buttonPopup = document.querySelector('.catalog__filter--button');
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

    let titles = [
        'Общее',
        'Сыр',
        'Мясо',
        'Компонент'
    ];

    let buttons = [
        [
            'Хит', 
            'Новинка', 
            'С мясом', 
            'Вегетарианская', 
            'С курицей', 
            'Без лука', 
            'С грибами', 
            'С морепродуктами', 
            'Барбекю',
            'Лосось', 
        ],
        [
            'Реджанито',
            'Моцарелла',
            'Чеддер',
            'С голубой плесенью',
            'Смесь итальянских сыров',
            'Мягкий молодой сыр лука',
        ],
        [
            'Пепперони',
            'Свинина',
            'Ветчина',
            'Бекон',
            'Говядина',
            'Чоризо',
            'Колбаски',
            'Куриная грудка',
        ],
        [
            'Креветка',
            'Ананасы',
            'Шампиньоны',
            'Лук',
            'Перец халапеньо',
            'Орегано',
            'Зеленый перец',
            'Томаты',
            'Чеснок',
            'Красный перец',
            'Оливки',
            'Маслины',
            'Клубника',
            'Смесь итальянских трав',
        ]
    ];

    const groups = document.querySelector('.popup-filter__groups');
    if (groups) {
        let groupHtml = '';
        for(let i = 0; i < titles.length; i = i + 1) {
            let buttonsHtml = '';
            for(let j = 0; j < buttons[1].length; j = j + 1) {
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

    // Задача: сгенерировать кнопки от 1 - 10
    // 1. Ищем на странице элемент .here
    // 2. Проверяем нашли ли мы этот элемент
    // 3. Создаем переменную для накопления html-кнопок
    // 4. Запускаем цикл от 1 до 10
    // 5. Наращиваем переменную html-кнопок с использованием текущего индекса
    // 6. После цикла вставляем полученный html в нужное место через outerHTML





    const pagination = document.querySelector ('.here');
        if (pagination) {
            let hereHtml = '';
            for(let i = 1; i <= 10; i = i + 1) {
                hereHtml = hereHtml + `<li>
                <a href="#" class="pagination__button">${i}</a></li>`
            }
            pagination.outerHTML = hereHtml;
            
  //          for(let i = 1; i >= 3; i = i + 1) {
  //              hereHtml = hereHtml + `<li><span>${'...'}</span></li>`
 //           }
 //           pagination.inerHTML = hereHtml;    
        }
        
    let categories = [
        {
            icon: "icon-sale",
            title: 'Акции',
            isActive: false
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
    ];
    let categoriesList = document.querySelector('.categories__list');
        if (categoriesList) {
            let categoriesHtml = '';
            categories.forEach(function (category) {
                let isActive = '';
                if (category.isActive == true) {
                    isActive = 'active'
                }
                categoriesHtml = categoriesHtml + `<li>
                        <a href="#" class="${isActive}">
                            <svg width="24" height="24">
                                <use xlink:href="images/icons/sprite.svg#${category.icon}icon-sale" />
                            </svg>
                            ${category.title}
                        </a>
                    </li>`
            });
            categoriesList.innerHTML = categoriesHtml;
        }
        


});
        //list.textContent = "hello world"
        //let a = "<button>hello<"
        //list.innerHTML = "<h2>Hello<br>world</h2>"
        //list.outerHTML = '<div class="popup-filter__chekbox active"><button>asdft</button></div>'


     //   for(let i = 0; i < buttons.length; i = i + 1) {
     //       let newElement = document.createElement('button')
     //       newElement.textContent = buttons[i]
     //      list.append(newElement)
        

      //  let newElement = document.createElement('button')
      //  newElement.textContent = 'hello'
      //  list.append(newElement)
        
      //  let newElement2 = document.createElement('button')
      //  newElement2.textContent = 'go'
      //  list.append(newElement2)
    
      //  let newElement3 = document.createElement('button')
      //  newElement3.textContent = 'sorry'
      //  list.prepend(newElement3)
    


//let m = [5, 4, 5, 2];
//console.log(m[0])
//m[1] = 7
//console.log(m);
//m[10] = 9
//console.log(m[10])
//m.push(588)
//m.length

// let a  = ['images/img1', 'Пицца', 600, 300, true];
//let pizzas  = [
//    {
//        title: '1',
 //       img: '343',
 //   },
 //   {
//        title: '2',
 //   },
//]
//let pizza = {
 //   img: 'images/img1',
 //   title: 'Пицца',
 //   oldPrice: 600,
 //   newPrice: 300,
 //   isHit: true
//};

// pizza['img1']
//pizza.title = 





//document.querySelector('.info__link').addEventListener('click', function () {
//    document.querySelector('.info__text').classList.toggle('info__text--active');
//    if (this.textContent = 'Показать полностью') {
//        this.textContent = "Скрыть текст"
//    } else {
//        this.textContent = "Показать полностью"
//    }