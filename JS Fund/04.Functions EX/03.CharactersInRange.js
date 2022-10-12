function charactersInRange(firstChar,secondChar)
{
    let firstAsci = firstChar.charCodeAt(0);
    let secondAsci = secondChar.charCodeAt(0);
    let finishedString = '';
    if(firstAsci <= secondAsci)
    {
        for(let i = firstAsci + 1; i < secondAsci;i++)
        {
            finishedString += String.fromCharCode(i);
            finishedString += ' ';
        }
    }
    else
    {
        for(let i = secondAsci + 1; i < firstAsci;i++)
        {
            finishedString += String.fromCharCode(i);
            finishedString += ' ';
        }
    }
    console.log(finishedString);
}

charactersInRange('C','#')