// - 1 создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно
// присутствовать только 1 раз в одном объекте )
// let user = {
//     login : 'Roman',
//     password: 12345,
//     status: true
// };
//
// let wife = {
//     name: 'Natalia',
//     surname: 'Zaliutynska',
//     birthday: '04.08.1993'
// };
//
// let car = {
//     brand: 'opel',
//     model: 'vectra c',
//     year: 2003
// };
//
// let dog = {
//     nickname: 'Archi',
//     color: 'white',
//     age: 3
// };
//
// let flat = {
//     rooms: 4,
//     area: 85,
//     floor: 3
// };

// - 2 создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний
// объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] ,
// wife: { name: 'cherry' } };
//
// let user = {
//     name: 'Roman',
//     surname: 'Zaliutynski',
//     wife : {name: 'Natalia', age: 26},
//     skills: ['html5', 'css3', 'js']
// };
//
// let dog = {
//     nickname: 'Archi',
//     age: 4,
//     owner: {name: 'Serhii', age: 52},
//     habits: ['swimming','barking']
// };
//
// let flat = {
//     rooms: ['kitchen','bathroom','bedroom','hall'],
//     area: 85,
//     floor: 3,
//     residents: {owner: 'Natalia', tenant: 'Roman'}
// };

// TODO write 2 objects

// - 3 При помощи for in вывести все ключи всех объектов из задания 1 и 2
// from Task number 1 :
// for (const keys in user ) {
//     console.log(keys);
// }
//
// for (const keys in wife ) {
//     console.log(keys);
// }
//
//
// for (const keys in car ) {
//     console.log(keys);
// }
//
//
// for (const keys in dog ) {
//     console.log(keys);
// }
//
//
// for (const keys in flat ) {
//     console.log(keys);
// }
// from Task number 2 :
// for (const key in user) {
//     console.log(key);
// }
// for (const key in dog) {
//     console.log(key);
// }
// for (const key in flat) {
//     console.log(key);
// }

// - 4 При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// from Task number 1 :
// let userKeys = Object.keys(user);
// console.log(userKeys);
// let wifeKeys = Object.keys(wife);
// console.log(wifeKeys);
// let carKeys = Object.keys(car);
// console.log(carKeys);
// let dogKeys = Object.keys(dog);
// console.log(dogKeys);
// let flatKeys = Object.keys(flat);
// console.log(flatKeys);
//
// from Task number 2 :
// let userKeys = Object.keys(user);
// console.log(userKeys);
//
// let dogKeys = Object.keys(dog);
// console.log(dogKeys);
//
// let flatKeys = Object.keys(flat);
// console.log(flatKeys);

// - 5 Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
// let cars = [
//     carOne = {
//         model: 'Opel',
//         year: 2003,
//         power: 122,
//         color: 'green'
//     },
//     carTwo = {
//         model: 'Volkswagen',
//         year: 2001,
//         power: 110,
//         color: 'white'
//     },
//     carThree = {
//         model: 'Audi',
//         year: 2010,
//         power: 300,
//         color: 'black'
//     },
//     carFour = {
//         model: 'Mercedes',
//         year: 2005,
//         power: 150,
//         color: 'gray'
//     },
//     carFive = {
//         model: 'Toyota',
//         year: 2010,
//         power: 90,
//         color: 'purple'
//     },
//     carSixs = {
//         model: 'Honda',
//         year: 2012,
//         power: 170,
//         color: 'red'
//     },
//     carSeven = {
//         model: 'Mazda',
//         year: 2000,
//         power: 135,
//         color: 'blue'
//     },
//     carEight = {
//         model: 'Fiat',
//         year: 2018,
//         power: 120,
//         color: 'yellow'
//     },
//     carNine = {
//         model: 'Renault',
//         year: 1998,
//         power: 85,
//         color: 'pink'
//     },
//     carTen = {
//         model: 'Citroen',
//         year: 2007,
//         power: 100,
//         color: 'orange'
//     },
// ];

