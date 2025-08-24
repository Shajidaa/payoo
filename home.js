const btn=document.getElementById('add-money-btn');

const validPin=1234;
const transaction =[];


// function to get input values
function getInputValueNumber(id){
  const inputField=document.getElementById(id);
  const inputFieldValue=inputField.value;
  const inputFieldNumber =parseInt(inputFieldValue);
  return (inputFieldNumber);
  
}


//function to get inner text
function getInnerText(id){
  const element=document.getElementById(id);
  const elementVAlue=element.innerText;
  const elementVAlueNumber=parseInt(elementVAlue);
  return elementVAlueNumber;
}

//function to set inner text 
function setInnerText(value) {
  const availableBalance=document.getElementById('available-amount');
  availableBalance.innerText=value;
}

//add money features : 
btn.addEventListener('click',function (e) {
  e.preventDefault();
    const bank=document.getElementById('bank').value;
    const accountNum=parseInt(document.getElementById('account-num').value);
    const addMoney=getInputValueNumber('add-money');

    const pinNum=getInputValueNumber('pin');
    const availableAmount=getInnerText('available-amount');
    if (addMoney<=0) {
     return alert('Invalid amount')
    }
    if (accountNum.length < 11 ) {
        alert('Please provide valid account number');
        return;
    }
    if (validPin !== pinNum) {
        alert('Incorrect Pin Number');
        return;
    }



//cALCULATION
    const newAvailableAmount=availableAmount+addMoney;
   
  //  document.getElementById('available-amount').innerText=newAvailableAmount; 
   setInnerText(newAvailableAmount);

   const data={
name:'Add Money',
time:new Date().toLocaleTimeString(),
   }
   transaction.push(data)
  //  console.log(transaction);
   
   
})





//withdraw money features:
document.getElementById('withdraw-btn').addEventListener('click',function () {
    // const agentNumber=parseInt(document.getElementById('agent-num').value);
    const withdrawAmount=getInputValueNumber('withdraw-amount');
      const availableAmount=getInnerText('available-amount');
    const pinNum=getInputValueNumber('pin-withdraw');  
    // if (agentNumber.length != 11 ) {
    //     alert('Please provide valid account number');
    //     return;
    // }
    if (validPin !== pinNum) {
        alert('Incorrect Pin Number');
        return;
    }
    if (withdrawAmount<=0 || withdrawAmount<availableAmount) {
      return alert('Invalid amount')
    }
    //cALCULATION
    const afterWithdrawNewAvailableAmount=availableAmount-withdrawAmount;

   
   console.log(afterWithdrawNewAvailableAmount);
   
  //  document.getElementById('available-amount').innerText=afterWithdrawNewAvailableAmount;
  setInnerText(afterWithdrawNewAvailableAmount);
  
   const data={
name:'Cash Out Money',
time:new Date().toLocaleTimeString(),
   }
   transaction.push(data)
})


//Transfer money
document.getElementById('send-now-btn').addEventListener('click',function(){

   const availableAmount=getInnerText('available-amount');
      const sendAmount=getInputValueNumber('send-amount');
      const pinNum=getInputValueNumber('pin-transfer')
      const accountNum=parseInt(document.getElementById('account-num').value);
    //   if (accountNum.length !== 11) {
    //     alert('Please provide valid account number');
    //     return;
    //   }
       if (validPin !== pinNum) {
        alert('Incorrect Pin Number');
        return;
    }
      const afterSendMoneyAvailableAmount=availableAmount-sendAmount;
     console.log(afterSendMoneyAvailableAmount);
   
  //  document.getElementById('available-amount').innerText=afterSendMoneyAvailableAmount;
  setInnerText(afterSendMoneyAvailableAmount);
  
   const data={
name:'Transfer Money',
time:new Date().toLocaleTimeString(),
   }
   transaction.push(data)
})



//pay bill
document.getElementById('pay-btn').addEventListener('click',function(){


      const availableAmount=getInnerText('available-amount');
      const sendAmount=getInputValueNumber('pay-money');
      const payPinNum=getInputValueNumber('pin-pay');
      const accountNum=parseInt(document.getElementById('account-num').value);
    //   if (accountNum.length !== 11) {
    //     alert('Please provide valid account number');
    //     return;
    //   }
       if (validPin !== payPinNum) {
        alert('Incorrect Pin Number');
        return;
    }
      const payAmount=availableAmount-sendAmount;
     console.log(payAmount);
   
  //  document.getElementById('available-amount').innerText=payAmount;
  setInnerText(payAmount);
  
   const data={
name:'Pay Money',
time:new Date().toLocaleTimeString(),
   }
   transaction.push(data)
})



//toggling 

document.getElementById('add-btn').addEventListener('click',function (e) {
        const forms=document.getElementsByClassName('form');
        for (const form  of forms) {
          // console.log(form);
          form.style.display='none';
          
        }

    document.getElementById('add-money-parent').style.display='block';


    //  document.getElementById('cash-out-parent').style.display='none';
    //   document.getElementById('transfer-parent').style.display='none';
    //    document.getElementById('bonus-parent').style.display='none';
    //  //style
    // document.getElementById('add-btn').style.border='1px solid blue';
    //  document.getElementById('cash-out-btn').style.border='1px solid  rgba(169, 169, 169, 0.3)';
    // document.getElementById('add-text').style.color='blue';
    //  document.getElementById('cash-out-text').style.color=' #9ca3af';
       
})


document.getElementById('cash-out-btn').addEventListener('click',function () {
    
 const forms=document.getElementsByClassName('form');
        for (const form  of forms) {
          // console.log(form);
          form.style.display='none';
          
        }
    document.getElementById('cash-out-parent').style.display='block';
    
    
})


document.getElementById('transfer-btn').addEventListener('click',function(){
   
   const forms=document.getElementsByClassName('form');
        for (const form  of forms) {
          // console.log(form);
          form.style.display='none';
          
        }
            document.getElementById('transfer-parent').style.display='block';
          
      //style



});

document.getElementById('get-bonus-btn-parent').addEventListener('click',function(){
    const forms=document.getElementsByClassName('form');
        for (const form  of forms) {
          // console.log(form);
          form.style.display='none';
          
        }
            document.getElementById('bonus-parent').style.display='block';
            
      //style



});

document.getElementById('pay-bill-btn').addEventListener('click',function(){
    const forms=document.getElementsByClassName('form');
        for (const form  of forms) {
          // console.log(form);
          form.style.display='none';
          
        }
            document.getElementById('pay-bill-parent').style.display='block';
         
    
      //style



});

document.getElementById('transaction-btn')
.addEventListener('click',function(){
    const forms=document.getElementsByClassName('form');
        for (const form  of forms) {
          // console.log(form);
          form.style.display='none';
          
        }
        document.getElementById('transaction-parent').style.display='block';

        const transactionContainer=document.
        getElementById('transaction-container');

        transactionContainer.innerText='';
        for (const data  of transaction) {
          const div=document.createElement('div')
          div.innerHTML=`
          <div class="flex justify-between items-center bg-white p-2 rounded-xl">
          <div class="flex gap-3">
            <div class="rounded-[50%] bg-[#F4F5F7] p-2">
              <img src="./assets/wallet1.png" alt="" />
            </div>
            <div class="">
              <h1 class="text-sm text-black font-semibold">${data.name}</h1>
              <p class="text-gray-400 text-[12px]">${data.time}</p>
            </div>
          </div>
          <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
        </div>`

        transactionContainer.appendChild(div)
        }
         
    



});