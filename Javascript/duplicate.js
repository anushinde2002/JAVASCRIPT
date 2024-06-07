/*function to remove duplicate elements from an array*/

console.log(removeDuplicates([1,2,3,4,5,3,6,7,5]));

function removeDuplicates(arr)
{
  const uniqueElements=[];
  for(let i=0;i<arr.length;i++)
    {
      if(uniqueElements.indexOf(arr[i]===-1))
        {
          uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
}


