/* write a function that returns the longest word in the sentence*/

console.log(findlongestword("I love coding in javascript"));
function findlongestword(sentence)
{
  const words=sentence.split("");
  let longestword="";
  for(let word of words)
    {
      if(word.length>longestword.length)
        {
          longestword=word;
        }
    }
    return longestword;
}