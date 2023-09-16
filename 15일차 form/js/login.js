(function(){

    const formEl = document.querySelector('form');
    const usernameEl = document.querySelector('.username');
    const passwordEl = document.querySelector('.password');
    const error_messageEl = document.querySelector('.error_message');

    const handleSubmit = (e) => {
        e.preventDefault();

     const usernameValue = usernameEl.value;

     const usernameLen = usernameValue.length;
     if(usernameLen <= 2) {
        error_messageEl.innerText = "아이디는 2자리 이상 작성해주세요";
     }
    }


    formEl.addEventListener('submit',handleSubmit);

})();