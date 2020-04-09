// - створити функцію яка виводить масив
// let arr = [1,2,3,4,5,6,true,'Roman'];
// function showArr(array) {
//     console.log(array);
//
//     for (const item of array) {
//         console.log(item);
//     }
// }
// showArr(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
// let arr = [];
// function fillArr() {
//     for (let i = 0; i < 10; i++) {
//         let elem = Math.floor(Math.random() * 100);
//
//         arr.push(elem);
//     }
// showArr(arr);
// }
// fillArr();

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function smallestNumber(a,b,c) {
    let smallest = Math.min(a, b, c);
    console.log(smallest);
    return smallest;

}
// smallestNumber(2,4,1);
let smNumb = smallestNumber(2,4,1);
console.log(smNumb);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function biggestNumber(a,b,c) {
//     console.log(Math.max(a, b, c));
// }
// smallestNumber(2,4,1);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
// function minMaxValue() {
//
//     let minVal = arguments[0];
//     let maxVal = arguments[0];
//
//     for (const item of arguments) {
//         if (item > maxVal) maxVal = item;
//         if (item < minVal) minVal = item;
//     }
//     console.log(`${maxVal} - max value`);
//
//     return minVal
// }
//
// let minValue = minMaxValue(-2, 1, 33, 65, 19, 29, -11);
//
// console.log(`${minValue} - min value `);

// - створити функцію яка повертає найбільше число з масиву
//
// let arr = [1, 2, 3, 4, 5, 6];
//
// // рішення за допомогою sort:
// // function biggestValFromArr(array) {
// //     array.sort((a, b) => {
// //         return b-a;
// //     })
// //     console.log(array[0]);
// // }
// // biggestValFromArr(arr);
//
// вирішення за допомогою оператора spread :
//
// let arr = [1, 2, 3, 4, -5, 6];
//
// function biggerVal(array) {
//     console.log(Math.max(...array));
// }
// biggerVal(arr);

// - створити функцію яка повертає найменьше число з масиву
//
// let arr = [1, 2, 3, 4, -5, 6, 0];
//
// function minValue(array) {
//     // // метод sort:
//     // let sortedArr = array.sort((a, b) => {
//     //     return a - b;
//     // })
//     //
//     // console.log(sortedArr[0]);
//     // console.log(sortedArr);
//
//     // за допомогою циклу:
//     let min = array[0];
//     for (const elem of array) {
//         if (elem < min) min = elem;
//     }
//     return min;
// }
//
// let val = minValue(arr);
// console.log(val);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//
// let arr = [1, 2, 3, -4, 5, 6];
// // за допомогою циклу:
// function sumator(array) {
//     let sum = 0;
//     for (const val of array) {
//         sum+=val;
//     }
//     return sum;
// }
//
// let result = sumator(arr);
// console.log(result);
//
// за допомгою метода - :
//
// function returnSum(array) {
//
//     let res = arr.reduce(function (firstVal, secondVal) {
//         return firstVal + secondVal;
//     });
//     return res;
// }
// let result = returnSum(arr);
// console.log(result);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень;
//
//let arr = [1, 2, 33, 44, 5, 6];
// за допомогою циклу в функції:
// function middleMean(array) {
//     let sum = 0;
//
//     for (const number of array) {
//         sum += number;
//     }
//
//     return sum / array.length;
// }
// let res = middleMean(arr);
// console.log(res);

// функція з методом reduce:
//
// function arithMean(array) {
//
//     let res = arr.reduce(function (prevVal, currVal) {
//         return prevVal + currVal;
//
//     });
//     return (res/array.length);
//
// }
// let averMean = arithMean(arr);
// console.log(averMean);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
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
//     'hello',
//     12,
//     [12, 22, true],
//     {
//         name: 'Roman',
//         age: 29,
//         eyes:'blue'
//     }
//
// ];
//
// при умові, що всі елементи в масиві - обєкти.
// function howManyElem(arr) {
//     return arr.length;
// }
//
// let res = howManyElem(rules);
// console.log(res);
//
// перевіримо чи всі елементи являються обєктом:
//
// console.log(`This array length is:  ${rules.length}`);
// let count = 0;
// function howManyElem(array) {
//
//     for (const element of array) {
//
//         if (typeof element === 'object' && !Array.isArray(element)) {
//             count++;
//         }
//
//     }
//         return count;
// }
//
// let howManyElem1 = howManyElem(rules);
// console.log(`${howManyElem1} - objects in this array`);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//
// console.log(`This array length is:  ${rules.length}`);
// let count = 0;
// function howManyElem(array) {
//
//     for (const element of array) {
//
//         if (typeof element === 'object' && !Array.isArray(element)) {
//             for (const key in element) {
//                 count++;
//             }
//         }
//
//     }
//         return count;
// }
//
// let howManyElem1 = howManyElem(rules);
// console.log(`${howManyElem1} - objects in this array`);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
//
// let arr = [1, 2, 3, 4];
// let arr1 = [2, 3, 4, 5];
//
// let result = [];
//
// function addArrays(array1,array2) {
//
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//
//             if (i === j) {
//                 result.push(array1[i] + array2[j]);
//             }
//         }
//     }
//     console.log(result);
// }
//
// addArrays(arr,arr1);
// варіант від ментора owu:
// function addArrays(array1, array2) {
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i] + array2[i]);
//     }
//     console.log(result);
// }
//
// addArrays(arr, arr1);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [1, 2, 3, 4, 5, 6];
// function interestingFunction(array, index) {
//     if (index < array.length) {
//         const temp = array[index];
//         array[index] = array[index+1];
//         array[index+1] = temp
//     }
//
//     return array;
// }
// let interestingFunction1 = interestingFunction(arr, 2);
// console.log(interestingFunction1);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок
// не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// підглянув в ментора!
// let arr = [1, 0, 6, 0, 3, -15, 12, 0, 11, 101, 14, 0, true, 66, 29, 0];
// let number = [];
// let zeroArr = [];
//
// function zeroInEnd(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             zeroArr.push(array[i]);
//         } else {
//             number.push(array[i])
//         }
//
//     }
//     return number.concat(zeroArr);
//
// }
//
// let res = zeroInEnd(arr);
// console.log(res);


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
//
// function textToBody(someTextToBody) {
//     let div = document.createElement('div');
//     div.innerText = `${someTextToBody}`;
//
//     return document.body.appendChild(div);
// }
// textToBody('Hello owu');

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function addToDom(element,elementText) {
//     let elem = document.createElement(`${element}`);
//     elem.innerText = `${elementText}`;
//     return document.body.appendChild(elem);
// }
// let htmlElement = addToDom('div', 'Text added from function');
// console.log(htmlElement);

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список
// цих автомобілів.
//
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
//     carSix = {
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
//
// додати список всіх автомобілів з масиву(вище) в отриманий ідентифікатор елементу:
//
// function listOfCars(array, id) {
//     const block = document.getElementById(`${id}`);
//     const ul = document.createElement('ul');
//
//     for (let i = 0; i < array.length; i++) {
//         const car = array[i];
//         const li = document.createElement('li');
//         li.innerText = `${i} - ${car.model}`
//
//         ul.appendChild(li);
//     }
//
//     block.appendChild(ul);
//     document.body.appendChild(block);
// }
//
// listOfCars(cars, 'list');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали, всі
// властивості авто в обному блоці:
// function listOfCars(array, id) {
//     const block = document.getElementById(`${id}`);
//
//     for (let i = 0; i < array.length; i++) {
//         const carBlock = document.createElement('div');
//         const car = array[i];
//         // let jsonedCar = JSON.stringify(car);
//         // carBlock.innerText = jsonedCar; // простіший варіант;

//         carBlock.innerText = `model - ${car.model}, year - ${car.year}, power - ${car.power}, color - ${car.color}`;
//
//         block.appendChild(carBlock);
//     }
//
//     document.body.appendChild(block);
// }
//
// listOfCars(cars, 'list');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список
// цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// function listOfCars(array, id) {
//     const carBlock = document.getElementById(`${id}`);
//
//     for (let i = 0; i < array.length; i++) {
//
//         const car = array[i];
//
//         const container = document.createElement('div');
//         container.style.border = '1px solid red';
//
//         const model = document.createElement('div');
//         const year = document.createElement('div');
//         const power = document.createElement('div');
//         const color = document.createElement('div');
//
//         model.innerText = ` model - ${car.model}; `;
//         year.innerText = ` year - ${car.year}; `;
//         power.innerText = ` power - ${car.power}; `;
//         color.innerText = ` color - ${car.color}; `;
//
//         container.appendChild(model);
//         container.appendChild(year);
//         container.appendChild(power);
//         container.appendChild(color);
//
//         carBlock.appendChild(container);
//     }
//     document.body.appendChild(carBlock);
//
// }
//
// listOfCars(cars, 'list');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з
// відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//
// let usersWithId = [
// {id: 1, name: 'vasya', age: 31, status: false},
// {id: 2, name: 'petya', age: 30, status: true},
// {id: 3, name: 'kolya', age: 29, status: true},
// {id: 4, name: 'olya', age: 28, status: false},
// ];
//
// let citiesWithId = [
// {user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},
// ];
//
//
// function concatArrays(array1,array2) {
//
//     for (const user of array1) {
//         for (const city of array2) {
//             if (user.id === city.user_id) {
//                 user.address = city;
//             }
//         }
//     }
//     return array1;
// }
//
//
// let userWithAddress = concatArrays(usersWithId,citiesWithId);
// console.log(userWithAddress);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило
// в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

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
//
// function createElemDom(array) {
//     const wrap = document.createElement('div');
//     wrap.className = 'wrap';
//
//     for (let i = 0; i < array.length; i++) {
//         const rule = array[i];
//
//         const div = document.createElement('div');
//         div.className = `rules rule${i}`;
//
//         const h2 = document.createElement('h2');
//         const p = document.createElement('p');
//
//         h2.innerText = rule.title;
//         p.innerText = rule.body;
//
//         div.appendChild(h2);
//         div.appendChild(p);
//         wrap.appendChild(div);
//     }
//
//     document.body.appendChild(wrap);
//
// }
//
// createElemDom(rules);



			