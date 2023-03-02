// 패키지를 가져오는법
// require로 가져올수 있다.
// 내부에 있는 모듈은 ./~~

const puppeteer = require("puppeteer");

const main = async () => {
  // 브라우저 만들기
  const browser = await puppeteer.launch({
    // 기본값이 headless::true
    headless: false,
  });

  // 브라우저에 페이지 만들기
  const page = await browser.newPage();
  // 페이지에서 주소로 이동하기
  await page.goto("https://comic.naver.com/webtoon/detail?titleId=795297&no=1");

  // 대기 하는법
  // waitForSelector -> 특정 selector가 올때까지 대기하는 역할
  // 이미지가 로딩시에 없었으니 이미지가 나올때까지 기다리는 역할
  await page.waitForSelector("#sectionContWide img");

  // 크롤링데이터 가져오기
  // node.js는 브라우저가 아닌 환경이기때문에 document 사용 불가능
  // evaluate 안에서는 document 사용이 가능하다.
  // headless ->false
  // broswer close -> 주석
  const data = await page.evaluate(() => {
    const webToonList = document.querySelectorAll("#sectionContWide img");

    //querySelectorAll 유사배열
    //-> 배열화 시킨후 배열 매서드 사용가능
    const result = Array.from(webToonList).map((li) => li.getAttribute("src"));
    return result;
  });
  console.log(data);
  const url=data[0];
  imgDownload(url, './images/1번.jpg');

  // async function getFileFomrUrlImage(url) {
  //   const res = await fetch(url);
  //   const data = await res.blob();
  //   const fileName = url.split('/').pop();
  //   const fileExt = url.split('.').pop();
  //   const metaData = {type: `image/${fileExt}`};
  //   return new File([data], fileName, metaData);
  // }
  //document.querySelectorAll("#content .item");
  //스크린샷 찍기
  await page.screenshot({path: "./node/images/screenshot.jpg", fullPage:true});

  //pdf 따기 (headless: true 에서만 동작)
  //await page.pdf({path: "./node/pdf/test.pdf", format:'A4'});

  //브라우저 종료하기
  await browser.close();
};

main();
