const btn=document.getElementById('add-money-btn');

const validPin=1234;
const validAcc=12345678910;
//function


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