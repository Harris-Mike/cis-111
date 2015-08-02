function RollUntilDoubles()
     // Assumes: outputDiv is available for output
     // Results: rolls and displays dice until doubles are obtained
     {
      var roll1, roll2, rollCounter;
       document.getElementById('outputDiv').innerHTML="";
       document.getElementById("rollCount").innerHTML=0;
        do {                	// WHILE NOT DOUBLES,
         roll1 = RandomInt(1, 6);              	// ROLL AGAIN AND DISPLAY AT
         roll2 = RandomInt(1, 6);				// THE END OF THE PAGE DIVISION
         document.getElementById('outputDiv').innerHTML = 
           document.getElementById('outputDiv').innerHTML+roll1+'-'+roll2+'<br>';
           rollCounter=document.getElementById('rollCount').innerHTML;
           rollCounter++;
           document.getElementById('rollCount').innerHTML= rollCounter;
           probCount=(1/rollCounter).toFixed(6);
           document.getElementById("probCount").innerHTML=probCount;


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
