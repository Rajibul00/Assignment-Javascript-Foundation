let email = document.getElementById('email')
let password= document.getElementById('password');
let emailissue = document.getElementById('emailissue')
let passwordissue= document.getElementById('passwordissue');
let sub=()=>{
  if(email.value=="" ){
    emailissue.innerText='E-mail should not be empty';
    emailissue.style.color='red'

  }if( password.value==""){
    passwordissue.innerText='Password should not be empty';
    passwordissue.style.color='red'
  }if(!(email.value.includes('@'))){
    emailissue.innerText='Invalid email [ E-mail should contain @ ]';
    emailissue.style.color='red'
  }if( password.value.length<8){
    passwordissue.innerText='Inavlid Password [ Password should contain minimum 8 characters ]  ';
    passwordissue.style.color='red'
  }
  if(!(email.value=="")&&!(password.value=="")&&(email.value.includes('@'))&&(password.value.length>=8)){
    emailissue.innerText= 'Valid E-mail';
    passwordissue.innerText='Valid Password';

    emailissue.style.color='green';
 passwordissue.style.color='green'
  }
}