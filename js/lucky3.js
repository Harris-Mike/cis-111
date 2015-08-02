
   
     // Assumes: minBox and maxBox define the range for the value
     // Results: picks a random number and displays it in outputDiv
     function GenerateNumber(){
       var minVal = parseFloat(document.getElementById('minBox').value);
       var maxVal = parseFloat(document.getElementById('maxBox').value);
       var number = Math.floor(Math.random() *  (maxVal - minVal + 1)) + minVal;
       document.getElementById('outputDiv').innerHTML=
         'Your lucky number is ' + number;
     }
	     var button1=document.getElementById("button");

       button1.onClick= GenerateNumber;
   