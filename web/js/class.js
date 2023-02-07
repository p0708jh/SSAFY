class Lawyer{
  constructor(name,age,intro){
    this.name=name;
    this.age=age;
    this.intro=intro;
  }

  introduce(){
    console.log(`${this.name,this.age,this.intro}`)
  }
}

const person1=new Lawyer("우영우",27,"기러기 토마토 스위스 역삼역");

person1.introduce();