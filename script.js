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

});




//document.querySelector('.info__link').addEventListener('click', function () {
//    document.querySelector('.info__text').classList.toggle('info__text--active');
//    if (this.textContent = 'Показать полностью') {
//        this.textContent = "Скрыть текст"
//    } else {
//        this.textContent = "Показать полностью"
//    }