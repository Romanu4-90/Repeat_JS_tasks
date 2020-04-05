// Viktor Fazer, [23 Mar 2020 at 21:08:11]:
// 1) присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false Вывести каждую при помощи console.log , alert, document.write //++ DONE!!!!
//
// 2) переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log ,
// alert, document.write // ++DONE
//
// 3) Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write // ++Done

// 4) при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать
// разные переменные. Вывести каждую при помощи console.log , alert, document.write // ++ DONE
// 5) Взять переменные из задания 4 и сконкатенировать их в одной переменной person. // ++DONE
// 6) Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи. //++ DONE
// 7) при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль //++DONE
// 8) при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера // ++ DONE
// 9) при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести
// их к соответсвующему типу.Сложить их между собой записав результат в переменную result и вывести
// в консоль браузера // ++ DONE
// 10) при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой
// записав результат в переменную  и вывести в консоль браузера // ++ DONE
// 11) при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое
// будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое
// число в степень второго числа. // ++ DONE
// 12) При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
// let a = 100; let b = '100'; let c = true; let d = undefined; // ++ DONE
// 13) Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true    // ++ DONE
//
// 14) Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));  // ++ DONE
//
//
// 15)  Дан массив:
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
// - обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
// Пример : вывести имя 1го объекта . Ответ : console.log(users[0].name). Будьте внимательны! 4й объект имеет индес 3!
//     -- статус Андрея
// -- статус Максима
// -- имя предпоследнего объекта
// -- имя третьего объекта
// -- возраст Олега
// -- возраст Оли
// -- возраст + имя 5го объекта
// -- возраст + сатус ани   // ++ DONE

// -Возьмите файл task1_template.html, подключите к нему скрипт, и работайте в нем.
//     Напишите код, который :

// -- получает текст из параграфа с id "content"
// let text = document.getElementById('content');
// console.log(text.innerText); // ++DONE

// -- получает текст из блока  с id "rules"
// let blockTest = document.getElementById('rules');
// console.log(blockTest.innerText);  // ++DONE

// -- замените текст параграфа с id 'content' на любой другой
// let textFromPh = document.getElementById('content');
// let chang = textFromPh.innerText = 'Hello, I`m changed that text now';  // ++DONE

// -- замените текст параграфа с id 'rules' на любой другой
// let blockText = document.getElementById('rules');
// blockText.innerText = 'And that text was changed';  // ++DONE

// -- поменятй каждому элементу цвет фона на красный
// document.getElementById('content').style.background = 'red';
// document.getElementById('rules').style.background = 'red';  // ++DONE

// -- поменятй каждому элементу цвет текста на синий
// document.getElementById('content').style.color = 'blue';
// document.getElementById('rules').style.color = 'blue';   // ++DONE

// -- получить весь список классов элемента id = rules и вывести в console.log()
// let classes = document.getElementById('rules');
// console.log(classes.innerHTML);  // ????? i dont know is that right ??

// -- получить все элементы с классом fc_rules
// let elem = document.getElementById('rules').getElementsByClassName('fc_rules');
// console.log(elem);

// -- поменять цвет текста у всех элементов fc_rules на красный)
// let elem = document.getElementsByClassName('fc_rules'); //TODO

// CLASS
//
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Hello';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);
//
// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.)
// найдите значения выражений: //++DONE
//    let a1 = 5 + 3,
//    let a2 = 5 - 3,
//    let a3 = 5 * 3,
//    let a4 = 5 / 3,
//    let a5 = 5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
//
// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений: //++DONE
//    let a6 = 5 % 3,
//    let a7 = 3 % 5,
//    let a8 = 5 + '3',
//    let a9 = '5' - 3,
//    let a10 = 75 + 'кг'
//
// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s. //++DONE

