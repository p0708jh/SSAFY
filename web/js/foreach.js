//배열 매소드 Array.함수(콜백함수)
// addEventListener('click',function(){})

//Array.forEach

// const arr=[1,2,3,4];

// arr.forEach((value)=>{
//   console.log(value);
// })

// const test = (value)=>{console.log(value)};
// arr.forEach(test);


// const arr=[4,3,5,1,6,5];

// arr.forEach((value)=>{if(value%2==1)console.log(value);})

const arr=[-5,3,4,2,-7,-2,7];

const pa=[];
const ma=[];

arr.forEach(v=>{if(v<0)ma.push(v);
  else pa.push(v);})