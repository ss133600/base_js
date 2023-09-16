(function(){

     // 스크롤이 내릴때 .bar의 가로값이 스크롤 기준에 맞춰 
        // 늘어나게 작업하기

        // 문제점
        // =>pageY는 스크롤 top값을 가져오기 때문에
        // %값으로 바로 적용하면 엄청 늘어남
        
        // 해결방안
        // =>pageY를 %화 작업하여 전체 px크기를 100분율로 작업하기!

        // *%화 작업
        // =>스크롤바의 높이를 전체 높이 기준으로 나눠서 * 100을 해주면 백분율 계산
        // =>스크롤바는 브라우저 제일 하단으로 내려가지 않기 때문에 
        // 전체높이 - 브라우저 높이를 해줘야 실제 사용할 수 있는 스크롤 범위가 나옴

        // 공식)
        // pageY / (전체높이 - 브라우저 높이) * 100

        const wrapEl = document.querySelector('.wrap');
        const barEl = document.querySelector('.bar');
        const bigTitleEl = document.querySelector('.big_title'); 


    const handleScroll = () => {

        const pageY = window.pageYOffset;
        const wrapHeight = wrapEl.offsetHeight;
        const useScroll = wrapHeight - window.innerHeight;
        const result = (pageY / useScroll) * 100

        // console.log("wrap의 전체 높이: ", wrapHeight);
        // console.log("브라우저의 높이: " , window.innerHeight)
        // console.log("실제 사용할 수 있는 스크롤 범위: ",useScroll);
        console.log(result);


        barEl.style.width = `${result}%` 
        barEl.innerText = Math.round(result) + "%";
        bigTitleEl.style.left = '-${result}%'

    }
    
    window.addEventListener('scroll' , handleScroll)


})();

