(function(){

    const formEl = document.querySelector('form');
    const inputEl = document.querySelector('input');
    const commentWrapEl = document.querySelector('.comment_wrap');


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("잘 출력됨!");

        const inputValue = inputEl.value;
        const commentEl = document.createElement("p");

        commentEl.innerText = inputValue;
        // console.log(commentEl);
        commentEl.classList.add("comment");
        // console.log(commentEl);
        commentWrapEl.appendChild(commentEl);

        inputEl.value = "";

        
        
    }

    formEl.addEventListener('submit', handleSubmit);





})();