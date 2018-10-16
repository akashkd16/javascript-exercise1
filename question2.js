var arrayOfNumbers=[234,123,237,112,545];

function myFunction1()
{
	
	document.getElementById("q2").innerHTML=arrayOfNumbers;

}

function myFunction2()
{

	var len=arrayOfNumbers.length;
	var maxNumber=arrayOfNumbers[0];
	for(let i=1;i<len;i++)
	{
        if(arrayOfNumbers[i]>maxNumber)
        	maxNumber=arrayOfNumbers[i];
	}
	document.getElementById("q2").innerHTML=maxNumber;
}

