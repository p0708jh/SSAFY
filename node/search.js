// 패키지를 가져오는법
// require로 가져올수 있다.
// 내부에 있는 모듈은 ./~~

const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({

    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://www.google.com");
  await page.evaluate(()=>{
    //input 창 찾아서 버튼 클릭
    document.querySelector(".gLFyf").value="치킨";
    document.querySelector(".gNO89b").click();

  })
  await page.waitForSelector(".GLcBob");
  await page.screenshot({path:"치킨.jpg",fullPage:true});

  await browser.close();
};

main();
