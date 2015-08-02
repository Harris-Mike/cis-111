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
           $('outputDiv').innerHTML+'<img src=../images/die'+ roll1 + '.gif>' + ' -'+ '<img src=../images/die'+ roll2 + '.gif>' + '<br>';
           rollCounter=$('rollCount').innerHTML;
           rollCounter++;
           $('rollCount').innerHTML= rollCounter;

           //update image elements to show doubles
           $("img1").src="../images/die" + roll1 +".gif";
           $("img2").src="../images/die" + roll2 +".gif";
       }
       while (roll1 != roll2);
       
       document.getElementById('outputDiv').innerHTML = 
         document.getElementById('outputDiv').innerHTML+'DOUBLES!';
     }

      var rollButton=document.getElementById('btn1');
     rollButton.onclick= RollUntilDoubles;
