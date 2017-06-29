/*
this is the anonomous function
NOTE: Function can be declared in two ways as
1.function x(){} and 
2. var x= function(){};
the first type is called function defination and second type is called as function expression

The second type declaration does not contain any function name,rather the whole function is stored in a varible,so called as anonomous function i.e. a function having no names

mostly we use anonomouus function in mathos chaining,e.g.

setTimeout(function(){
//code here
},1000);
*/
//set the body color first
document.body.style.backgroundColor = getRandomColor();
// Anonomous function showcontent

var showContent = function(c_id){
   
    //call the set timeout function with a "function" as argument and the function is anonomous
    setTimeout(function(){
        document.getElementById(c_id).style.display="block"; 
    },4000); 
    
    setTimeout(changeBgColor,10000);//call changeBgColor function after 5 seconds
}

//function expression 
var changeBgColor = function(){
    document.body.style.backgroundColor = getRandomColor();
}

//function for random color generation
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}