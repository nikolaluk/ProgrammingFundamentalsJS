function occurr(sentance, word)
{
    let sentanceArray = sentance.split(' ');
    let counter = 0;

    for (const el of sentanceArray) {
        if(el == word)
        {
            counter++;
        }
    }
    console.log(counter);
}