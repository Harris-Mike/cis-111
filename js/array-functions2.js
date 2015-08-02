var evenCounter = 0;
var allOdd= function(arr){
	for(i=0; i<arr.length; i++){
		if(arr[i] % 2 == 0)
			evenCounter++;
	
	}	

	if(evenCounter==0)
		return true;
	else return false;


};