var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var result1=myObj.filter(myObj=>myObj.occupation==="Programmer");
console.log(result1);

console.log("     --------------------------------------------------------------------         ");

var byAge=myObj.slice(0);
byAge.sort(function(a,b)
{
	// var x=a.age;
	// var y=b.age;
	// return x<y ? -1 : x>y ? 1 : 0;
	return a.age-b.age;
});
console.log(byAge);

console.log("     --------------------------------------------------------------------         ");

var result = myObj.reduce(function(result, myObj){
  result[myObj.occupation] = (result[myObj.occupation] || []).concat(myObj.name,myObj.age);
  return result;
}, {});

console.log(result);


console.log("     --------------------------------------------------------------------         ");

var objName=[];
myObj.forEach(function(myObj){
 objName.push(myObj.name);
 
});
console.log(objName);
