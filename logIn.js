function submitlogin(){
    const userinput=document.getElementById('username');
    const passwordInput= document.getElementById('password');
    const login={
        username:userinput.value,
        password:passwordInput.value
    };

    if (login.username==='admin' && login.password==='123'){
        alert('Welcome')
    }
    else{
        alert('Not registered');
    }

   
}