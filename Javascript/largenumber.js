/*function to find the largest elements in the array*/

console.log(findLarge([2,5,7,9,4,6]));
function findLarge(arr)
{
  let largest=arr[0];

  for(let i=1;i<arr.length;i++)
    {
      if(arr[i]>largest)
        {
          largest=arr[i];
        }
    }
    return largest;
    
}