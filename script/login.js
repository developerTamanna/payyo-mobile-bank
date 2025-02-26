document.getElementById('login-btn').addEventListener('click', 
    function(event){
   event.preventDefault();
//    console.log('hello boss')
  const accountNumber = document.getElementById('account-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  const convertPin = parseInt(pinNumber)
//   console.log(accountNumber, pinNumber)
  if(accountNumber.length === 11){
  if(convertPin === 1234){
    // console.log('thik ache')
    window.location.href="main.html"
  }
  else{
    alert('your pin number is wrong')
  }
  }
  else{
    alert('your account number in wrong')
  }
})