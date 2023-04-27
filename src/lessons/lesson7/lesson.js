class Animal {

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


class Monkey extends Animal {
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