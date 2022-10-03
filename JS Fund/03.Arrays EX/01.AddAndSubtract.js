function add(array1)
{
    let sum1 = 0;
    let sum2 = 0;
    let array2 = [];
    for(let i = 0; i <= array1.length-1; i++)
    {
        if(array1[i] % 2 == 0)
        {
        array2[i] = array1[i] + i;
        }
        else
        {
        array2[i] = array1[i] - i;
        }
        sum1 += array1[i];
        sum2 += array2[i];
    }
    console.log(array2);
    console.log(sum1);
    console.log(sum2);
}

add([5, 15, 23, 56, 35])