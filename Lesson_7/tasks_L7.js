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
//
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
// код від ментора:
// let imgArray = [
//     {
//         id: 1,
//         img_url: './img/1.jpg'
//     },
//     {
//         id: 2,
//         img_url: './img/2.jpg'
//     },
//     {
//         id: 3,
//         img_url: './img/3.jpg'
//     },
//     {
//         id: 4,
//         img_url: './img/4.jpg'
//     },
//     {
//         id: 5,
//         img_url: './img/5.jpg'
//     },
//     {
//         id: 6,
//         img_url: './img/6.jpg'
//     },
// ];
//
// const content = document.getElementById('content');
// const img = document.createElement('img');
// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');
//
// btn1.innerText = 'left';
// btn2.innerText = 'right';
// img.style.width = '600px';
//
// let index = 0;
//
// img.src = imgArray[index].img_url;
//
// content.appendChild(img);
// content.appendChild(btn1);
// content.appendChild(btn2);
//
// btn1.onclick = () => { // event from left move
//     index - 1 < 0
//         ? index = imgArray.length - 1
//         : index -= 1;
//     img.src = imgArray[index].img_url;
// };
//
// btn2.onclick = () => { // event from right move
//     index + 1 >= imgArray.length - 1
//         ? index = 0
//         : index += 1;
//     img.src = imgArray[index].img_url;
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let arrOfBadWords = ['fuck', 'ass', 'dick', 'prostitute', 'asshole',];
// const content = document.getElementById('content');
// const h3 = document.createElement('h3');
// const input = document.createElement('input');
// const button = document.createElement('button');
// button.innerText = 'check word';
// h3.innerText = 'please, enter a word :';
// input.type = 'text';
//
// content.appendChild(h3);
// content.appendChild(input);
// content.appendChild(button);
//
//
// button.onclick = () => {
//     let value = input.value.toLowerCase();
//        console.log(value);
//
//
//        for (const word of arrOfBadWords) {
//         if (value.length < 2) {
//                return alert('Its short word');
//         }
//
//            if (word === value) {
//             return alert('Its a bad word')
//         }
//     }
//         return alert(value);
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let arrOfBadWords = ['fuck', 'ass', 'dick', 'prostitute', 'asshole',];
// const content = document.getElementById('content');
// const h3 = document.createElement('h3');
// const input = document.createElement('input');
// const button = document.createElement('button');
// button.innerText = 'check word';
// h3.innerText = 'please, enter a word :';
// input.type = 'text';
//
// content.appendChild(h3);
// content.appendChild(input);
// content.appendChild(button);
//
//
// button.onclick = () => {
//     let value = input.value.toLowerCase();
//     let newArr = value.split(' ');
//     console.log(newArr[5]);
//
//     for (let i = 0; i < arrOfBadWords.length; i++) {
//         const badWord = arrOfBadWords[i];
//         for (let j = 0; j < newArr.length; j++) {
//             const userWord = newArr[j];
//             if (badWord === userWord) {
//        alert(`You have a bad word in your sentence -  "${userWord}" - change it!! `);
//             }
//         }
//     }
// };

// - создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// const content = document.getElementById('content');
// const  h3 = document.createElement('h3');
// h3.innerText = 'Content';
// content.appendChild(h3);
//
// const h2Array = document.getElementsByTagName('h2');
//
// for (let i = 0; i < h2Array.length; i++) {
//     const h2 = h2Array[i];
//
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     a.innerText = h2.innerText;
//     a.setAttribute('href', `#link${i}`);
//
//
//     li.appendChild(a);
//     content.appendChild(li);
// }
//
//
// for (let i = 0; i < h2Array.length; i++) {
//     const elem = h2Array[i];
//
//     const anchor = document.createElement('a');
//     anchor.setAttribute('name', `link${i}`);
//     anchor.innerText = elem.innerText;
//     elem.innerText = '';
//     elem.appendChild(anchor);
// }

// - взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (оставляет со статусом false);
// 2й - оставляет старше 29 лет включительно;
// 3й - оставляет тех у кого город киев;
// Данные выводить в документ.
// код ментора okten:
//
// const content = document.getElementById('content');// cюди поміщаєм весь контент
// const userDiv = document.createElement('div'); // div, щоб відділити кнопки від масиву, оскільки перерендрюємо
// // наш масив з юзерами.
//
// userDiv.appendChild(renderContent(usersWithAddress)); // перерендрений масив з юзерами, який будемо міняти чекбоксами
//
// const input1 = document.createElement('input'); // чекбокс 1
// const input2 = document.createElement('input'); // чекбокс 2
// const input3 = document.createElement('input'); // чекбокс 3
//
// const button = document.createElement('button'); // кнопка
//
// const label1 = document.createElement('label'); // лайбл з написом для чекбокса 1
// const label2 = document.createElement('label'); // лайбл з написом для чекбокса 2
// const label3 = document.createElement('label'); // лайбл з написом для чекбокса 3
//
// input1.type = 'checkbox'; // прописуємо тип для чекбокса 1
// input2.type = 'checkbox'; // прописуємо тип для чекбокса 2
// input3.type = 'checkbox'; // прописуємо тип для чекбокса 3
//
// button.innerText = 'Filter users'; // написа на кнопці
// button.style.marginLeft = '20px'; // стиль для кнопки
//
// label1.innerText = 'Status - false'; // назва для лейбла 1
// label2.innerText = 'Oldest then 29 yo'; // назва для лейбла 2
// label3.innerText = 'City is Kyiv'; // назва для лейбла 3
//
// content.appendChild(userDiv); // вставляємо до нашої div, div наповнену юзерами;
//
// content.appendChild(input1); // вставляємо інпут 1
// content.appendChild(label1); // вставляємо лейбл 1
// content.appendChild(input2); // вставляємо інпут 2
// content.appendChild(label2);// вставляємо лейбл 1
// content.appendChild(input3); // вставляємо інпут 3
// content.appendChild(label3); // вставляємо лейбл 1
// content.appendChild(button); // вставляємо кнопку
//
//
//
// button.onclick = (ev) => { // подія на кнопку
//     let myArray = JSON.parse(JSON.stringify(usersWithAddress));// перерендрюємо масив з юзерами,щоб міняти його
//        // чекбоксами за допомогою json, щоп правильно пенлерився в браузері;
//
//        // console.log(myArray);
//     if (input1.checked) myArray = myArray.filter(value => !value.status); // дія при виборі 1 чекбоксу
//     if (input2.checked) myArray = myArray.filter(value => value.age >= 29); // дія при виборі 2 чекбоксу
//     if (input3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv'); // дія при виборі 3 чекбоксу
//
//     userDiv.innerHTML = ''; // затиражмо масив юзерів, який зараз є в div;
//     userDiv.appendChild(renderContent(myArray)); // передаємо новий масив через функцію, який заповнить div
//        // з відсортованими юзерами
//
//
// };
//
// function renderContent(array) {
//     let main = document.createElement('div'); // div, яку вілренлеримо юзерів методом forEach
//
//     array.forEach(item => {
//         let div = document.createElement('div');
//         div.innerText = JSON.stringify(item); // робимо з елементу масиву, строку, щоб валідно рендерилась в браузері
//         main.appendChild(div);
//     });
//     return main
// }



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
