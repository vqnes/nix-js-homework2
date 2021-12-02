/*
Задание No1. Последнее значение цикла
Какое последнее значение выведет этот код? Почему?
let i = 3;
while (i) {
alert( i-- );
}

Ответ:
На последней итерации сначала выведется значение переменной i, т.е. 1,
а потом ей присвоиться значение i - 1. После этого цикл проверит условие
и завершится, поскольку 0 = false
*/
let i = 3;
while (i) {
    alert(i--);
}

/*
Задание No2.
Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
возрастанию, то удвоить их; в противном случае заменить значение каждой
переменной на противоположное. Вывести новые значения переменных A, B, C.
*/
let numberA = 5;
let numberB = 10;
let numberC = 11;

if (numberA <= numberB && numberB <= numberC) {
    numberA *= 2;
    numberB *= 2;
    numberC *= 2;
} else {
    numberA = numberA === 0 ? 0 : -numberA;
    numberB = numberB === 0 ? 0 : -numberB;
    numberC = numberC === 0 ? 0 : -numberC;
}

console.log(numberA, numberB, numberC);

/*
Задание No3.
Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
возрастанию или убыванию, то удвоить их; в противном случае заменить значение
каждой переменной на противоположное. Вывести новые значения переменных A, B, C.
*/
numberA = 1;
numberB = 10;
numberC = 11;

if (
    (numberA < numberB && numberB < numberC) ||
    (numberA > numberB && numberB > numberC)
) {
    numberA = numberA === 0 ? 0 : -numberA;
    numberB = numberB === 0 ? 0 : -numberB;
    numberC = numberC === 0 ? 0 : -numberC;
} else {
    numberA *= 2;
    numberB *= 2;
    numberC *= 2;
}

console.log(numberA, numberB, numberC);

/*
Задание No4.
На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних
точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.
*/
pointA = -5;
pointB = 10;
pointC = -11;
let distanceAB = Math.abs(pointA - pointB);
let distanceAC = Math.abs(pointA - pointC);

if (distanceAB > distanceAC) {
    console.log('Точка: ', pointC, '\nРасстояние: ', distanceAC);
} else {
    console.log('Точка:', pointB, '\nРасстояние:', distanceAB);
}

/*
Задание No5.
Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом
координат, то вывести 0. Если точка не совпадает с начало координат, но лежит на оси
OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных
осях, то вывести 3.
*/
let pointCoordinates = [5, 0];

if (pointCoordinates[0] === 0 && pointCoordinates[1] === 0) {
    console.log(0);
} else if (pointCoordinates[0] === 0) {
    console.log(2);
} else if (pointCoordinates[1] === 0) {
    console.log(1);
} else {
    console.log(3);
}

/*
Задание No6.
Даны координаты точки, не лежащей на координатных осях OX и OY. Определить
номер координатной четверти, в которой находится данная точка.
*/
pointCoordinates = [5, 0];

if (pointCoordinates[0] > 0 && pointCoordinates[1] > 0) {
    console.log('1-ая четверть');
} else if (pointCoordinates[0] < 0 && pointCoordinates[1] > 0) {
    console.log('2-ая четверть');
} else if (pointCoordinates[0] > 0 && pointCoordinates[1] < 0) {
    console.log('4-ая четверть');
} else {
    console.log('3-я четверть');
}

/*
Задание No7.
Даны целочисленные координаты трех вершин прямоугольника, стороны которого
параллельны координатным осям. Найти координаты его четвертой вершины.
*/
let coordsVerticesRectangle = [
    [-4, 4],
    [-4, -2],
    [2, -2],
    [null, null]
];

if (coordsVerticesRectangle[0][0] === coordsVerticesRectangle[1][0]) {
    coordsVerticesRectangle[3][0] = coordsVerticesRectangle[2][0];
} else if (coordsVerticesRectangle[0][0] === coordsVerticesRectangle[2][0]) {
    coordsVerticesRectangle[3][0] = coordsVerticesRectangle[1][0];
} else {
    coordsVerticesRectangle[3][0] = coordsVerticesRectangle[0][0];
}

if (coordsVerticesRectangle[0][1] === coordsVerticesRectangle[1][1]) {
    coordsVerticesRectangle[3][1] = coordsVerticesRectangle[2][1];
} else if (coordsVerticesRectangle[0][1] === coordsVerticesRectangle[2][1]) {
    coordsVerticesRectangle[3][1] = coordsVerticesRectangle[1][1];
} else {
    coordsVerticesRectangle[3][1] = coordsVerticesRectangle[0][1];
}

console.log('x4 =', coordsVerticesRectangle[0][0], '\ny4 =', coordsVerticesRectangle[0][1]);

/*
Задание No8.
Дан номер года (положительное целое число). Определить количество дней в этом
году, учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней.
Високосным считается год, делящийся на 4, за исключением тех годов, которые
делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются
високосными, а 1200 и 2000 — являются).
*/
let year = 1700;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(366, 'дней');
} else {
    console.log(365, 'дней');
}

