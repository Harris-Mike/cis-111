var numReverse= function(n){
/* 
reverses number string 
returns as number
*/


var stringNum=String(n);
var numStringArr=stringNum.split("");
var numSwitch=numStringArr.reverse().join("");
numString=Number(numSwitch);
return numString

}

}




var driver = function (){
numReverse($("inBox").value);	
numDifference($("inBox").value);
numDifferenceReverse();

$("outDiv").innerHTML= 

"The reverse of " + $("inBox").value + " is " + numReverse($('inBox').value)  + "<br>" + 

"The difference between " + $("inBox").value + " and " + numReverse($('inBox').value) + " is " + ($('inBox').value - numReverse($('inBox').value)) + "<br>"

+

"The reverse difference is " + numReverse(($('inBox').value - numReverse($('inBox').value))) + "<br>" +

"The sum of the difference and reverse difference is.....  1089"





} 

var btn1= $("btn1");
btn1.onclick = function() {

	driver(); 

}


