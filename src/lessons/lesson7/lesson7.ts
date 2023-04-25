console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
class Animal {
  name: string

  constructor(name = 'Animal') {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} walking`)
  }

  eat() {
    console.log(`${this.name} eating`)
  }

  sleep() {
    console.log(`${this.name} sleeping`)
  }
}

// function Animal(name = 'Animal') {
//   this.name = name;
//
//   this.walk = function () {
//     console.log(`${this.name} walking`)
//   }
//
//   this.eat = function () {
//     console.log(`${this.name} eating`)
//   }
//
//   this.sleep = function () {
//     console.log(`${this.name} sleeping`)
//   }
// }

let cat = new Animal('cat');

cat.walk()
cat.eat()
cat.sleep()

// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают


//Task 02
class Monkey extends Animal {
  //name: string

  constructor(name = 'Monkey') {
    super(name);
  }

  roar() {
    console.log(`${this.name} roaring`)
  }

  climb() {
    console.log(`${this.name} climbing`)
  }
}

let gorilla = new Monkey();
gorilla.walk()
gorilla.eat()
gorilla.sleep()
gorilla.roar()
gorilla.climb()

// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают


//Task 03
class Human extends Monkey {

  constructor(name = 'Human') {
    super(name);
  }

  speak() {
    console.log(`${this.name} speaking`)
  }

  think() {
    console.log(`${this.name} thinking`)
  }
}

let anna = new Human();
anna.walk()
anna.eat()
anna.sleep()
anna.roar()
anna.climb()
anna.speak()
anna.think()
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают


// Task 04 сделать
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05 сделать
// Используя метод Apply реализовать свой собственный метод bind

function bind(fn: any, context: any) {
  return function(...arg: any) {
    return fn.apply(context, [...arg]);
  }
}

// function bind(fn, context, ...rest) {
//   return function(...args) {
//     const uuid = Date.now().toString();
//     context[uuid] = fn;
//     const res = context[uuid](...rest, ...args);
//     delete context[uuid];
//     return res;
//   }
// }


// just a plug
export default () => {};