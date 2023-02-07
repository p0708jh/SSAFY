const array=[1,2,3,4,5];

//some 하나의 조건만 만족해도 true 반환

const result1= array.some(e=>e<0); //false
const result2=array.some(e=>e>4); //ture

//every 모든 조건을 만족해야 true 반환

const everyResult1 = array.every(e=>e>0); //true
const everyResult2 = array.every(e=>e>3); //false