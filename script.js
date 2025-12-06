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





//document.querySelector('.info__link').addEventListener('click', function () {
//    document.querySelector('.info__text').classList.toggle('info__text--active');
//    if (this.textContent = 'Показать полностью') {
//        this.textContent = "Скрыть текст"
//    } else {
//        this.textContent = "Показать полностью"
//    }