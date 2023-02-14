const setRenderBackground = async () => {
  //blob -> 이미지,사운드,비디오등 멀티미디어 데이터를 다룰때 사용
  const result = await axios.get("https://picsum.photos/1280/720", {
    responseType: "blob",
  });
  console.log(result.data);
  // URL.createObjectURL -> 임시 URL을 만든다
  //받아온 데이터를 임시 URL을 만들어서 그 URL에 body에 넣는다
  const imageURL = URL.createObjectURL(result.data);
  document.querySelector("body").style.backgroundImage = `url(${imageURL})`;
};
// async function setRenderBackground(){
//   const result = await axios.get("https://picsum.photos/1280/720",{
//     responseType:"blob"
//   });

//   console.log(result)
// }

function setTime() {
  const timer = document.querySelector(".timer");

  setInterval(() => {
    // date 함수
    const date = new Date();
    // date.getHours()
    timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }, 500);
}

function setBackground() {
  setInterval(() => {
    setRenderBackground();
  }, 3000);
}

function getMemo() {
  const memo = document.querySelector(".memo");
  memo.textContent = localStorage.getItem("todo");
}

function setMemo() {
  const memoInput = document.querySelector(".memo-input");
  memoInput.addEventListener("keyup", (e) => {
    //console.log(e.code);
    //console.log(e.target);
    //console.log(e.target.value);

    // ! null undefined false "" -> 부정의 의미
    //if(e.target.value) -> 위 부정의 의미 통합
    //if(!e.target.value) -> 부정의 의미인경우
    if (e.code === "Enter" && e.target.value) {
      //메모를 저장
      const memo = document.querySelector(".memo");
      memo.textContent = e.target.value;

      // 메모리 저장
      // 백엔드-DB에 저장후 가져오는 작업
      // 또는 브라우저에 저장 localStorage
      //localStorage.setItem('key','넣을값')
      localStorage.setItem("todo", e.target.value);
      //localStorage.getItem('key')-> 값을 가져온다

      //getMemo로 분리
      getMemo();

      e.target.value="";
    }
  });

}


function deleteMemo(){
  //이벤트 캡쳐링 : 부모에서 자식으로 이벤트 전달,버블링: 자식에서 부모로 이벤트 전달
  //이벤트 위임
  //document.querySelector('body');
  document.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.classList.contains('memo'))
  {
    localStorage.removeItem('todo');
    e.target.textContent="";
  }
  })
  
}

function allRender() {
  setRenderBackground();
  setTime();
  setBackground();
  setMemo();
  getMemo();
  deleteMemo();
}

allRender();
