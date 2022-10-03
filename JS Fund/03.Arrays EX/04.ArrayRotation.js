function rotation(array,rotations)
{
    for(let i = 1; i<=rotations;i++)
    {
        let number = array[0]
        for(let j = 0; j <= array.length - 1; j++)
        {
            if(j == array.length - 1)
            {
                array[j] = number;
            }
            else
            {
                array[j] = array[j + 1];
            }
        }
    }
    console.log(array.join(' '));
}

rotation([51, 47, 32, 61, 21], 2)