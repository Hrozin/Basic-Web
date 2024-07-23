function scrollToElement(elementSelector, instance = 0){
    //선택자와 일치하는 요소 선택
    const elements = document.querySelectorAll(elementSelector);
    //선택자와 일치하는 요소 확인, 인스턴스 존재하는지 확인
    if(elements.length > instance){
        //지정된 인스턴스 스크롤
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    //Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});