function palindrome(str) {
  const strLength=str.length;
  for(let i=0;i<strLength/2;i++)
  {
    let iIndex=i;
    let jIndex=strLength-1-i;
    if(str[iIndex]!==str[jIndex])
      {
        return false;
      }
  }
  return true;
}

console.log(palindrome('level'));
// 출력
// palindrome('level') => true
// palindrome('hi') => false