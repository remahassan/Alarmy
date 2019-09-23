
var pickertime;
var countDownDate;
var audio =new Audio('alarmy.mp3');
var days;
var seconds;
var x;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      if (request.data!= null) {
         
        
         pickertime=request.data;
         countDownDate = new Date(pickertime).getTime();
       x=  setInterval(function()
         {
           var now = new Date().getTime();
           pickertime = countDownDate - now;
           days = Math.floor(pickertime / (1000 * 60 * 60 * 24));
          var hours = Math.floor((pickertime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((pickertime % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((pickertime % (1000 * 60)) / 1000);
          console.log("sec: "+seconds);
          if(days ==0 && hours ==0 && minutes ==0 && seconds ==0)
          {
            audio.play();
           alert(" Time Up !!!!");
           clearInterval(x);

       
          }
          else if(isNaN(countDownDate))//&& isNaN(hours) && isNaN(minutes) && isNaN(seconds))
          {
           clearInterval(x);

           alert("Enter The Time !");
           clearInterval(x);
          }
          else if(pickertime<0)
          {
           clearInterval(x);

           alert(" Expierd !!!!");

          }
         },1000);
          
          return;
      }
    

      console.log("error date");

  },
);

       
      
  


 
 
 
 
 
 
 