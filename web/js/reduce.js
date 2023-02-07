const studentInfo=[

  {
    name:"jony",
    age:30,
  },
  {
    name:"sylvie",
    age:30,
  },
  {
    name:"nana",
    age:1,
  },
];


// const newStuddentInfo=studentInfo.reduce((acc,cur)=>{
//   console.log(acc,cur);
//   acc.push(cur.name);
//   return acc;
// },[]);

//age 30인 이름만 골라내기
const newStuddentInfo=studentInfo.reduce((acc,cur)=>{
  console.log(acc,cur);
  if(cur.age===30)
  acc.push(cur.name);
  return acc;
},[]);
