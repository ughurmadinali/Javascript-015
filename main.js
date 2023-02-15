1
//что выведет в консоли console.log(Boolean(10 > 9))
console.log(Boolean(10 > 9))
true

2
//что выведет в консоли console.log(Boolean(10 < 9))
console.log(Boolean(10 < 9))
false

3
//что выведет в консоли скрипт ниже
if (1 == 2) {
    console.log(true);
} else {
    console.log(false);
}
false

4
//что выведет в консоли скрипт ниже
if (1 < 2) {
    console.log(true);
} else {
    console.log(false);
}
true

5
//что выведет в консоли скрипт ниже
if (1 > 2) {
    console.log(true);
} else {
    console.log(false);
}
false

6
//что выведет в консоли скрипт ниже
let x1 = 0;
console.log(Boolean(x));

ошибка

7
//что выведет в консоли скрипт ниже
let x2 = -0;
console.log(Boolean(x));

ошибка

8
//что выведет в консоли скрипт ниже
let x3 = "";
console.log(Boolean(x));

ошибка

9
//что выведет в консоли скрипт ниже
let x4;
console.log(Boolean(x));

ошибка

10
//что выведет в консоли скрипт ниже
let x5 = null;
console.log(Boolean(x));

ошибка

11
//что выведет в консоли скрипт ниже
let x6 = false;
console.log(Boolean(x));

ошибка

12
//что выведет в консоли скрипт ниже
let x7
1 = 10/"H";
console.log(Boolean(x));

ошибка

13
//перечислите логические операторы
true, false

14
//что выведет в консоли скрипт ниже
if (1 > 2 && 2 < 3 || "hello".length < 4) {
    console.log(true);
} else {
    console.log(false);
}
false

15
//что выведет в консоли скрипт ниже
if (1 > 2 && 2 < 3 || "hello".length < 4) {
    console.log(true);
} else {
    console.log(false);
}
false

16
//что выведет в консоли скрипт ниже
if (1 > 2 || 2 < 3 || "hello".length != 4) {
    console.log(true);
} else {
    console.log(false);
}
true

17
//создайте структуру ниже с помощью if, else, else if
let money = 10;
/*
 если money больше или равно 5-ти, то вывести в консоли 'Я куплю пирог',
 иначе если money меньше 5-ти и больше 1, то вывести в консоли 'Мало денег',
 иначе вывести в консоли 'Денег нет'
*/

18
//превратите скрипт ниже в switch
let day = new Date().getDay();

if (day == 1) {
    console.log('Monday');
} else if (day == 2) {
    console.log('Tuesday');
} else if (day == 3) {
    console.log('Wednesday');
} else if (day == 4) {
    console.log('Thursday');
} else if (day == 5) {
    console.log('Friday');
} else {
    console.log('Break Time!');
}


let num = '654765fdfds';

if (/\s/g.test(num) || /[a-zA-Z]/g.test(num)) {
    console.log(false)
}

19
function mackPair(a, b){
    let arr = [ a,  b]
}

20
function makesTen(a, b) {
    if(a + b == 10 || a == 10 || b == 10){
        return true
    }
    else{
        return false
    }
}
console.log(makesTen(1, 9));

21
eval('23 + 4')
console.log(eval('23 + 4'));

22
function calculateFuel(a) {
    a * 10 >= 100 ? console.log(a * 10) : console.log(100)

}
console.log(calculateFuel(15));

23
const arrowFunc = (a) => {
    return a
}