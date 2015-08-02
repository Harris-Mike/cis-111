function toWord (n){
	//make sure n is a number
	n = Number(n)
	//pronounce the number n
	if(n===1)
		return "one";
	else if(n===2)
		return "two";
	else if(n===3)
		return "three";
	else if(n===4)
		return "four";
	else if(n<1)
		return "too small";
	else if(n>4)
		return "too large";


}

var btn1=document.getElementById('button1');
btn1.onclick=function(){
	document.getElementById("outputDiv").innerHTML=
toWord(document.getElementById("numtext").value);

}