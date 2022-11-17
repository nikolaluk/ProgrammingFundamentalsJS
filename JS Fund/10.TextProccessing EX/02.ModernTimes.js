function times(text)
{
    let wordsArr = text.split(' ');
    for (const word of wordsArr) {
        let isValid;
        let currentString = '';
        if(word[0] == '#' && word.length > 1)
        {
            isValid = true;
            
            for(let i = 1; i < word.length; i++)
            {
                let char = word[i].toLowerCase();
                if(char.charCodeAt() < 97 || char.charCodeAt() > 122)
                {
                    isValid = false;
                    break;
                }
                currentString += word[i];
            }
        }
        if(isValid)
        {
            console.log(currentString);
        }
    }
}

times('Nowadays everyone uses # to tag a #special word in #socialMedia')