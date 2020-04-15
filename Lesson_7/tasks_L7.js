// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".
// const div = document.createElement('div');
// const input = document.createElement('input');
// input.value = 'button';
// input.type = 'button';
// input.id = 'btn';
//
// div.id = 'text';
// div.style.background = 'blue';
// div.style.width = '400px';
// div.style.height = '400px';
//
// document.body.appendChild(div);
// document.body.appendChild(input);
//
// document.getElementById('btn').onclick = () => {
//     document.getElementById('text').style.display = 'none';
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const btn = document.createElement('button');
// btn.id = 'btn';
// btn.innerText = 'Press me';
// document.body.appendChild(btn);
//
// document.getElementById('btn').onclick = () => {
//     btn.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// const input = document.createElement('input');
// const btn = document.createElement('button');
//
// btn.id = 'btn';
// btn.innerText = 'check age';
// btn.style.background = 'blue';
// btn.style.color = 'white';
// input.id = 'inp';
// input.placeholder = 'your age?';
//
// document.body.appendChild(input);
// document.body.appendChild(btn);
//
//
//
// document.getElementById('btn').onclick = () => {
//     const age = document.getElementById('inp').value;
//
//     // alert(typeof +age);
//
//     if (+age < 18) {
//         alert('You are so joung for this site')
//
//     } else {
//         alert('welcome');
//     }
// };

// - Создайте меню, которое раскрывается/сворачивается при клике
// const menu = document.getElementById('menu');
// menu.onclick = () =>{
//     let a = document.getElementById('header-menu');
//     if (a.style.display === 'none') {
//         a.style.display = 'block'
//     } else {
//         a.style.display = 'none'
//     }
// };

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вывести список комментариев в документ, каждый в своем блоке.
//Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let listOfComments = [
//     {title: 'Hello', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Hello', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Hello', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Hello', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Hello', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Hello', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Hello', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Hello', body: 'lorem ipsum dolo sit ameti'},
// ];
//
//
// listOfComments.forEach(comment => {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//
//     h3.innerText = comment.title;
//     p.innerText = comment.body;
//
//     const btn = document.createElement('button');
//     btn.innerText = 'Show/hide text';
//
//     btn.onclick = (ev) => {
//         let text = document.querySelector('p');
//
//         if (text.style.display === 'block') {
//             text.style.display = 'none'
//         } else {
//             text.style.display = 'block'
//         }
//     }
//
//
//     div.appendChild(h3);
//     div.appendChild(p);
//     div.appendChild(btn);
//     document.body.appendChild(div);
// })


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const form = document.createElement('form');
// form.id = 'first-form';
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
//
// form.appendChild(input1);
// form.appendChild(input2);
// document.appendChild(form);
// TODO not working!!
// const form1 = document.forms.form1;
// const form2 = document.forms.form2;
//
//
// const input1 = form1.input1.value;
// const input2 = form1.input2.value;
// const input21 = form2.input21.value;
// const input22 = form2.input22.value;
//
// let btn = document.getElementById('btn');
//
// btn.onclick = () => {
// alert(input1+input2+input21+input22);
// };


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// const img1 = document.getElementById('first');
// const img2 = document.getElementById('second');
// const img3 = document.getElementById('third');
// const img4 = document.getElementById('fourth');
// const img5 = document.getElementById('five');
// const img6 = document.getElementById('six');
// const imgArr = [img1, img2, img3, img4, img5, img6];

let leftBtn = document.querySelector('#left'); // left btn
let rightBtn = document.querySelector('#right'); // right btn



let slides = document.querySelectorAll('img'); // all images

let i = 0; // flag for image

rightBtn.addEventListener('click', () => {
    ++i;

    if (i >= slides.length) {
        slides[i-1].classList.remove('block');
        i = 0;
        slides[i].classList.add('block')
    } else {
        slides[i-1].classList.remove('block');
        slides[i].classList.add('block')
    }
})



//     приклад з інтернету:
// // Берём элемент кнопки по её селектору;
//     let btnRight = document.querySelector(".btnRight");
// // Берём все картинки по их селектору;
// let slides = document.querySelectorAll("img");
// // Создаём переменную i;
// let i = 0;
//
// // При нажатие на кнопку будет срабатывать функция;
// btnRight.addEventListener("click", function () {
//     // Увеличивает переменную i;
//     ++i
//     // Условие: если i больше или равно размеру массива картинок слайда;
//     if (i >= slides.length) {
//         // То в предыдущей картинки удаляем класс block;
//         slides[i-1].classList.remove("block");
//         // Приравниваем i к нулю;
//         i = 0;
//         // Картинке с индексом ноль добавляем класс block;
//         slides[i].classList.add("block");
//         // Иначе;
//     } else {
//         // Также предыдущей картинки удаляем класс block;
//         slides[i-1].classList.remove("block");
//         // Картинке с индексом i добавляем класс block;
//         slides[i].classList.add("block");
//     }
// });


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// приклад з чату Zoom
// button.onclick = function () {
//     let newArray = input.value.split(' ');
//     console.log(newArray);
//     for (let i=0; i<newArray.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (newArray[i] == array[j]) {
//                 alert('STOP !@#$%');
//             }
//         }
//
//     }
//
// };
//
// - создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// - взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает
// в боди 2 кнопки (назад/вперед) при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии
// на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// Но если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и
// выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним
// на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
