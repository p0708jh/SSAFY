const chicken=[
  {name :"머리",quantity: 1},
  {name :"날개",quantity: 1},
  {name :"닭다리",quantity: 1},
  {name :"닭가슴살",quantity: 1},
  {name :"닭발",quantity: 1},
]

chicken.findIndex(v=>{if(v.name==="닭다리") console.log(v)});