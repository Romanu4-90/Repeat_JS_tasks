// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     let div = document.createElement('div');
//     div.appendChild('h1');
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [2,1,12,19,11,10,-9,0,33,66];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(array[i]);;
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringArr = ['hello', 'Roman', 'Ukraine', 'Poland', 'OWU', 'Javascript', true, false];
// for (let i = 0; i < stringArr.length; i++) {
//     console.log(stringArr[i]);
//     ;
//
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let stringArr = ['hello', 'Roman', 'Ukraine', 'Poland', 'OWU', 666, true, false];
//
// let i = 0;
// while (i < 10) {
//     console.log(stringArr[i]);
//     i++;
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
//
// let stringArr = ['hello', 'Roman', 'Ukraine', null, 'OWU', 666, true, false];
//
// for (let i = 0; i < stringArr.length; i++) {
//     if ( typeof stringArr[i] === "boolean") {
//
//         console.log(stringArr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
// let stringArr = [29, 'Roman', 'Ukraine', null, 'OWU', 666, true, 12];
//
// for (let i = 0; i < stringArr.length; i++) {
//     if ( typeof stringArr[i] === "number") {
//
//         console.log(stringArr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
// let stringArr = [29, 'Roman', 'Ukraine', null, 'OWU', 666, true, 12];
//
// for (let i = 0; i < stringArr.length; i++) {
//     if ( typeof stringArr[i] === "string") {
//
//         console.log(stringArr[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
// let emptyArr = [];
//
// emptyArr[0] = 'Hello';
// emptyArr[1] = 'world';
// emptyArr[2] = undefined;
// emptyArr[3] = null;
// emptyArr[4] = 'Ukraine';
// emptyArr[5] = true;
// emptyArr[6] = 0;
// emptyArr[7] = 12;
// emptyArr[8] = false;
// emptyArr[9] = 'owu';
// emptyArr[10] = 666;
//
// for (let i = 0; i < emptyArr.length; i++) {
//     console.log(emptyArr[i]);
//
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
// console.log('крок:' + ' ' + i);
// document.write('крок:' + ' ' + i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
// console.log('крок:' + ' ' + i);
// document.write('крок:' + ' ' + i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
// console.log('крок:' + ' ' + i);
// document.write('крок:' + ' ' + i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//
//         console.log('крок:' + ' ' + i);
// // document.write('крок:' + ' ' + i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//
//         console.log('крок:' + ' ' + i);
// document.write('крок:' + ' ' + i);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let m = 0; m < 2; m++) {
//     for (let s = 0; s < 120; s++) {
//         if (m < 2 && s < 60) {
//             console.log( m +  'minutes' + ' ' + s + 'seconds')
//         }
//     }
//     console.log('2 minutes');
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h = 0; h < 3; h++) {
//
//     for (let m = 0; m < 60; m++) {
//
//         for (let s = 0; s < 60; s++) {
//
//             if ((h < 2 && m < 60 && s < 60) || (h === 2 && m < 20 && s <= 60)) {
//
//                 console.log(h + 'hours' + ' ' + m + 'minutes' + ' ' + s + 'seconds')
//             }
//         }
//     }
// }
// console.log(2 + 'hours' + ' ' + 20 + 'minutes' + ' ' + 0 + 'seconds' + ' ' + 'Time is up!!')


// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
//
// let word =  '';
//
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];
// }
// console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
//
// let word = '';
// let i = 0;
// while (i < arr.length) {
//     word+=arr[i];
//     i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let word = '';
// for (const letter of arr) {
//     word += letter;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
//
// let word = '';
//
// for (const letter in arr) {
//     word += arr[letter];
// }
// console.log(word);
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = [ 'a', 'b', 'c'];
// let a = 1;
// for (let i = 0; i < 3; i++) {
//     if (a <= 3) {
//         arr.push(a++);
//     }
//
// }
// console.log(arr);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1, 2, 3];
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     newArr.unshift(arr[i]);
// }
// console.log(newArr);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
// let a = 4;
// for (let i = 0; i < arr.length; i++) {
//     if (a <= 6) {
//     arr.push(a++)
//     }
// }
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// let firstEl = arr.shift();
//
// console.log(firstEl);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// let lastEl = arr.pop();
//
// console.log(lastEl);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// firstelem = arr.slice(0,1);
// otherelem = arr.slice(3);
// let chArr = firstelem.concat(otherelem);
// console.log(chArr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// let nArr = arr.slice(3);
// console.log(nArr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// let nArr = arr.slice(0,2);
// console.log(nArr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr  = [1, 2, 3, 4, 5];
//
// arr.splice(2,0, "a", "b","c");
//
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let arr  = [1, 2, 3, 4, 5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let numbers = [2,1,12,19,11,10,-9,0,33,66];
//
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] !== 0 && numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     } ;
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push ()
// скопіювати значення одного масиву в інший
// let numbers = [2,1,12,19,11,10,-9,0,33,66];
// let copiedArr = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     copiedArr.push(numbers[i]);
// }
// console.log(copiedArr);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.
// let numbers = [2,1,12,19,11,10,-9,0,33,66];
// let copiedArr = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     copiedArr[i] = numbers[i];
// }
// console.log(copiedArr);

// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }
// зворотній напрямок:
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = arr.length-1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }

//     2. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// зворотній напрямок :
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
//
// while(i < arr.length) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }
// зворотній напрямок:
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = arr.length -1;
//
// while(i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }
// зворотній напрямок :
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >= 0 ; i--) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
// while(i<arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }
// зворотній напрямок:
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = arr.length - 1;
// while(i>= 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
// // зворотній напрямок:
// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = arr.length-1; i >= 0; i--) {
//     if(arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"
//
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);
// // зворотній напрямок :
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = arr.length-1; i >= 0; i--) {
//     if (arr[i] % 3 === 0){
//         arr[i] = 'okten';
//     }
//     console.log(arr[i]);
// }


// 8. вивести масив в зворотньому порядку.
//
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) // ++DONE

// ****************************************************************************************

// 1  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.

// let emptyArr = [];
//
// for (let i = 0; i < 50; i++) {
//     let randomVal = parseInt(Math.random() * 150);
//     if (randomVal % 2 === 0) {
//
//         emptyArr.push(randomVal)
//     }
// }
// console.log(emptyArr);
// 2. заповнити його 50 непарними числами за допомоги циклу.
// let emptyArr = [];
//
// for (let i = 0; i < 50; i++) {
//     let randomVal = parseInt(Math.random() * 150);
//     if (randomVal % 2 !== 0) {
//
//         emptyArr.push(randomVal)
//     }
// }
// console.log(emptyArr);
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let emptyArr = [];
//
// for (let i = 0; i < 10; i++) {
//     let randomVal = parseInt(Math.random() * (738 - 8) - 8);
//         emptyArr.push(randomVal)
// }
//
// console.log(emptyArr);

// 2. вывести на консоль  каждый третий елемент
// let arr1 = [572, 97, 353, 636, 513, 130, 238, 390, 56, 331];
//
// for (let i = 0; i < arr1.length; i+=3) {
//     console.log(arr1[i]);
// }
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// let arr = [572, 97, 353, 636, 513, 130, 238, 390, 56, 331];
//
// for (let i = 0; i < arr.length; i+=3) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// let arr = [572, 97, 353, 636, 513, 130, 238, 390, 56, 331];
//let newArr = [];
// for (let i = 0; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// let arr = [572, 97, 353, 636, 513, 130, 238, 390, 56, 331];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// let arr = [100,250,50,168,120,345,188];
//
// let middlePrice = 0;
// for (let i = 0; i < arr.length; i++) {
//     middlePrice += arr[i];
// }
//
// console.log(middlePrice / arr.length);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [1,12,-4,10,3,33,9,0];
// let newArr = [];
// let addedVal = 1;
// for (let i = 0; i < 10; i++) {
//     let randomVal = parseInt(Math.random() * 100);
//
//     newArr.push(randomVal * 5);
// }
// console.log(newArr);

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 3);
//
// }
// console.log(newArr);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
//
// let arr = [1,12,'okten',-4,'js',10,'hello',3,33,true,9,0];
//
// let numbers = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         numbers.push(arr[i])
//     }
// }
//
// console.log(numbers);