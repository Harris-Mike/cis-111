			

var calculateTip =function (amt, pct){
			
	
             var tip = amt * (pct/100);
             return tip.toFixed(2);
             document.getElementById('outputDiv').innerHTML= 'You should tip $' + tip.toFixed(2)

         }
			var clcbtn=document.getElementById("calcbttn");
			clcbtn.onclick= function(){
							
							document.getElementById('outputDiv').innerHTML = "You should tip $" +
	   calculateTip(document.getElementById('amountBox').value, document.getElementById('tipBox').value) ;

			}