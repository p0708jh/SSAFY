

// slice 1번인덱스부터 2번인덱스 전까지

const names = ["jony","sylvie","nana","nana","nana","nana","nana","nana","nana"];

const newNames=names.slice(1,2);
console.log(names);
console.log(newNames);

// splice 3번인덱스에서 2개의 배열(길이)만큼 삭제
const names = ["jony","sylvie","nana","nana","nana","nana","nana","nana","nana"];

const newNames=names.splice(3,2);
console.log(names);
console.log(newNames);