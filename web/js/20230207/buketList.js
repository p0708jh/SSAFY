// const buketLists=[
//   { id:3,text: '여행가기', done:false},
//   { id:2,text: '치킨먹기', done:true},
//   { id:1,text: '코딩하기', done:false},
// ];

// const result=Object.values(buketLists);

// function getValues(key){
//   Object.values(key);
// }

// console.log(result);


const buketLists=[
  { id:3,text: '여행가기', done:false},
  { id:2,text: '치킨먹기', done:true},
  { id:1,text: '코딩하기', done:false},
];

const getValues=(indecator)=>buketLists.map((buketList)=>buketList[indecator]);
//const removeList=(indecator)=>(buketLists.splice(buketLists.findIndex((e)=>e.id==indecator)));
//const removeList = (id) => bucketLists.filter((el) => el.id !== id);
const toggle = (id) => {
  const newBucketLists = structuredClone(bucketLists);
  const ret = newBucketLists.filter((el) => el.id === id);
  if (ret[0].done) {
    ret[0].done = false;
  } else {
    ret[0].done = true;
  }
  return newBucketLists;
};

console.log(toggle(1));
console.log(getValues("id"));
removeList(1);