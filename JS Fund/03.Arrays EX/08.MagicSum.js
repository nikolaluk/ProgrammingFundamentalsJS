function magicSum(array, desiredSum)
{
    let sum = 0;
    for(let i = 0; i < array.length; i++)
    {
        for(let j = i + 1; j < array.length; j++)
        {
            sum = array[i] + array[j];
            if(sum == desiredSum)
            {
                console.log(`${array[i]} ${array[j]}`);
            }
            sum = 0;
        }
    }
}