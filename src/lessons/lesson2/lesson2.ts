console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


console.log('Task 01')
console.log('Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9')
function sum(a: number) {
  function f(b: number) {
    return a+b;
  }
  return f
}

console.log(sum(3)(6)); // 9

console.log('Task 02')
console.log('Реализовать функцию makeCounter которая работает следующим образом')
console.log('const counter = makeCounter()');
console.log('counter(); // 1');
console.log('counter(); // 2');
console.log('const counter = makeCounter()');
console.log('counter2(); // 1');
console.log('counter(); // 3');

let result = 0;

const makeCounter = () => {
  result = ++result;
  return result
}

function makeCounter2(x: number) {
  let currentCount = x;
  return {
    increase: function() {
      return ++currentCount;
    },

    decrease: function() {
      return --currentCount;
    },
    reset: function() {
      return currentCount = 0;
    },
    set: function() {
      return currentCount;
    }
  };
}

const counter = makeCounter

console.log(counter());
console.log(counter());

const counter2 = makeCounter2(1)

console.log(makeCounter2(1).set);
console.log(counter());

console.log('Task 03')
// console.log(makeCounter2.increase(3))

// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

console.log( counter2.increase()); // 2
console.log( counter2.decrease()); // 1
console.log( counter2.reset()); // 0
console.log( counter2.set()); //0

console.log('Task 04')

// const _sum3 = ( a: any, b: any, c: any ) => a + b + c;

const superSum = (x: number) => {
  if (x>0) {
    let arr: any = [];
    let result = 0;
    return (...y: number[]) => {
      arr = [...arr, ...y];
      return (...z: any) => {
        arr = [...arr, ...z];
        for (let i = 0; i < x; i++) {
          result += arr[i]
        }
        return result
      }
    };
  } else {
    return 0
  }
}

//@ts-ignore
console.log(superSum(3)(2, 3)(4)) //9
//@ts-ignore
console.log(superSum(3)(2)(3, 4)) //9


// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
//@ts-ignore
console.log(superSum(0)) ///0
//console.log(superSum(3)(2)(5)(3)) //10
//@ts-ignore
console.log(superSum(3)(2)(5,3)) //10
// 4) superSum(3)(2,5,3) //10
//@ts-ignore
console.log(superSum(3)(2,5)(3)) //10
//@ts-ignore
console.log(superSum(3)(2,5)(3,9))//10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
function sumR(n: number): number {
  if (n > 1) {
    return  n + sumR(n-1)
  } else {
    return n
  }
}
console.log(sumR(4))


function sumFor(n: number) {
  let result = 0;
  for (let i = n; i>0; i--) {
    result += i
  }
  return result
}
console.log(sumFor(4))

function sumFormula(n: number) {
  return n * (n + 1) / 2;
}
console.log(sumFormula(4));

function factorial(n: number): number {
  return (n === 1) ? n : n * factorial(n-1)
}

console.log( factorial(5) ); // 120

function fib(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

function fib2(n: number) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// alert(fib2(3) ); // 2
// alert(fib2(7) ); // 13
// alert(fib2(277) ); // 5527939700884757

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list: any) {
  alert(list.value); // выводим текущий элемент
  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }
}
// printList(list);

function printList2(list: any) {
  while (list) {
    alert(list.value);
    list = list.next
  }
}

// printList2(list);

function printReverseList(list: any) {
  if (list.next) {
    printReverseList(list.next);
  }
  alert(list.value);
}

printReverseList(list)


function printList2Reverse(list: any) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
    console.log(arr)
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}

printList2Reverse(list);




// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
function flatten(arr: any) {
  const array = [...arr];
  console.log(array)
  const res = [];

while (array.length) {
  // забираем последнее значение
  const next = array.pop();
  if (Array.isArray(next)) {
    // добавляем к массиву элементы не модифицируя исходное значение
    res.push(...next);
    console.log(res)
  } else {
    res.push(next);
    console.log(res)
  }
}
//разворачиваем массив, чтобы восстановить порядок элементов
return res.reverse();
}

let arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

console.log(flatten(arr1))

// just a plug
export default () => {};