function commonElements(arr1,arr2)
{
    for(let i = 0; i <= arr1.length - 1; i++)
    {
        for(let j = 0; j <= arr2.length - 1;j++)
        {
            if(arr1[i] === arr2[j])
            {
                console.log(arr1[i]);
            }
        }
    }
}

commonElements(["Hey", "hello", 2, 4, "Peter", "e"],
["Petar", 10, "hey", 4, "hello", "2"])