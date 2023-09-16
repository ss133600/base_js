(function(){

    const wrapEl = document.querySelector('.wrap');
    const headerEl = document.querySelector('header');
    const sec_2 = document.querySelector('.section_2');
    const barEl = document.querySelector('.bar');

    const handleScroll = () => {
        const pageY = window.pageYOffset;
        const secTop_2 = sec_2.offsetTop;

        // console.log(pageY);
        // console.log(secTop_2);


        if(pageY >= 200){
            headerEl.classList.add('header_fix');
        }else{
            headerEl.classList.remove('header_fix');
        }

        // header event end

        if(pageY >= secTop_2 / 2){
            // console.log(sec_2);
            sec_2.classList.add('con_up');
        }else{
            sec_2.classList.remove('con_up');
        }

        //section_2 .con event end

        // 스크롤을 내릴때 bar의 가로값이 올라가게 작업하기!


        const useScroll = wrapEl.offsetHeight - window.innerHeight;
        // console.log(`wrap의 전체 높이 : ${wrapEl.offsetHeight}`);
        // console.log(`브라우저의 높이: ${window.innerHeight}`);
        // console.log(`실제 사용 가능한 높이: ${useScroll}`);

        const calcResult = pageY / useScroll * 100;
        // console.log(calcResult);

        barEl.style.width = `${calcResult}%`;

    }

    window.addEventListener('scroll', handleScroll);


})();