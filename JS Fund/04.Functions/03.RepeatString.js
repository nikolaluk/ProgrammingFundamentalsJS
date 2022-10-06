function repeatString(startingString, itterations)
{
    let array =[];
    for(let i = 0; i < itterations;i++)
    {
        array[i] = startingString;
    }
    console.log(array.join(''));
}