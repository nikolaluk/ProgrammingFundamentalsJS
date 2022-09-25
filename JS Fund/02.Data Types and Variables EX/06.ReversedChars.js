function reversedString(firstChar, secondChar, thirdChar)
{
    let string = '';
    let reversedString = '';
    string = firstChar + secondChar + thirdChar;
    for(let i = 2; i >= 0; i--)
    {
        reversedString += string[i];
        reversedString += ' ';
    }
    console.log(reversedString);
}

reversedString('a','b','c')