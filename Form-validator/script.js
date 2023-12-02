const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');



function error(input,message){

    input.className ='form-control is-invalid'; 
    const div = input.nextElementSibling; // html sayfasına bak inputa en yakın div elementini al. aynı hizadaki element ulaştığın elementten bir sonraki element
    div.innerText = message;
    div.className = 'invalid-feedback';
    
}


function success(input){

    input.className ='form-control is-valid'; 
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


form.addEventListener('submit',function(e)
{
    e.preventDefault(); // formun default olanı kapatıyoruz formda yenileme olmaz submit olmaz
    

  
    if (username.value === '') {
        error(username,'UserName gerekli');
    }
    else{
        success(username);
    }   
    
    if (email.value === '') {
        error(email,'Email gerekli');
    }
    else if(!validateEmail(email.value)){
        error(email,'Düzgün Email gerekli');
    }
    else{
        success(email);
    }   

    if (password.value === '') {
        error(password,'Password gerekli');
    }
    else{
        success(password);
    }  

    if (repassword.value === '') {
        error(repassword,'Repassword gerekli');
    }
    else{
        success(repassword);
    }   

});