// let height = 23;
// let width = 10;
//
// let square = (height + width) * 2;
// console.log(square);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор
// возведения в степень ** ).
//
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write,
//     alert и console.log  //++DONE
// let str = 'Hello world!';
// console.log(str);
// document.write(str);
// alert(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой
// строки спомощью \n).
//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// let str1 = 'Who';
// let str2 = 'You';
// let str3 = 'are?'
// let concatenation = str1 + ' ' + str2 + ' ' + str3;
//
// console.log(concatenation);
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205 because str is a string, then a is also been string;
// document.write(str - a + "<br/>"); // 15 operator '-' do operation 20-5 = 15;
// document.write(str * "2" + "<br/>"); // 40 operator '*' do add operation with this variables;
// document.write(str / 2 + "<br/>"); // 10


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14");  // 3
//     parseInt("-7.875") // -7
// let a = parseInt("435"); // 435
// let b = parseInt("Вася");  // NaN


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться
// далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи
// метода alert
// let a = prompt('Enter first number : ');
// let b = prompt('Enter second  number : ');
//
//
// alert('Result is :' + ((+a) + (+b)));

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//
// let name = prompt('Enter your name : ');
// let surname = prompt('Enter your surname : ');
// let age = prompt('How old are you ? ');
//
// alert(`Hi ${name}  ${surname}  i am glad than you are  ${age}  year old`);


// практика:
// const a = 'Roman';
// const b = 'Natalia';
// const c = 'Iryna';
// //
// // console.log(a, b, c);
// // alert(a);
// // alert(b);
// // alert(c);
//
// document.write(a);
// document.write(b);
// document.write(c);

// const name = prompt('Enter your name: ');
// const surname = prompt('Enter your surname: ');
// const fathersName = prompt('Enter your fathers name: ');
//
// alert(name + ' ' + surname + ' ' + fathersName + ' ');
// console.log(name + ' ' + surname + ' ' + fathersName + ' ');
// document.write(name + ' ' + surname + ' ' + fathersName + ' ');

// let a = +prompt('Enter a number 1 :');
// let b = +prompt('Enter a number 2 :');
// let c = +prompt('Enter a number 3 :');
//
// console.log(a, b, c);

// let a = prompt('Enter a number 1: ');
// let b = prompt('Enter a number 2: ');
// let c = prompt('Enter a number 3: ');
// let d = prompt('Enter a number 4: ');
//
// let res = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
// console.log(res);

// попереднє завдання лише з float
// let a = prompt('Enter a number 1: ');
// let b = prompt('Enter a number 2: ');
// let c = prompt('Enter a number 3: ');
// let d = prompt('Enter a number 4: ');
//
// let res = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d);
// console.log(res);

// попереднє завдання лише з float + math
// let a = prompt('Enter a number 1: ');
// let b = prompt('Enter a number 2: ');
// let c = prompt('Enter a number 3: ');
// let d = prompt('Enter a number 4: ');
//
// let res = Math.round(a) + Math.round(b) + Math.round(c) + Math.round(d);
// console.log(res);

// let a = prompt('Enter number 1 : ');
// let b = prompt('Enter number 2 : ');
//
// let res = Math.pow(parseInt(a),parseInt(b));
// console.log(res);

// 12)
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// 13)
// let a = 5 < 6 //-> true
// let b = 5 > 6 //-> false
// let c = 5 == 6 //-> false
// let d = 5 >= 6 //-> false
// let e = 10 >= 10 //-> true
// let f = 10 <= 10 //-> true
// let h = 10 > 10 //-> false
// let g = 10 < 10 //-> false
// let j = 10 != 10 //-> false
// let k = 123 === '123' //-> false
// let l = 123 == '123' //-> true
// console.log(k);

// 14) Дополнительно:
// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 ); // true
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );  // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
// console.log(!!'-1'); // true
// console.log(Boolean(!!-1)); // true
// console.log(!!'0'); // true
// console.log(!!'null'); // true
// console.log(!!'undefined'); // true
// console.log(!!(3/'owu')); // false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false

// 15)  Дан массив:
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
// -- статус Андрея
// console.log(users[7].status);
// -- статус Максима
// console.log(users[4].status);
// -- имя предпоследнего объекта
// console.log(users[9].status);
// -- имя третьего объекта
// console.log(users[3].name)
// -- возраст Олега
// -- возраст Оли
// -- возраст + имя 5го объекта
// -- возраст + сатус ани
// console.log(users[5].age + ' ' + users[5].status);
