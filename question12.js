var str=prompt("Enter String");
var char=prompt("Enter a character");
var arr=str.split("");
var count=0;
for(var i=0;i<arr.length;i++)
{
	if(arr[i]==char)
		count++;
}
console.log(count);