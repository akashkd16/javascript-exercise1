function myFunction()
{
var d=new Date();
var year=d.getFullYear();
var month=d.getMonth()+1;
var date=d.getDate();
var hour=d.getHours();
var minute=d.getMinutes();
var second=d.getSeconds();
var result=month+"/"+date+"/"+year+ "  "+ hour+":"+minute+":"+second;

document.getElementById("q1").innerHTML=result;
}
