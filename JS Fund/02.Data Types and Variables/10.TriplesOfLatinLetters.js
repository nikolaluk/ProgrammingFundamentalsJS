function triples(number)
{
    let threeLetters ='';
    for(let i = 1; i <= number; i++)
    {
        threeLetters += String.fromCharCode(96+i);
        for(let j = 1; j <= number; j++)
        {
            threeLetters += String.fromCharCode(96+j);
            for(let k = 1; k <= number; k++)
            {
                threeLetters += String.fromCharCode(96+k);
                console.log(threeLetters);
                threeLetters = `${String.fromCharCode(96+i)}${String.fromCharCode(96+j)}`;
            }
            threeLetters = `${String.fromCharCode(96+i)}`
        }
        threeLetters = '';
    }
}
triples(3);