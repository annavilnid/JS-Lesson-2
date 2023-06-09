console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта
let someObj = {
    name: 'Eugene',
    age: 32,
    greeting() {
        console.log(`My name is ${this.name}. I am ${this.age}`)
    }
}
someObj.greeting()
// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
type counterType = {
    count?: number
    get: () => void
    increment: () => void
    decrement: () => void
    setCounter: (count: number) => void
    rest: () => void
}

let counter: counterType = {
    get() {
        console.log(this.count)
    },
    increment() {
        this.count ? this.count += 1 : console.log("Счетчик не установлен")
    },
    decrement() {
        this.count ? this.count -= 1 : console.log("Счетчик не установлен")
    },
    setCounter(count: number) {
        this.count = count
    },
    rest() {
        this.count = 0
    },
}

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
type counterDeepType = {
    count?: number
    get: () => counterDeepType
    increment: () => counterDeepType
    decrement: () => counterDeepType
    setCounter: (count: number) => counterDeepType
    rest: () => counterDeepType
}

let counterDeep: counterDeepType = {
    get() {
        console.log(this.count)
        return this
    },
    increment() {
        this.count ? this.count += 1 : console.log("Счетчик не установлен")
        return this
    },
    decrement() {
        this.count ? this.count -= 1 : console.log("Счетчик не установлен")
        return this
    },
    setCounter(count: number) {
        this.count = count
        return this
    },
    rest() {
        this.count = 0
        return this
    },
}

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
function myFirstConstructorFunc(name: string, age: number) {
    return {
        name: name,
        age: age,
        greeting: someObj.greeting
    }
}

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One
type OneType = {
    name: string
    hi?: () => void
    hiCall?: any
}
let One: OneType = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};
let bindFunction = Two.sayHello.bind(One);
bindFunction()

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore
type helperObjType = {
    name?: string
    age?: number
    changeName: (name: string) => void
    setAge:(age: number) => void
    greeting: () => void
}

let helperObj: helperObjType = {
    changeName(name: string) {
        this.name = name
    },
    setAge(age: number) {
        this.age = age
    },
    greeting: Two.sayHello
}

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a:number,b:number):number {return a + b};
function bindNumber(func=sumTwoNumbers, numberOne: number) {
    return function returnFunction(numberTwo: number) {
        return func.bind(null,numberOne,numberTwo)()
    }
}

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
function helperObjOne(oneObj: any, obj: any) {
    return function changeOneName(string: string) {
        obj.changeName.bind(oneObj,string)()
    }
}

function helperObjOneSecond(obj: any, func: any) {
    return function changeOneName(string: string | number) {
        func.bind(obj,string)()
    }
}

function helperObjOneSecondCall(obj: any, func: any) {
    return function changeOneName(string: string | number) {
        func.call(obj,string)
    }
}

// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
//helperObjOne(Two, helperObj)(30) // не понимаю
helperObjOneSecond(Two, helperObj.setAge)(30) // не понимаю
helperObjOneSecondCall(Two, helperObj.setAge)(80)
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
One.hi = helperObj.greeting.bind(Two);
One.hiCall = helperObj.greeting.call(Two);
// Реализовать задачи 2-4 из Bind с помощью Call



// just a plug
export default () => {};