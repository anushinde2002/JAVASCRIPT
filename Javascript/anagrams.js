/*check to strings are anagrams or not*-rearranging the letters of word*/

console.log(areAnagrams("listen","silent"));

function areAnagrams(str1,str2)
{
  const sortedStr1=str1.split("").sort().join("");
  const sortedStr2=str2.split("").sort().join("");
  return sortedStr1===sortedStr2;

}