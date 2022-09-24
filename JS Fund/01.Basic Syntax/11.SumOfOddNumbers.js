function solve(n)
{
    let sum = 0;
    let count = 0;
    for(let i = 1; i <=20000000; i+=2)
    {
        console.log(i);
        sum += i;
        count++;
        if(count == n)
        {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
solve(8)