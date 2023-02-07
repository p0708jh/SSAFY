class StudentInfo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.address = "";
  }
  sayMyName() {
    console.log(`my name is ${this.name}`);
  }
  setAddress(address) {
    this.address = address;
  }
  getAddress() {
    return this.address;
  }
  useMethod() {
    this.sayMyName();
  }
}




// const student1={
//   name:"sadf",
//   age:-1,
//   address:"",
//   constructor:(name,age)=>{
//     this.name =name;
//     this.age=age;
//   },
//   sayMyName:()=>console.log(`my name is ${this.name}`),
//   setAddress:(address)=>this.address=address,
//   getAddress:()=>this.address,
//   useMethod:()=>this.sayMyname(),
// };
// student1.constructor("dsf",123213);
// student1.sayMyName("");
// student1.setAddress("경기도어디시");
// console.log(student1.getAddress());

// student2.constructor("가나다라",123213);
// student2.sayMyName("");//객체로는 안됨
// student2.setAddress("광주광역시");
// console.log(student2.getAddress());

// // const student1 = new StudentInfo("jony", 30);

const student1 = {
  name: "sadf",
  age: -1,
  address: "",

  sayMyName() {
    console.log(`my name is ${this.name}`);
  },
  // 위에와 같은표현 
  // sayMyName: function(){
  //   console.log(`my name is ${this.name}`);
  // }
};
