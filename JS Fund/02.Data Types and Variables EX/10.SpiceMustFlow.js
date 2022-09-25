function spiceMustFlow(startingYeild)
{
    let gatheredSpice = 0;
    let days = 0;
    for(let i = startingYeild; i >= 100; i -= 10)
    {
        gatheredSpice += i;
        gatheredSpice -= 26;
        days++;
    }
    if(startingYeild >= 100)
    {
    gatheredSpice -= 26;
    }
    console.log(Math.floor(days));
    console.log(Math.floor(gatheredSpice));
}

spiceMustFlow(90)