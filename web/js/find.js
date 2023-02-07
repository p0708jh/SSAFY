const array=[1,2,3,4,5];
const inventory =[
  {name:"A",quantity:1},
  {name:"B",quantity:2},
  {name:"C",quantity:3},
]

// find -> 해당하는 배열의 값을 가져온다.
const result1= array.find(e=>e>4);
console.log(result1);

//name이 B인 배열의 값을 가져온다
const result2 = inventory.find(li=>li.name==="B");
console.log(result2);


// findIndex -> 해당하는 index를 가져온다.

const result3= inventory.findIndex(li=>li.name==="B");
console.log(result3);