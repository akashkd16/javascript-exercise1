var input=prompt("Enter space separated string");
var arr=input.split(" ");
var set1=new Set();
for(int i=0;i<arr.length;i++)
{
	set1.add(arr[i]);
}
console.log(set1);