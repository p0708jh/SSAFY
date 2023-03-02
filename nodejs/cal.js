a=2;
b=4;

const calc={
add:(a,b)=>a+b,
minus:(a,b)=>a-b,
mult:(a,b)=>a*b,
div:(a,b)=>a/b,
}
console.log(`주어진 수: ${a} ${b}`);
console.log(`덧셈 결과: ${calc.add(a,b)}`);
console.log(`뺄셈 결과: ${calc.minus(a,b)}`);
console.log(`곱셈 결과: ${calc.mult(a,b)}`);
console.log(`나눗셈 결과: ${calc.div(a,b)}`);

module.exports = calc;