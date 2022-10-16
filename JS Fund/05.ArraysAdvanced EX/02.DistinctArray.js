function distinctArray (originalArray)
{
    let newArray = [];
    let counter = 0;
    for(let i = 0; i < originalArray.length;i++)
    {
        if(!newArray.includes(originalArray[i]))
        {
            newArray[counter] = originalArray[i];
            counter++;
        }
    }
    console.log(newArray.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])