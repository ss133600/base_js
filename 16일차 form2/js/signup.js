(() => {

    const userDB = {
        username: "test",
        id: "가나다",
        email: "abc@naver.com",
        password: "123"
    }

    const formEl = document.querySelector('form');
    const usernameEl = document.querySelector('.username');
    const idEl = document.querySelector('.id');
    const emailEl = document.querySelector('.email');
    const passwordEl = document.querySelector('.password');
    const errorMessageEl = document.querySelector('.error_message');


    const handleSubmit = (e) => {
        e.preventDefault();

        const usernameValue = usernameEl.value;
        const idValue = idEl.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        
        if(usernameValue === ""){
            errorMessageEl.innerText = "아이디는 필수입니다."
        }else if(passwordValue === ""){
            errorMessageEl.innerText = "패스워드는 필수입니다."
        }
    }
    formEl.addEventListener('submit', handleSubmit)




})();