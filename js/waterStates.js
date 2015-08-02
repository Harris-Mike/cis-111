var water;
function Temp(water){
if(water <= 0)
	return "solid";

if (water > 0 && water < 99.98)
	return "liquid";
if (water >= 99.98 && water < 11726.85)
	return "gas";
if(water >= 11726.85)
	return "plasma";
}