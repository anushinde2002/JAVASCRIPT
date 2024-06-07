/*function to returns the number of vowels in a string*/

console.log(countvowels("Hello, world!"));
function countvowels(str)
{
  const vowels=["a","e","i","o","u"];
  let count=0;

  for(let char of str.toLowerCase())
    {
      if(vowels.includes(char))
        {
          count++;
        }
    }
    return count;

}