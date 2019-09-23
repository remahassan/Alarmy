 setInterval(function() {
    var date = new Date();
    var cuttime =  date.getHours() + ":" + date.getMinutes() ;
    var clock=document.getElementById('clock-wrapper');
    if(clock)
    {
        clock.innerHTML=cuttime;

    }

},1000);
   
  
     var btn=document.getElementById("btn");
    if(btn)
    {
        btn.addEventListener("click",function()
        {
            
         var c= document.getElementById("pickertime").value;

         
            chrome.runtime.sendMessage({
                data: c,
                countDown:countDownDate
             });
         });
       
                
  
   
}