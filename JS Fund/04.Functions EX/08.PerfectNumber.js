function perfectNumber(number)
{
    sum = 0;
    dividor = 1;
    while(dividor < number)
    {
        if(number % dividor == 0)
        {
            sum += dividor;
        }
        dividor++;
    }
    if(sum == number)
    {
        console.log(`We have a perfect number!`);
    }
    else
    {
        console.log(`It's not so perfect.`);
    }
}