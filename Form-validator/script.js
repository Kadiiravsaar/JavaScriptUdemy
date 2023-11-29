const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

form.addEventListener('submit',function(e)
{
    e.preventDefault(); // formun default olanı kapatıyoruz formda yenileme olmaz submit olmaz
    
  
    if (username.value === '') {
        username.className ='form-control is-invalid';
    }   
});
