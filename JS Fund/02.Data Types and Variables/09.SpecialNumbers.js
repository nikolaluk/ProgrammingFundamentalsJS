function special(number)
{
    let sum = 0;
    for(let i = 1; i <= number; i++)
    {
        for(let j = i; j > 0; j = parseInt(j/10))
        {
            sum += j%10;
        }
        if(sum == 5 || sum == 7 || sum == 11)
        {
            console.log(`${i} -> True`);
        }
        else
        {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
    
}

special(15);