/*
Задание No9.
Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
«нулевое число», «положительное нечетное число» и т. д.
*/
let number = -11;
let descNumber = '';

if (number === 0) {
    descNumber += 'нулевое число';
} else {
    if (number > 0) {
        descNumber += 'положительное';
    } else {
        descNumber += 'отрицательное';
    }

    if (number % 2 === 0) {
        descNumber += ' четное число';
    } else {
        descNumber += ' нечетное число';
    }
}

console.log(descNumber);

/*
Задание No10.
Дано целое число, лежащее в диапазоне 1–999. Вывести его строку- описание вида
«четное двузначное число», «нечетное трехзначное число» и т. д.
*/
number = 10;
descNumber = '';
let amountDigits = 0;

if (number % 2 === 0) {
    descNumber += 'Четное';
} else {
    descNumber += 'Нечетное';
}

do {
    number /= 10;
    amountDigits++;
} while (Math.trunc(number) !== 0);

console.log(descNumber, `${amountDigits}-значное число`);

/*
Задание No11. Какие значения выведет цикл while?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?
Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i );
Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i );

Ответ:
Значения в alert будут отличаться(второй цикл дополнительно выведет 5).
В первом цикле сначала i увеличивается на 1, а потом проверяется условие.
Во втором же сначала проверяется условие, а потом i увеличивается на 1,
поэтому он пройдет на 1 итерацию больше, чем первый.
*/
let i = 0;
while (++i < 5) alert(i);

i = 0;
while (i++ < 5) alert(i);

/*
Задание No12. Какие значения выведет цикл for?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выведут alert с одинаковыми значениями или нет?
Постфиксная форма:
for (let i = 0; i < 5; i++) alert( i );
Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i );

Ответ:
Оба цикла выведут одинаковые значения. Здесь разницы в постфиксной и префиксной
формах нет
*/
for (let i = 0; i < 5; i++) alert(i);

for (let i = 0; i < 5; ++i) alert(i);

/*
Задание No13. Выведите чётные числа
При помощи цикла for выведите чётные числа от 2 до 10.
*/
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

/*
Задание No14. Замените for на while
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}
*/
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

/*
Задание No15. Повторять цикл, пока ввод неверен
Напишите цикл, который предлагает prompt ввести число, большее 100. Если
посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку
нечисловых строк в этой задаче необязательно.
*/
do {
    number = prompt('Введите число, которое больше 100');
} while (number !== null && +number <= 100);

/*
Задание No16. Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится,
кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число от 1 до n есть
остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/
let rightInterval = 100;

if (rightInterval >= 2) {
    console.log(2);
}

l: for (let i = 3; i <= rightInterval; i += 2) {
    let sqrt = Math.sqrt(i);
    let ceilSqrt = Math.ceil(sqrt);
    if (ceilSqrt === sqrt) {
        continue;
    }

    for (j = 3; j < ceilSqrt; j += 2) {
        if (i % j === 0) {
            continue l;
        }
    }

    console.log(i);
}

/*
Задание No17.
Вычислить среднее арифметическое 2-ух чисел, введенных пользователем.
*/
let number1 = +prompt('Введите 1-ое число');
let number2 = +prompt('Введите 2-ое число');

alert((number1 + number2) / 2);

/*
Задание No18.
Напишите скрипт, который вычислит квадрат любого введённого числа.
*/
number = +prompt('Введите число');

alert(Math.pow(number, 2));

/*
Задание No19.
Примите от пользователя 3 числа. Выведите на экран разницу большего и меньшего из
них.
*/
let numbers = [
    +prompt('Введите 1-ое число'),
    +prompt('Введите 2-ое число'),
    +prompt('Введите 3-ое число')
];
let maxNumber = numbers[0];
let minNumber = numbers[0];

for (let i = 1; i < 3; i++) {
    if (maxNumber < numbers[i]) {
        maxNumber = numbers[i];
    } else if (minNumber > numbers[i]) {
        minNumber = numbers[i];
    }
}

alert(maxNumber - minNumber);

/*
Задание No20.
Напишите программу, проверяющую число, введенное с клавиатуры на четность.
*/
number = +prompt('Введите число');

alert(number % 2 === 0 ? 'Число четное' : 'Чсило нечетное');

/*
Задание No21.
Дано натуральное число а (a<100). Напишите программу, выводящую на экран
количество цифр в этом числе и сумму этих цифр
*/
number = 39;

if (number > 9) {
    console.log(2, Math.trunc(number / 10) + number % 10);
} else {
    console.log(1, number);
}

/*
Задание No22.
Известно, что 1 дюйм равен 2.54 см. Разработать скрипт, переводящий дюймы в
сантиметры и наоборот. Диалог с пользователем реализовать через браузер
*/
number1 = prompt('Введите количество сантиметров');

