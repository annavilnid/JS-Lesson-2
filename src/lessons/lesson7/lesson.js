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