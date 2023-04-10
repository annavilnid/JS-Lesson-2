console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
class Buyer {
  name?: string
  surname?: string
  adress?: string
  bankAccout?: string
  constructor(surname: string, name: string, adress: string, bankAccout: string) {
    this.name = name;
    this.surname = surname;
    this.adress = adress;
    this.bankAccout = bankAccout;
  }

  setParam(surname: string, name: string, adress: string, bankAccout: string) {
    this.name = name;
    this.surname = surname;
    this.adress = adress;
    this.bankAccout = bankAccout;
  }
  getParam() {
    return this.name;
    return this.surname;
    return this.adress;
    return this.bankAccout;
  }
  printParam() {
    console.log(this.name);
    console.log(this.surname);
    console.log(this.adress);
    console.log(this.bankAccout);
  }
}

let buyers: any = [];

buyers.push(new Buyer('Smith', 'John', '123 Main St.',  '123456123456'))

buyers.push(new Buyer('Jones', 'Mary', '456 Main St.',  '123456123457'))

buyers.push(new Buyer('Brown', 'William', '789 Main St.',  '123456123458'))

buyers.push(new Buyer('Johnson', 'Patricia','012 Main St.',  '321654321654'))

let result = [...buyers].sort((a, b) => a.surname < b.surname ? -1 : 1 )
console.log(result)
let result2 = buyers.filter( (f: { bankAccount: string; }) => +f.bankAccount >= 123456123456 && +f.bankAccount <=123456123458)
console.log(result2)
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
class Car {
  carBrand?: string
  cylindersNumber?: number
  power?: string
  constructor(carBrand: string, cylindersNumber: number, power: string) {
    this.carBrand = carBrand;
    this.cylindersNumber = cylindersNumber;
    this.power = power;
  }
  printParam() {
    console.log(this);
  }
}

class Lorry extends Car{
  capacity?: string
  constructor(carBrand: string, cylindersNumber: number, power: string, capacity: string) {
    super(carBrand, cylindersNumber, power);
    this.capacity = capacity;
  }
  setBrand(carBrand: string) {
    this.carBrand = carBrand;
  }
  setCapacity(capacity: string) {
    this.capacity = capacity;
  }
}
// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};