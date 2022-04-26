function FirstReverse(str) { 
var splitString = str.split("")
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
var str= joinArray
  // code goes here  
  return str; 

}
   
// keep this function call here 
console.log(FirstReverse("Hello World"));