if (number1 !== null) {
    number1 = +number1;

    if (!isNaN(number1)) {
        alert(`${number1} см = ${(number1 * 2.54).toFixed(4)} дюйм`);
    } else {
        alert('Введенные данные не являются числовыми!');
    }
}

number2 = prompt('Введите количество дюймов');

if (number2 !== null) {
    number2 = +number2;

    if (!isNaN(number2)) {
        alert(`${number2} дюйм = ${(number2 / 2.54).toFixed(4)} см`);
    } else {
        alert('Введенные данные не являются числовыми!');
    }


    /*
    Задание No23. Найти сумму или произведение цифр трехзначного числа
    Пользователь вводит через prompt трёхзначное число. Проверить трехзначное число
    на четность и найти сумму его цифр, если число четное, или произведение его цифр,
    если число нечетное.
    */
    number = +prompt('Введите трёхзначное число');

    if (number % 2 === 0) {
        alert(Math.abs(number % 10 + (Math.trunc(number / 10) % 10) + Math.trunc(number / 100)));
    } else {
        alert(Math.abs(number % 10 * (Math.trunc(number / 10) % 10) * Math.trunc(number / 100)));
    }

    /*
    Задание No24. Определить существование треугольника по трем сторонам
    У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две
    стороны просто <лягут> на третью и треугольника не получится.
    Пользователь вводит поочерёдно через prompt длины трех сторон.
    Напишите код, который должен определять, может ли существовать треугольник при
    таких длинах. Т. е. нужно сравнить суммы двух любых сторон с оставшейся третьей
    стороной. Чтобы треугольник существовал, сумма всегда должна быть больше
    отдельной стороны.
    */
    let triangleSidesLengths = [
        +prompt('Введите длину стороны a'),
        +prompt('Введите длину стороны b'),
        +prompt('Введите длину стороны c')
    ];

    if (
        triangleSidesLengths[0] > 0 &&
        triangleSidesLengths[1] > 0 &&
        triangleSidesLengths[2] > 0 &&
        triangleSidesLengths[0] + triangleSidesLengths[1] > triangleSidesLengths[2] &&
        triangleSidesLengths[0] + triangleSidesLengths[2] > triangleSidesLengths[1] &&
        triangleSidesLengths[1] + triangleSidesLengths[2] > triangleSidesLengths[0]
    ) {
        alert('Треугольник существует');
    } else {
        alert('Треугольникa не существует');
    }

    /*
    Задание No25. Принадлежность точки окружности
    Даны координаты точки A(x = 4, y = 9) и радиус окружности (R = 10) с центром в начале
    координат.
    Напишите код, который будет выводить сообщение о том, лежит ли данная точка
    внутри окружности или за её пределами. Для извлечения квадратного корня из числа z
    вам понадобится метод Math.sqrt(z).
    Например: let a = Math.sqrt(4); // a=2
    */
    let coordsPoint = [4, 9];
    let radius = 10;

    let sumSquaresCoordsPoint = coordsPoint[0] ** 2 + coordsPoint[1] ** 2;
    let squareRadius = radius ** 2;

    if (sumSquaresCoordsPoint < squareRadius) {
        console.log('Точка лежит внутри окружности');
    } else if (sumSquaresCoordsPoint === squareRadius) {
        console.log('Точка лежит на окружности');
    } else {
        console.log('Точка лежит вне окружности');
    }

    /*
    Задание No26. Объекты
    Напишите код, выполнив задание из каждого пункта отдельной строкой:
    • Создайте пустой объект user.
    • Добавьте свойство name со значением John.
    • Добавьте свойство surname со значением Smith.
    • Измените значение свойства name на Pete.
    • Удалите свойство name из объекта.
    */
    let user = {};
    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;

    /*
    Задание No27. Объекты-константы
    Можно ли изменить объект, объявленный с помощью const?
    const user = {
    name: "John"
    };
    user.name = "Pete"; // это будет работать?
    
    Ответ:
    Да, поскольку переменная user хранит в себе ссылку на объект, а потому
    её значение не поменяется
    */

    /*
    Задание No28. Сумма свойств объекта
    Есть объект, в котором хранятся зарплаты нашей команды:
    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
    Напишите код для суммирования всех зарплат и сохраните результат в переменной
    sum. Должно получиться 390.
    Если объект salaries пуст, то результат должен быть 0.
    */
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    let sum = 0;

    for (let prop in salaries) {
        sum += salaries[prop];
    }

    console.log(sum);
/*
Задание No29. Бесконечный цикл по ошибке
Этот цикл – бесконечный. Он никогда не завершится, почему?
let i = 0;
while (i != 10) {
i += 0.2;
}

Ответ:
Из-за погрешности в представлении чисел с плавающей точкой в памяти компьютера
переменная i никогда не будет равна 10
*/
