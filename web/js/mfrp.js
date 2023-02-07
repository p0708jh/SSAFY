// const arr=[1,2,3,4,5,6,7,8,9,10];

// const even=arr.filter(v=>v%2==0);

// const starMap=even.map(v=>v*10);



const orderList=[
  {
    menu:"치킨",
    price:17000,
    event:false,
    count:50,
  },
  {
    menu:"치킨",
    price:17000,
    event:false,
    count:50,
  },
  {
    menu:"치킨",
    price:17000,
    event:false,
    count:50,
  },
  {
    menu:"치킨",
    price:17000,
    event:false,
    count:50,
  },
  {
    menu:"파스타",
    price:17000,
    event:true,
    count:50,
  },
];

const menu=orderList.filter(v=>v.count!=0);



menu.forEach(v => {
  console.log(v.mneu);
  if(v.event==true)
    console.log(v.price*9/10);
  else
    console.log(v.price);
});