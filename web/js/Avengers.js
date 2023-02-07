class Person {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  hello() {
    console.log(this.name);
  }
}

class Avengers extends Person {
  constructor(name, hp, power, skill) {
    super(name, hp);
    this.power = power;
    this.skill = skill;
  }
  information() {
    console.log(`${this.name}, ${this.hp}, ${this.power}, ${this.skill}`);
  }
  fly() {
    console.log("비행중");
  }
}

const JH = new Avengers("준형", 1000, 500, "집빨리가기");

JH.information();
