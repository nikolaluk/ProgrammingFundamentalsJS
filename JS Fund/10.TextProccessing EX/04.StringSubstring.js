function substring(word, text)
{
    let textAsArray = text.split(' ');
    let checker = false;
    
    textAsArray.forEach(token => {
        if(token.toLowerCase() === word.toLowerCase())
        {
            console.log(word);
            checker = true;
        }
        
    });

    if(checker == false)
    {
        console.log(`${word} not found!`);
    }
}