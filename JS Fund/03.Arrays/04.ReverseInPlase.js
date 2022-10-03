function reverse(array)
{
    let newArrayAsString = '';
    for(let i = array.length - 1; i >=0 ; i--)
    {
        newArrayAsString += array[i];
        if(i > 0)
        {
            newArrayAsString += ' ';
        }
    }
    console.log(newArrayAsString);
}

reverse(['a', 'b', 'c', 'd', 'e'])