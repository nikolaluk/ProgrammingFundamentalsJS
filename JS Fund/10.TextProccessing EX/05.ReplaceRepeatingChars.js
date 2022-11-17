function replaceExisting(string)
{
    for(let i = 0; i < string.length; i++)
    {
        for(let j = i; j <= string.length; j++)
        {
            let firstLetterIndex = i;
            let lastLetterIndex = i;
            if(string[j] == string[i])
            {
                lastLetterIndex = j;
            }
            else
            {
                lastLetterIndex = j - 1;
                if(lastLetterIndex > firstLetterIndex)
                {
                    let stringAsArray = string.split('');
                    stringAsArray.splice(firstLetterIndex + 1, lastLetterIndex - firstLetterIndex);
                    string = stringAsArray.join('');
                    break;
                }
                else
                {
                    break
                }
            }
        }
    }
    console.log(string);
}

replaceExisting('aaaaabbbbbcdddeeeedssaa')
