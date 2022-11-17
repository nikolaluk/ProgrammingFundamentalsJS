function pascal(string)
{
    let result = '';
    result += string[0];
    for(let i = 1; i < string.length; i++)
    {
        let char = string[i];
        if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
        {
            result += char;
        }
        else
        {
            result += ', ';
            result += char;
        }
    }
    console.log(result);
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')