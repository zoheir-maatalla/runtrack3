


function bisextile(year) {
	if(( year % 4 == 0 && year % 100!= 0) || year % 400 == 0 )
	{
		return true;
	}
	else {
		return false;
	}
}

console.log(bisextile(2020));
alert (bisextile(2028));