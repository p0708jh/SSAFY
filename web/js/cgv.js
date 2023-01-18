// const title=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong");
// const rate=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span");
// const openDate=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > span.txt-info > strong");

// console.log(title.textContent);
// console.log(rate.textContent);
// console.log(openDate.textContent.trim()); //trim() 앞뒤 공백을 제거



// const title2=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > a > strong");
// const rate2=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > div > strong > span");
// const openDate2=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong");

// console.log(title2.textContent);
// console.log(rate2.textContent);
// console.log(openDate2.textContent.trim());

// title2.textContent="삼겹살과 그대라면";
// rate2.textContent="5%";
// openDate2.textContent="1985.07.07";

// const title3=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents > a > strong");
// const rate3=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents > div > strong > span");
// const openDate3=document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents > span.txt-info > strong");

// let tmp= title.textContent;
// title.textContent=title3.textContent;
// title3.textContent=tmp;

// console.log(title3.textContent);
// console.log(rate3.textContent);
// console.log(openDate3.textContent.trim());


// const onePoster = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span > img");
// const threePoster = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a > span > img")

// let srcTmp= onePoster.src;
// onePoster.src=threePoster.src;
// threePoster.src=srcTmp;

const movieList = document.querySelectorAll(".sect-movie-chart ol>li");
console.log(movieList);