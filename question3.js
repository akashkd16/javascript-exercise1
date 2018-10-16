var number=prompt("Enter a number");
var array=number.split("");
var string ="";
if(number!=null)
{
	for(int i=0;i<array.length-1;i++)
	{
		if(array[i]%2==0&&array[i+1]%2==0)
			string=string+array[i]+"-";
		else
			string=string+array[i];
	}
	string=string+array[array.length-1];
	console.log(string);
}