// - 6 Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
// let cities = [
//     citiOne = {
//         name: 'Kyiv',
//         population: 3000000,
//         country: 'Ukraine',
//         isCapital: true,
//     },
//     citiTwo = {
//         name: 'Warszaw',
//         population: 4000000,
//         country: 'Poland',
//         isCapital: true,
//     },
//     citiThree = {
//         name: 'London',
//         population: 6000000,
//         country:'Great Britain',
//         isCapital: true,
//     },
//     citiFour = {
//         name: 'Parys',
//         population: 4000000,
//         country: 'France',
//         isCapital: true,
//     },
//     citiFive = {
//         name: 'Madryd',
//         population: 3500000,
//         country: 'Spain',
//         isCapital: true,
//     },
//     citiSix = {
//         name:'Lisbon',
//         population: 4200000,
//         country: 'Portugal',
//         isCapital: true,
//     },
//     citiSeven = {
//         name: 'Berlin',
//         population: 5000000,
//         country: 'Germany',
//         isCapital: true,
//     },
//     citiEight = {
//         name: 'Prague',
//         population: 3500000,
//         country: 'Czech Republic',
//         isCapital: true,
//     },
//     citiNine = {
//         name: 'Milan',
//         population: 3600000,
//         country: 'Italy',
//         isCapital: false,
//     },
//     citiTen = {
//         name: 'Helsinki',
//         population: 6500000,
//         country: 'Finland',
//         isCapital: true,
//     },
// ];

// - 7 Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars = [
//     carOne = {
//         model: 'Opel',
//         year: 2003,
//         power: 122,
//         color: 'green',
//         driver: {
//             name: 'Roman',
//             age: 29,
//             sex: 'male',
//             experience: 12
//         }
//     },
//     carTwo = {
//         model: 'Volkswagen',
//         year: 2001,
//         power: 110,
//         color: 'white',
//         driver: {
//             name: 'Anton',
//             age: 25,
//             sex: 'male',
//             experience: 10
//         }
//     },
//     carThree = {
//         model: 'Audi',
//         year: 2010,
//         power: 300,
//         color: 'black',
//         driver: {
//             name: 'Natalia',
//             age: 26,
//             sex: 'female',
//             experience: 5
//         }
//     },
//     carFour = {
//         model: 'Mercedes',
//         year: 2005,
//         power: 150,
//         color: 'gray',
//         driver: {
//             name: 'Anna',
//             age: 24,
//             sex: 'female',
//             experience: 3
//         }
//     },
//     carFive = {
//         model: 'Toyota',
//         year: 2010,
//         power: 90,
//         color: 'purple',
//         driver: {
//             name: 'Iryna',
//             age: 25,
//             sex: 'female',
//             experience: 7
//         }
//     },
//     carSixs = {
//         model: 'Honda',
//         year: 2012,
//         power: 170,
//         color: 'red',
//         driver: {
//             name: 'Taras',
//             age: 30,
//             sex: 'male',
//             experience: 12
//         }
//     },
//     carSeven = {
//         model: 'Mazda',
//         year: 2000,
//         power: 135,
//         color: 'blue',
//         driver: {
//             name: 'Serhii',
//             age: 28,
//             sex: 'male',
//             experience: 9
//         }
//     },
//     carEight = {
//         model: 'Fiat',
//         year: 2018,
//         power: 120,
//         color: 'yellow',
//         driver: {
//             name: 'Olga',
//             age: 45,
//             sex: 'female',
//             experience: 20
//         }
//     },
//     carNine = {
//         model: 'Renault',
//         year: 1998,
//         power: 85,
//         color: 'pink',
//         driver: {
//             name: 'Ivan',
//             age: 32,
//             sex: 'male',
//             experience: 10
//         }
//     },
//     carTen = {
//         model: 'Citroen',
//         year: 2007,
//         power: 100,
//         color: 'orange',
//         driver: {
//             name: 'Oleg',
//             age: 35,
//             sex: 'male',
//             experience: 16
//         }
//     },
// ];

