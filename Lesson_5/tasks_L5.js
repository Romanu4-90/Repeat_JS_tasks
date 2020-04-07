// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// Result:
//
// function Tags(tittleOfTag, action, attributes, tittleOfAttr, actionOfAttr, tittleOfAttr1, actionOfAttr1, tittleOfAttr2,
//               actionOfAttr2) {
//     this.tittleOfTag = tittleOfTag;
//     this.action = action;
//     // attributes:
//     this.attributes = new Array();
//
//     this.attributes.push({tittleOfAttr: tittleOfAttr, actionOfAttr: actionOfAttr},);
//     this.attributes.push({tittleOfAttr: tittleOfAttr1, actionOfAttr: actionOfAttr1},);
//     this.attributes.push({tittleOfAttr: tittleOfAttr2, actionOfAttr: actionOfAttr2},);
// //  другий варіант
//     // this.attributes[0] = new Object();
//     // this.attributes[1] = new Object();
//     // this.attributes[2] = new Object();
//     //attributes keys : values: // другий варіант
// //     this.attributes[0].tittleOfAttr = tittleOfAttr;
// //     this.attributes[0].actionOfAttr = actionOfAttr;
// //     this.attributes[1].tittleOfAttr1 = tittleOfAttr1;
// //     this.attributes[1].actionOfAttr1 = actionOfAttr1;
// //     this.attributes[2].tittleOfAttr2 = tittleOfAttr2;
// //     this.attributes[2].actionOfAttr2 = actionOfAttr2;
//
// }
//
// const tag = new Tags('a', 'linking into another sites',
//     'href',
//     'href',
//     'Show the address to file',
//     'name',
//     'Sets the name of the anchor inside the document',
//     'tittle',
//     'Adds a tooltip to the link text');
//
// console.log(tag);
// TODO // дописати решту тегів через функцію конструктор в 1 завданні!!

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// class Tag {
//     constructor(tittleOFTag, actionOfTag, attrs, tittleOfAttr, actionOfAttr,tittleOfAttr1, actionOfAttr1,tittleOfAttr2,
//                 actionOfAttr2) {
//         this.tittleOFTag = tittleOFTag;
//         this.actionOfTag = actionOfTag;
//         this.attrs = new Array();
//         this.attrs.push({tittleOfAttr: tittleOfAttr, actionOfAttr: actionOfAttr});
//         this.attrs.push({tittleOfAttr1: tittleOfAttr1, actionOfAttr1: actionOfAttr1});
//         this.attrs.push({tittleOfAttr2: tittleOfAttr2, actionOfAttr2: actionOfAttr2});
//     }
// }
//
// let a = new Tag('a','linking into another sites',
//     '',
//     'href',
//     'Show the address to file',
//     'name',
//     'Sets the name of the anchor inside the document',
//     'tittle',
//     'Adds a tooltip to the link text');
//
// console.log(a);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// Додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,'
// + ' максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна ' +
// 'швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
