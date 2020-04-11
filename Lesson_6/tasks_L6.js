// - создать массив с 20 числами.
// let arr = [16,  12, -5,  68, 97, 55, 50, 64,  92, 40, 112, -5, 76, 49, 125, 117, 24,  95, -8, -6];

// -- при помощи метода sort отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sortedArr = arr.sort((a, b) => a - b); // від меншого до більшого
// console.log(sortedArr);
// let sortedArr = arr.sort((a, b) => b - a); // від більшого до меншого
// console.log(sortedArr);
// let sortedArr = arr.sort(); // переводить елементи в строки і сортує по алфавіту, а числа по зростанню;
// console.log(sortedArr);

// -- при помощи filter получить числа кратные 3
// let multipleNumber = arr.filter(value => value % 3 === 0);
// console.log(multipleNumber);

// -- при помощи filter получить числа кратные 10
// let multipleNumber = arr.filter(value => value % 10 === 0);
// console.log(multipleNumber);

// -- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let addedNumbers = arr.map(value => value*3);
// console.log(addedNumbers);


// - создать массив со словами на 15-20 элементов.
// let words = ['Roman', 'opel', 'okten', 'js', 'html', 'css', 'Ukraine', 'Poland', 'Volkswagen', 'Ferrari', 'Dodge', 'Acura',
//     'Chevrolet', 'Honda'];

// -- отсортировать его по алфавиту в восходящем порядке.
// let sortedArr = words.sort((a, b) => {
//     let nameA = a.toLowerCase();// щоб порівнювало елементи не зележно з якої букви написаний кожен(велика чи мала)
//     let nameB = b.toLowerCase();// щоб порівнювало елементи не зележно з якої букви написаний кожен(велика чи мала)
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
// });
// console.log(sortedArr);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortedArr = words.sort((a, b) => {
//     let nameA = a.toLowerCase();// щоб порівнювало елементи не зележно з якої букви написаний кожен(велика чи мала)
//     let nameB = b.toLowerCase();// щоб порівнювало елементи не зележно з якої букви написаний кожен(велика чи мала)
//     if (nameB < nameA) return -1;
//     if (nameB > nameA) return 1;
// });
// console.log(sortedArr);

// -- отфильтровать слова длиной менее 4х символов
// let filtredArr = words.filter(word => word.length > 4);
// console.log(filtredArr);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let formattedArr = words.map((word) => word + '!');
// console.log(formattedArr);

//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortFromYears = users.sort((a, b) => a.age - b.age); // зростання
// let sortFromYears = users.sort((a, b) => b.age - a.age); // спадання
// console.log(sortFromYears);


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let nameLengthsArr = users.sort((a, b) => a.name.length - b.name.length);// від найменш
// let nameLengthsArr = users.sort((a, b) => b.name.length - a.name.length);// від найбільш.
// console.log(nameLengthsArr);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// перший спосіб:
// let newUsers = [];
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     user.id = i+1;
//     newUsers.push(user);
// }
// console.log(newUsers);
// другий спосіб with method  map:
// - відсортувати його за індентифікатором
// const newUsers = users.map((user,index) => {
//     user.id = index+1;
//     return user;
// }).sort((firstUser, secondUser) => secondUser.id - firstUser.id);
//
// console.log(newUsers);


// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calc(a,b,cb) {
//  cb(a,b);
// }
//
// calc(1,2,function(a,b) {
//     console.log(a + b);
// });

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calc(a, b, c, cb) {
//     cb(a, b, c);
// }
//
// calc(1, 2, 3, function (a, b, c) {
//     console.log((a + b) * c);
// });


// =============КЛАССНАЯ РАБОТА=================
// let cars = [
//     {producer: "subaru", model: "wrx", year: 2010,color: "blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer: "subaru",model: "legacy",year: 2007,color: "silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer: "subaru",model: "tribeca",year: 2011,color: "white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer: "subaru",model: "leone", year: 1998,color: "yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer: "subaru",model: "impreza",year: 2014,color: "red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer: "subaru",model: "outback",year: 2014,color: "red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5,power: 120},
//     {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5,power: 120},
//     {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
//     {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2,power: 180},
//     {producer: "mercedes",model: "e200",year: 1990,color: "silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer: "mercedes",model: "e63",year: 2017,color: "yellow", type: "sedan",engine: "amg63",volume: 3,power: 400},
//     {producer: "mercedes",model: "c250",year: 2017,color: "red", type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// let filtredCars = cars.filter(car => car.volume > 3);
// console.log(filtredCars);

// - двигун = 2л
// let filtredCars = cars.filter(car => car.volume === 2);
// console.log(filtredCars);

// - виробник мерс
// let filtredCars = cars.filter(car => car.producer === 'mercedes');
// console.log(filtredCars);

// - двигун більше 3х літрів + виробник мерседес
// let filtredCars = cars.filter(car => car.producer === 'mercedes' && car.volume > 3);
// console.log(filtredCars);

// - двигун більше 3х літрів + виробник субару
// let filtredCars = cars.filter(car => car.producer === 'subaru' && car.volume > 3);
// console.log(filtredCars);

// - сили більше ніж 300
// let filtredUsers = cars.filter((car) => car.power > 300);
// console.log(filtredUsers);

// - сили більше ніж 300 + виробник субару
// let filtredUsers = cars.filter(car => car.producer = 'subaru' && car.power > 300);
// console.log(filtredUsers);

// - мотор серіі ej
// let selectedCars = cars.filter(car => car.engine.startsWith('ej'));
// console.log(selectedCars);


// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let selectedCars = cars.filter(car => {
//     if (car.producer === 'subaru' && car.engine.startsWith('ej') && car.power > 300) {
//         return car;
//     }
//
// });
// console.log(selectedCars);

// - двигун меньше 3х літрів + виробник мерседес
// let filtredUsers = cars.filter(car => car.producer === 'mercedes' && car.volume < 3);
// console.log(filtredUsers);

// - двигун більше 2л + сили більше 250
// let filtredUsers = cars.filter(car => car.power > 250 && car.volume > 2);
// console.log(filtredUsers);
// - сили більше 250  + виробник бмв
// let filtredUsers = cars.filter(car => car.producer === 'bmw' && car.power > 250);
// console.log(filtredUsers);


// - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Luchakivska', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Pidvalna', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Prospekt Shevchenka', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Pasichna', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Karmeliuka', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Zelena', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Sacharova', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Doroshenka', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Velukoho Vol', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Pekarska', number: 121}}
// ];
// -- отсортировать его по id пользователей
// let sortedUsers = usersWithAddress.sort((a, b) => b.id - a.id); // від найб до найм;
// console.log(sortedUsers);

// -- отсортировать его по id пользователей в обратном опрядке
// let sortedUsers = usersWithAddress.sort((a, b) => a.id - b.id); // від найб до найм;
// console.log(sortedUsers);

// -- отсортировать его по возрасту пользователей
// let sortedUsers = usersWithAddress.sort((a, b) => b.age - a.age); // від найб до найм;
// console.log(sortedUsers);
// -- отсортировать его по возрасту пользователей в обратном порядке
// let sortedUsers = usersWithAddress.sort((a, b) => a.age - b.age); // від найм до найб;
// console.log(sortedUsers);

// -- отсортировать его по имени пользователей
// let sortedUsers = usersWithAddress.sort((a, b) => {
//     if(a.name > b.name) return 1;
//     if(a.name < b.name) return -1;
// });
// console.log(sortedUsers);

// -- отсортировать его по имени пользователей в обратном порядке
// let sortedUsers = usersWithAddress.sort((a, b) => {
//     if(b.name > a.name) return 1;
//     if(b.name < a.name) return -1;
// });
// console.log(sortedUsers);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let sortedUsers = usersWithAddress.sort((a, b) => {
//     if(a.address.street > b.address.street) return 1;
//     if(a.address.street < b.address.street) return -1;
// });
// console.log(sortedUsers);

// -- отсортировать его по номеру дома по возрастанию
// let sortedUsers = usersWithAddress.sort((a, b) => a.address.number - b.address.number );
// console.log(sortedUsers);

// -- отфильтровать (оставить) тех кто младше 30
// let youngestThen30 =  usersWithAddress.filter(user => user.age < 30 );
//
// console.log(youngestThen30);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filtredArr = usersWithAddress.filter(user => user.status === false);
// console.log(filtredArr);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filtredArr = usersWithAddress.filter(user => user.status === false && user.age < 30);
// console.log(filtredArr);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filtredUsers = usersWithAddress.filter(user => user.address.number % 2 === 0 );
// console.log(filtredUsers);


// ======ДОПОЛНИТЕЛЬНО========

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//
// let cars = [
//     {model: 'opel vectra', enginePower: 140, owner: {name: 'Roman', age: 28, driveExp: 8}, price: 4000, prodYear: 2002},
//     {model: 'opel astra', enginePower: 110, owner: {name: 'Taras', age: 26, driveExp: 4}, price: 6000, prodYear: 2008},
//     {
//         model: 'volkswagen golf',
//         enginePower: 100,
//         owner: {name: 'Antoni', age: 25, driveExp: 6},
//         price: 3000,
//         prodYear: 2003
//     },
//     {
//         model: 'opel insignia',
//         enginePower: 160,
//         owner: {name: 'Orest', age: 44, driveExp: 18},
//         price: 10000,
//         prodYear: 2012
//     },
//     {
//         model: 'mini cooper',
//         enginePower: 170,
//         owner: {name: 'Natalia', age: 26, driveExp: 3},
//         price: 5000,
//         prodYear: 2001
//     },
//     {model: 'bmw 320', enginePower: 140, owner: {name: 'Misha', age: 32, driveExp: 10}, price: 3800, prodYear: 2000},
//     {model: 'audi a6', enginePower: 180, owner: {name: 'Ira', age: 27, driveExp: 2}, price: 14000, prodYear: 2010},
// ];
//
// let newDrivers = [
//     {name: 'Andrii', age: 33, driveExp: 12},
//     {name: 'Oleh', age: 34, driveExp: 13},
//     {name: 'Mark', age: 38, driveExp: 14},
//     {name: 'Derek', age: 39, driveExp: 15},
//     {name: 'Phill', age: 40, driveExp: 16},
//     {name: 'Tom', age: 41, driveExp: 17},
//     {name: 'Kevin', age: 42, driveExp: 18},
// ];

//Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10%
//(переприсвоєння змінної потужності). i вартість на 5%;
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//
// with functions:
// function changePower(cars) {
//     for (let i = 0; i < cars.length; i++) {
//         if (i % 2 === 0) {
//           cars[i].enginePower *= 1.1;
//         }
//     }
//     console.log(cars);
// }
// changePower(cars);
//
// with loop
// for (let i = 0; i < cars.length; i+=2) {
//     cars[i].enginePower *= 1.1;
//     cars[i].price *= 1.05;
// }
// console.log(cars);


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший
// за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].owner.age > 25 && cars[i].owner.driveExp < 5) {
//         cars[i].owner.driveExp +=1;
//     }
// }
// console.log(cars);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sum = cars.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.price;
// },0);
//
// console.log(sum);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший
// индекс заданного элемента.
//Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не
//более 10 элементов.
//Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 11, 4, 4, 4, 4, 7, 7, 9, 14, 9, 12, 9, 11];
// first method:
// function findIndexOfKey(array, key) {
//             let minIndex = array.indexOf(key);
//             let maxIndex = array.lastIndexOf(key);
//
//             return `minIndex = ${minIndex}, maxIndex = ${maxIndex}`;
// }
// console.log(findIndexOfKey(arr, 4));
//
// second method:
// let key = 4, maxMinIndex = [], maxInd, minInd;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === key) {
//         maxMinIndex.push(i);
//     }
//     maxInd = Math.max(...maxMinIndex);
//     minInd = Math.min(...maxMinIndex);
//
// }
// // console.log(maxMinIndex);
// console.log(`minInd = ${minInd}, maxInd = ${maxInd}`);





