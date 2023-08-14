//Build a banking application;
let customername = document.getElementById('customername');
let customerdetails = document.getElementById('details');
let balance = document.getElementById('balance');

let sub=()=>{

    customerdetails.innerHTML=`Name : ${customername.value} `;
    balance.innerHTML=`A/C Balance : 100000`


    
}
let withdrawamount = document.getElementById('withdraw');
let fb = document.getElementById('fb');
let secondsub=()=>{
 
  let finalbalance = 100000-withdrawamount.value;
  fb.innerHTML=`: ${finalbalance}`
}