


var equ=prompt("Enter your equation");

if(equ!=="")
{
num=equ.length;
var operator;
var i;

var num1;

for(i=0;i<num;i++)
{
     if(equ.slice(i,i+1)==="+")
     {
         
          num1=i;
          operator="+";

     } 
     else if(equ.slice(i,i+1)==="-")
     {
         
          num1=i;
          operator="-";

     } 
     else if(equ.slice(i,i+1)==="*")
     {
         
          num1=i;
          operator="*";

     } 
     else if(equ.slice(i,i+1)==="/")
     {
          
          num1=i;
          operator="/";

     } 
     else if(equ.slice(i,i+1)==="%")
     {
         
          num1=i;
          operator="%";

     } 

  

}





var num1forO= parseInt( equ.slice(0,num1));  



var num2forO=parseInt( equ.slice(num1+1)) ;




if(operator==="+")
{
 


     var total=num1forO+num2forO;



     alert("sum  of " + " "+ num1forO + " " + "and" + " " + num2forO + " " + " is " + " " + total);
} 
else if( operator==="-")
{
    var total=num1forO-num2forO;



     alert("subtraction  of " + " "+ num1forO + " " + "and" + " " + num2forO + " " + " is " + " " + total);
}
else if( operator==="*")
{
    var total=num1forO*num2forO;



     alert(" Multiplication   of " + " "+ num1forO + " " + "and" + " " + num2forO + " " + " is " + " " + total);
}

else if( operator==="/")
{
    var total=num1forO/num2forO;



     alert("Division  of  " + " "+ num1forO + " " + "and" + " " + num2forO + " " + " is " + " " + total);
}

else if( operator==="%")
{
    var total=num1forO%num2forO;



     alert("modulus  of " + " "+ num1forO + " " + "and" + " " + num2forO + " " + " is " + " " + total);
}

}

else{
    alert("please enter some expression");
}




 