// -  проитерировать каждый массив из задания 5,6,7 при помощи while.
// iterating array from task number 5 :
//
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }
//
// iterating array from task number 6 :
//
// let i = 0;
// while (i < cities.length) {
//     console.log(cities[i]);
//     i++;
// }
// iterating array from task number 7 :
//
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

// -  проитерировать каждый массив из задания 5,6,7 при помощи for .
// iterating array from task number 5
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
//
// }
// iterating array from task number 6
// for (let i = 0; i < cities.length; i++) {
//     cities[i];
//
// }
// iterating array from task number 7
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
//
// }

// -  проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//
//  iterating array from task number 5
// for (const car of cars) {
//     console.log(car)
// }
//  iterating array from task number 6
// for (const city of cities) {
//     console.log(car)
// }
//  iterating array from task number 7
// for (const car of cars) {
//     console.log(car)
// }

// - взять объекты из задания 1 и превратить каждый в json.
//
// let jsonedUser = JSON.stringify(user);
// console.log(jsonedUser);
// let jsonedWife = JSON.stringify(wife);
// console.log(jsonedWife);
// let jsonedCar = JSON.stringify(car);
// console.log(jsonedCar);
// let jsonedDog = JSON.stringify(dog);
// console.log(jsonedDog);
// let jsonedFlat = JSON.stringify(flat);
// console.log(jsonedFlat);

// - взять json из задания 11 и превратить их обратно в объекты.
// let parsedUser = JSON.parse(jsonedUser);
// let parsedWife = JSON.parse(jsonedWife);
// let parsedCar = JSON.parse(jsonedCar);
// let parsedDog = JSON.parse(jsonedDog);
// let parsedFlat = JSON.parse(jsonedFlat);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let jsonedEl=0;
// for (let i = 0; i < cars.length; i++) {
//     jsonedEl = JSON.stringify(cars[i]);
//     console.log(jsonedEl);
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let jsonedEl=0;
// for (let i = 0; i < cities.length; i++) {
//     jsonedEl = JSON.stringify(cities[i]);
//     console.log(jsonedEl);
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и
// сразу скоприовать в новый массив.
// let jsonedEl = 0;
// let jsonedArr = [];
// for (let i = 0; i < cars.length; i++) {
//     jsonedEl = JSON.stringify(cars[i]);
//     jsonedArr.push(jsonedEl);
// }
// console.log(jsonedArr);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let users = [
    userOne = {
        name: 'Vasya',
        age: 30,
        skills:['JS','HTML5','CSS3'],
        sex: 'male'
    },
    userTwo = {
        name: 'Petya',
        age: 22,
        skills:['Python','HTML5','CSS3'],
        sex: 'male'
    },
    userThree = {
        name: 'Alina',
        age: 24,
        skills:['HTML5','CSS3', 'Bootstrap4'],
        sex: 'female'
    },
    userFour = {
        name: 'Taras',
        age: 35,
        skills:['Java','HTML5','CSS3', 'Ruby'],
        sex: 'male'
    },
    userFive = {
        name: 'Ivan',
        age: 40,
        skills:['JS','HTML5','CSS3', 'PHP'],
        sex: 'male'
    },
    userSix = {
        name: 'Natalia',
        age: 25,
        skills:['Adobe Photoshop','HTML5','CSS3', 'GIT'],
        sex: 'female'
    },
    userSeven = {
        name: 'Roman',
        age: 29,
        skills:['JS','HTML5','CSS3','GIT','SWIFT'],
        sex: 'male'
    },
    userEight = {
        name: 'Kolia',
        age: 23,
        skills:['JS','React','CSS3','Bootstrap4'],
        sex: 'male'
    }
];


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills
// всех пользователей в отедльный массив

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
// {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address:
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n
// та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні
// доступи та дії
// - знайти всі елементі, які мають id
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний

// ============   class   ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка
// вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом
// того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//todo add rules

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує)
// в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в
// свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then()
// сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с
// соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой
// комментарий принадлежит какому посту


// ******************************************************************************************************


// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
//
// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
//
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка


// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний


// =====class=======
//
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір
// тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.
//     Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення