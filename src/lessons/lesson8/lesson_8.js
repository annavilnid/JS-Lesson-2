// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

const str= 'fgfggg';
console.log(str[0]) // f


// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
function plus(x) {
	return this + x;
}

function minus(x) {
	return this - x;
}

Number.prototype.plus = plus;
Number.prototype.minus = minus;

console.log((2).plus(3).minus(1));

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
function getStr() {
	return [].slice.call(arguments, 1).join(arguments[0])
}

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

let sum = 0

function pik(obj) {
	sum += obj.valueNode;
	if (obj.next) {
		obj.next.map(i => pik(i))
	}

	return sum;
}

const tree = {
	valueNode: 3,
	next: [{
		valueNode: 1,
		next: null
	},
		{
			valueNode: 3,
			next: null
		},
		{
			valueNode: 2,
			next: null
		},
		{
			valueNode: 2,
			next: [
				{
					valueNode: 1,
					next: null
				},
				{
					valueNode: 5,
					next: null
				}
			]
		}]
};

alert(pik(tree))

// Task 5
// исправить код, что бы работал правильно

for (var i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}

for (let i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
	this.name = name;
	this.author = author;
	return this;
}

// function Foo(Book, 'Учебник javascript', 'Петр Сергеев');

var book = Foo(Book, 'js', 'petr');

// function Foo(fn, name, author) {
// 	return x(name, author);
// }


// function Foo(fn, name, author) {
// 		return fn.call({}, name, author);
// }

function Foo(fn, name, author) {
	return fn.apply(this, [name, author]);
}

console.log(book.name);
console.log(book.author);



// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
function f(a, b) {
	return b ? a + b : (c) => {
		return a + c}
}

alert(f(2)(3));


// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
function one(arg) {
	return 1 + (arg || 0);
}

function two(arg) {
	return 2 + (arg || 0);
}

function five(arg) {
	return 5 + (arg || 0);
}

function seven(arg) {
	return 7 + (arg || 0);
}

function plus(arg) {
	return arg;
}

function minus(arg) {
	return -arg;
}

console.log(seven(plus(one())))
console.log(five(minus(two())))


function five(arg) {
	return 5 + (arg || 0);
}


// Task 10
// Реализовать функцию сортировки массива пузырьком

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
let check = (str) => {
	let stack = [], open = "([{", close = ")]}";
	for (const ch of str)
	{
		let i = open.indexOf(ch);
		if (i > -1) stack.push(close[i]);
		if (close.includes(ch) && ch != stack.pop()) return false
	}
	return stack.length == 0;
}

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
let uniq = (arr) => {
		return arr.filter((item, index, array) => (array.indexOf(item) === index));
}

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
let double = (arr) => {
	return arr.filter(i => i !== null).map(e => e * 2)
}

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]


let arr = []
function getTreeValues(obj) {
	arr.push(obj.value);
	if (obj.children) {
		obj.children.map(o => getTreeValues(o))
	}
	return arr.sort() // спросить в поддержке думаю это неправильно
}

const tree2 = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14
let sum = 0;
function sumTreeValues(obj) {
	sum += obj.value
	if (obj.children) {
		obj.children.map(o => sumTreeValues(o))
	}
	return sum
}

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

function Bomb(message, delay) {
	this.message=message

	setTimeout(this.blowUp.bind(this), delay );
}

Bomb.prototype.blowUp = function () {
	console.log(this.message);
};

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
let rle = (str) => {
	let result = '';
	let count = 1;
	for (let i = 0; i < str.length; i++){
		if (str[i] !== str[i+1] && count === 1) {
			result += str[i]
			count = 1;
		} else if (str[i] !== str[i+1] && count > 1) {
			result += str[i] + count
			count = 1
		} else {
			count += 1
		}
		console.log(count)
	}
}
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
const isSorted = (array) => {
	let sortedArray = [...array].sort((a, b) => a - b)
	let isEqual = array.length ===  sortedArray.length &&
		array.every((value, index) => value === sortedArray[index])
	return isEqual;
};

// const comparator = (a, b) => {
// 	if (typeof a === 'number' && typeof b === 'number') {
// 		return a - b;
// 	} else {
// 		return a.toString().localeCompare(b.toString());
// 	}
// };
//
// const isSorted = array => {
// 	const count = array.length;
// 	return array.every((current, index) => {
// 		if (index + 1 < count) {
// 			const next = array[index + 1];
// 			return comparator(current, next) <= 0;
// 		} else {
// 			return true;
// 		}
// 	});
// };

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined
let missing = (array) => {
	let sortedArray = [...array].sort((a, b) => a - b)
	for (let i=1; i<=sortedArray.at(-1); i++) {
		if (sortedArray[i-1] !== i) {
			return i;
		}
	}
}

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

class LinkedList {
	constructor(...args) {
		this.args = args
	}
	add(arg) {
		this.args = [...this.args, arg]
	}
	has(arg){
		return this.args.includes(arg)
	}
}

// Task 21
// Что выведет консоль?

Promise
	.resolve()
	.then(() => console.log(1))
	.then(() => console.log(2))
	.then(() => console.log(3));

Promise
	.resolve()
	.then(() => console.log(4))
	.then(() => console.log(5))
	.then(() => console.log(6));

export default Lesson8;