var str=prompt("Enter Email")

function valid_email(str)
{
var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
if(mailformat.test(str))
{  
return("Valid email address!");  
}  
else  
{  
return("You have entered an invalid email address!");  
}
}

var result= valid_email(str);
console.log(result);
