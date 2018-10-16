var input=prompt("Enter String");
var arr=input.split("");
arr.sort();
var str="";
for(var i=0;i<arr.length;i++)
	str=str+arr[i];
console.log(str);