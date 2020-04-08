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

const attrArray = [
    {titleOfAttr: 'href', actionOfAttr: 'Show the address to file'},
    {titleOfAttr: 'name', actionOfAttr: 'Sets the name of the anchor inside the document'},
    {titleOfAttr: 'tittle', actionOfAttr: 'Adds a tooltip to the link text'}
];

function Tag(titleOfTag, action, array) {

    this.titleOfTag = titleOfTag || 'No title';
    this.action = action || 'No action';
    this.array = attrArray.map(function (attrib) {
        return attrib;

    });
}

const  a = new Tag('a','linking', []);

console.log(a);
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
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: 'Vectra C GTS',
//     producer: 'OPEL',
//     year: 2002,
//     maxSpeed: 200,
//     engineCapacity: 1800,
//
//     drive() {
//         console.log(`We are riding with speed ${this.maxSpeed} km per hour`);
//     },
//
//     info(car) {
//         console.log(car)
//     },
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//
//     },
//
//     changeYear(year) {
//         this.year = this.newYear = year;
//         delete car.year
//     },
//
//     addDriver(name, age, experience, sex) {
//         this.driver = {
//             name: name,
//             age: age,
//             experience: experience,
//             sex: sex,
//         }
//     }
//
//
// };
//
// car.drive();
// car.increaseMaxSpeed(220);
// car.changeYear(2004);
// car.addDriver('Roman', '29', 12, 'male');
// car.info(car);

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,'
// + ' максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// function Car(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//
//    this.drive = function()  {
//         console.log(`We are riding with speed ${this.maxSpeed} km per hour`);
//     };
//
//    this.info = () => {
//        // console.log(this.model, this.year,this.producer, this.maxSpeed,this.engineCapacity);
//        console.log(this);
//    };
//
//    this.increaseMaxSpeed = (speed) => {
//        this.newSpeed = this.maxSpeed = speed;
//        delete this.maxSpeed;
//    };
//
//    this.changeYear = (year) => {
//      this.newYear = this.year = year;
//      delete this.year;
//    };
//
//     this.addDriver = function(name,age,experience,sex) {
//        this.driver = {
//            name: name,
//            age: age,
//            experience: experience,
//            sex: sex,
//        }
//    }
// }
//
// let volkswagen = new Car('Sirocco','VOLKSWAGEN',2012,280,'2500');
//
// volkswagen.drive();
// volkswagen.increaseMaxSpeed(300);
// volkswagen.changeYear(2015);
// volkswagen.addDriver('Roman',29,12,'male');
// volkswagen.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна ' +
// 'швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

//
// class Car {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//
//
//         this.drive = function () {
//             console.log(`We are riding with speed ${this.maxSpeed} km per hour`)
//         }
//
//         this.info = function () {
//             console.log(this);
//         }
//
//         this.increaseMaxSpeed = function (speed) {
//             this.newSpeed = this.maxSpeed = speed;
//             delete this.maxSpeed;
//         }
//
//     }
// }
//
// let toyota = new Car('PRADO', 'TOYOTA', 2005, 200, 3700)
// console.log(toyota);
// toyota.drive();
// toyota.increaseMaxSpeed(220);
// toyota.info();
//

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
