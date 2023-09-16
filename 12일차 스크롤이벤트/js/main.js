(function(){

    // *스크롤 이벤트
    // => 브라우저에 스크롤을 이용하여 이벤트를 사용함
    // => 선택자(객체)는 보통 window를 사용함

    const boxEl = document.querySelector('.box');

    const handleScroll = () => {
        const pageY = window.pageYOffset
        // =>윈도우 객체가 가지고 있는 스크롤바의 거리를 px로 가져옴
        // =>window는 생략 가능
        const boxTop = boxEl.offsetTop;
        // =>엘리번트의 top에서 현재 위치 거리
        // =>translate는 포함하지 않음

        console.log("스크롤 탑 값:" + pageY);
        console.log("box top 값:" + boxTop);        



        if(pageY >= 800){
            // boxEl.style.backgroundColor = "teal"
            boxEl.classList.add('active');
        }else{
            // boxEl.style.backgroundColor = "gold"
            boxEl.classList.remove('active');
        }
        // console.log(pageY);
    }

    window.addEventListener('scroll', handleScroll);

})();
