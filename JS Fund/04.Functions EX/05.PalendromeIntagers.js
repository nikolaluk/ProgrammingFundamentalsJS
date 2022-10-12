function palindromeIntagers(arrayOfIntagers)
{
    for(let i = 0; i < arrayOfIntagers.length; i++)
    {
        let tempString = '';
        let tempReverseString = '';
        let arrayElementAsString = arrayOfIntagers[i].toString();
        for(let i = 0; i < arrayElementAsString.length; i++)
        {
            tempString += arrayElementAsString[i];
        }
        for(let i = arrayElementAsString.length - 1; i >= 0; i--)
        {
            tempReverseString += arrayElementAsString[i];
        }
        if(tempString == tempReverseString)
        {
            console.log('true');
        }
        else
        {
            console.log('false');
        }
    }
}