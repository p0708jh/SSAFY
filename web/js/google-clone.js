// '' "" 같게 동작하므로 규칙만 맞춰주면된다
// 토글 버튼
const toggleButton = document.querySelector('.toggle-button')
// 배경
const bodyBackground = document.querySelector('body');
// header-nav
const headerNav = document.querySelector(".header-nav-list-wrapper");
// bookmark-wrapper
const bookmarkWrapper = document.querySelector('bookmark-wrapper');
// search-input
const searchInput = document.querySelector('#search-input');
// img-icon-wrapper
// querySelectorAll 로 변경
const imgIconWrappers = document.querySelectorAll('.img-icon-wrapper');
// bookmark-text
const bookmarkTexts = document.querySelectorAll('.bookmark-text');

toggleButton.addEventListener('click', function () {
  // 클릭
  // 다크모드로 전환되는 상태
  // 다크모드 -> 일반모드 라고 텍스트 변경을 해줘야한다.
  toggleButton.textContent = "다크 모드";

  // . 붙이지 않음 주의
  toggleButton.classList.toggle('toggle-button-darkmode');
  bodyBackground.classList.toggle('body-background-darkmode');
  headerNav.classList.toggle('text-darkmode');

  for(let i= 0 ; i < imgIconWrappers.length; i++) {
    imgIconWrappers[i].classList.toggle("img-icon-wrapper-darkmode");
  }

  for(let i= 0 ; i < bookmarkTexts.length; i++) {
    bookmarkTexts[i].classList.toggle("text-darkmode");
  }

  // classList.contains를 활용
  if(toggleButton.classList.contains('toggle-button-darkmode')) {
    toggleButton.textContent = "일반 모드";
  }
})

searchInput.addEventListener('keyup', function (e) {
  // e.code 어떤키를 입력했는지 알 수 있게 해줌
  // enter를 입력했을때 그거로 검색을 진행할 예정
  if(e.code === "Enter") {
    // 검색어가 존재하는 경우에만 이동
    // if(e.target.value === "")
    if (!e.target.value) {
      alert("검색어를 입력하지 않으셨습니다!");
      return;
    }
    // 이동하기
    const googleSearch = "https://www.google.com/search?q=";
    location.href = googleSearch + e.target.value;

// 새창으로 열기
// window.open
// <a hrdf="" target= "_blank">새창으로 열기 </a>
// window.open(googleSearch+e.target.value, "_blank")
  }
})