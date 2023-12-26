function submitlogin(){
     userinput=document.getElementById('email').value;
     passwordInput= document.getElementById('password').value;
   

   let email_regex= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
   let password_regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

if (!email_regex.test (userinput)) {
    alert("invalid email. Please enter a valid user email'error'");
}
if (!password_regex.test (passwordInput)){
    alert ("Invalid password. It must contain at least 8 characters includes numbers, small and capital letters., error")
}
   
}