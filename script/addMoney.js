document.getElementById('cash-out').style.display ='none'

document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('add-mony').style.display='block'
    document.getElementById('cash-out').style.display='none'

})
document.getElementById('cashout-box').addEventListener('click', function(){
    document.getElementById('add-mony').style.display='none'
    document.getElementById('cash-out').style.display='block'

})