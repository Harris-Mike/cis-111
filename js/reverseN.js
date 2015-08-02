var numString;
var numReverse= function(n){
var stringNum=String(n);
var numStringArr=stringNum.split("");
var numSwitch=numStringArr.reverse().join("");
numString=Number(numSwitch);

return numString;
}
