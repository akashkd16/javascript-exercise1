var input1=prompt("Enter space separated string");
var input2=prompt("Enter 2nd space separated string");
var arr1= input1.split(" ");
var arr2= input2.split(" ");
var arr3=[];
var bool1=[];
var bool2=[];
// for(var i=0;i<1000;i++)
// {
// 	bool1[i]=0;
// 	bool2[i]=0;
// }
for(var j=0;j<arr1.length;j++)
{
     bool1[arr1[j]]=1;
}

for(var k=0;k<arr2.length;k++)
{
     bool2[arr2[k]]=1;
}

for(var x=0;x<arr2.length;x++)
{
     if(bool1[arr2[x]]!=1)
     	arr3.push(arr2[x]);
}

for(var y=0;y<arr1.length;y++)
{
	if(bool2[arr1[y]]!=1)
		arr3.push(arr1[y]);
}
console.log(arr3);


