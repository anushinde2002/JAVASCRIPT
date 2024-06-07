/* remove all whitespace character from a string*/

const inputString="Interview, Happy";
console.log(removeWhitespace(inputString));

function removeWhitespace(str)
{
  const result=str.replace(/\s/g,"");
  return result;

}
