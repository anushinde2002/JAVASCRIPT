/*write a function that returns the reverse of a string*/

console.log(reverseString("Interview,Happy"))
/*function reverseString(str){
  return str.split("").reverse().join("");
}*/

function reverseString(str)
{
  let reverse="";
  for(let i=str.length-1;i>=0;i--)
    {
      reverse +=str[i];

    }
    return reverse;
}
