var string;

function timelyMsg() {
	//when is now?
	var now = new Date();
	var timeOfDay= now.getHours();

	//crank out a greeting
	if(timeOfDay >= 0 && timeOfDay <12)
		string = "Good Morning!";
	
	else if(timeOfDay >= 12  && timeOfDay < 17)
		string="Good Afternoon!";
	
	else if(timeOfDay >= 17 && timeOfDay < 21)
		string="Good Evening!";
	
	else if(timeOfDay>= 21 && timeOfDay <23)
		string="Good Night!";
}
var bttn1=document.getElementById("time");
bttn1.onclick=function() {
	timelyMsg();
	document.getElementById("outputDiv").innerHTML=string;
}

