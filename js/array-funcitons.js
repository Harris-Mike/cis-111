var arrAvg = function(arr){
	var sum = 0;

	for(var i=0; i <arr.length; ++i){
		sum = sum + arr[i];
	}
	return (sum/arr.length);

}
var arrMax = function(arr){
	var maxSoFar = 0;

    for (i=0; i<arr.length; i++) {
    	if (arr[i]>maxSoFar) {
        	maxSoFar = arr[i];
    	}
	}
	return maxSoFar;
}

 

var arrHasOneEven = function(arr){
	for(i=0;i<arr.length; i++){
		if(arr[i]%2===0)
			return true
		else
			return false
		}
	}