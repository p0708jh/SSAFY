const students=[
  {
    name:"김도훈",
    age:26,
    address:"경남 창원시"
  },
  {
    name:"김기홍",
    age:27,
    address:"광주광역시"
  },
  {
    name:"김택우",
    age:30,
    address:"인천광역시"
  },
];
students.forEach((student)=>{console.log(typeof(student))});

const under30names = students.filter(student=>student.age<30);

const names=under30names.map(data=>data.name);