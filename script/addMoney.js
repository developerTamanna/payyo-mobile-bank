document.getElementById('cash-out').style.display ='none'

document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('add-mony').style.display='block'
    document.getElementById('cash-out').style.display='none'

})
document.getElementById('cashout-box').addEventListener('click', function(){
    document.getElementById('add-mony').style.display='none'
    document.getElementById('cash-out').style.display='block'

})

document.getElementById('add-mony-1').addEventListener('click', function(event){
  event.preventDefault()
//   console.log('helllo')
  const accountNumber = document.getElementById('account-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  const convertPin = parseInt(pinNumber)
//   console.log(accountNumber, pinNumber);
  const amount = document.getElementById('amount-add').value;
  const convertAmount = parseFloat(amount)
  const mainBalance = document.getElementById('main-balance-add').innerText;
  const convertMainBalance = parseFloat(mainBalance);
//   console.log(Amount)
if(accountNumber.length === 11){
    if(convertPin === 1234){
    //    console.log('everything is oky')
        if(isNaN(convertAmount) || convertAmount <=0){
            alert('please enter a valid amount')
        }
      const sum = convertMainBalance + convertAmount;
    //   console.log(sum)
    document.getElementById('main-balance-add').innerText = sum;
    document.getElementById('account-number').value = '';
    document.getElementById('pin-number').value = '';
    document.getElementById('amount-add').value = '';

    }
    else{
    alert('wrong pin')
    }
}
else{
  alert('wrong account number')
}
})
