(() => {

    const userDB = {
        username: "test",
        password: "123"
    }

    const formEl = document.querySelector('form');
    const usernameEl = document.querySelector('.username');
    const passwordEl = document.querySelector('.password');
    const errorMessageEl = document.querySelector('.error_message');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usernameValue = usernameEl.value;
        const passwordValue = passwordEl.value;

        if(usernameValue === ""){
            errorMessageEl.innerText = "아이디는 필수입니다."
        }else if(passwordValue === ""){
            errorMessageEl.innerText = "패스워드는 필수입니다."
        }else if(usernameValue !== userDB.username){
            errorMessageEl.innerText = "아이디가 틀렸습니다."
        }else if(passwordValue !== userDB.password){
            errorMessageEl.innerText = "패스워드가 틀렸습니다."
        }else{
            // window.location.href = "index.html"
            // =>경로 설정으로 페이지를 이동시킬수 있음

            window.location.replace ("index.html")
            // =>이전페이지로 이동할 수 없게 작업
            alert("로그인 되었습니다😉")
        }
    }

    formEl.addEventListener('submit', handleSubmit)


})();