// console.log('login');
const loginBtn=document.getElementById('login-btn');


      loginBtn.addEventListener('click',function(e){
      e.preventDefault();
     
     console.log(e);
      console.log('click');
      
     const mobileNumber=12345678910;
     const digit=1234;
     // console.log(mobileNumber, digit);
     const inputMobileNumber=document.getElementById('input-mobile-num').value;
     const pinNumber=document.getElementById('pin-num').value;

      const inputMobileNumberConvert=parseInt(inputMobileNumber);
      const pinNumberConvert=parseInt(pinNumber);
    
     if (inputMobileNumberConvert ===mobileNumber && pinNumberConvert=== digit ) {
        // console.log('All value matches');
        window.location.href='./home.html'
        
    }
    else{
        alert('Invalidation');
        
    }
    
})