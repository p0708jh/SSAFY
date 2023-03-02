const square={
  width:200,
  height:200,
};

const colorSqare={
  ...square,
  height:100,
  color:"red",
};

console.log(colorSqare);

const catTypeAnimals =["고양이","호랑이","사자"];
const dogTypeAnimals =["개","늑대","여우"];

const animals=[...catTypeAnimals,...dogTypeAnimals,"비버"];
console.log(animals);