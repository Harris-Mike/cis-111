function RollUntilDoubles()
     // Assumes: outputDiv is available for output
     // Results: rolls and displays dice until doubles are obtained
     {
      var roll1, roll2, rollCounter;
       $('outputDiv').innerHTML="";
       $("rollCount").innerHTML=0;
        do {                  // WHILE NOT DOUBLES,
         roll1 = RandomInt(1, 6);               // ROLL AGAIN AND DISPLAY AT
         roll2 = RandomInt(1, 6);       // THE END OF THE PAGE DIVISION
         $('outputDiv').innerHTML = 
           $('outputDiv').innerHTML+roll1+'-'+ '<img src=../images/die'+ roll2 + '.gif>' + '<br>';
           rollCounter=$('rollCount').innerHTML;
           rollCounter++;
           $('rollCount').innerHTML= rollCounter;
       }
       while (roll1 != roll2);
       
      $('outputDiv').innerHTML = 
         $('outputDiv').innerHTML+'DOUBLES!';
     }

      var rollButton=document.getElementById('btn1');
     rollButton.onclick= RollUntilDoubles;
