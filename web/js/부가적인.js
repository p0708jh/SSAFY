// 백틱 ` 사용하면 문자열 자바스크립트 혼합 OK

const myName="준형";
const introduce=`제이름은${myName}입니다`;


//백틱은 enter를 허용한다


const bb=()=>`<div>안녕하세요<br>박준형입니다</div>`;

document.querySelector('body').insertAdjacentHTML('beforeend',bb());