const btn=document.getElementById('add-money-btn');

const validPin=1234;
const validAcc=12345678910;


//add money features : 
btn.addEventListener('click',function () {
    const bank=document.getElementById('bank').value;
    const accountNum=parseInt(document.getElementById('account-num').value);
    const addMoney=parseInt(document.getElementById('add-money').value);

    const pinNum=parseInt(document.getElementById('pin').value);
    const availableAmount=parseInt(document.getElementById('available-amount').innerText);
    if (accountNum.length !== 11&&accountNum !== validAcc ) {
        alert('Please provide valid account number');
        return;
    }
    if (validPin !== pinNum) {
        alert('Incorrect Pin Number');
        return;
    }
//cALCULATION
    const newAvailableAmount=availableAmount+addMoney;
   
   document.getElementById('available-amount').innerText=newAvailableAmount;
    
   
    
})
//withdraw money features:
document.getElementById('withdraw-btn').addEventListener('click',function () {
    const agentNumber=parseInt(document.getElementById('agent-num').value);
    const withdrawAmount=parseInt(document.getElementById('withdraw-amount').value);
      const availableAmount=parseInt(document.getElementById('available-amount').innerText);
    const pinNum=parseInt(document.getElementById('pin-withdraw').value);
    // if (agentNumber.length !== 11 ) {
    //     alert('Please provide valid account number');
    //     return;
    // }
    if (validPin !== pinNum) {
        alert('Incorrect Pin Number');
        return;
    }
    //cALCULATION
    const afterWithdrawNewAvailableAmount=availableAmount-withdrawAmount;
   console.log(withdrawAmount);
   console.log(availableAmount);
   
   console.log(afterWithdrawNewAvailableAmount);
   
   document.getElementById('available-amount').innerText=afterWithdrawNewAvailableAmount;
})
//toggling 

document.getElementById('add-btn').addEventListener('click',function () {

        
    document.getElementById('add-money-parent').style.display='block';
     document.getElementById('cash-out-parent').style.display='none';
     //style
    document.getElementById('add-btn').style.border='1px solid blue';
     document.getElementById('cash-out-btn').style.border='1px solid  rgba(169, 169, 169, 0.3)';
    document.getElementById('add-text').style.color='blue';
     document.getElementById('cash-out-text').style.color=' #9ca3af';
       
})


document.getElementById('cash-out-btn').addEventListener('click',function () {
    
    document.getElementById('cash-out-parent').style.display='block';
    document.getElementById('add-money-parent').style.display='none';
    //style

    document.getElementById('cash-out-btn').style.border='1px solid blue';
     document.getElementById('add-btn').style.border='1px solid rgba(169, 169, 169, 0.3) ';
      document.getElementById('add-text').style.color=' #9ca3af';
    document.getElementById('cash-out-text').style.color='blue';
    
})