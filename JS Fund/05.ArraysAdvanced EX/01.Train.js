function train(array)
{
    let wagonStatistics = array
    .shift()
    .split(' ')
    .map(Number);

    let maxPassengersPerWagon = array
    .shift();

    maxPassengersPerWagon = Number(maxPassengersPerWagon);

    for(let i = 0; i < array.length; i++)
    {
        let tempArray = array[i].split(' ');
        if(tempArray[0] === 'Add')
        {
            wagonStatistics.push(Number(tempArray[1]));
        }
        else
        {
            tempArray[0] = Number(tempArray[0]);
            for(let j = 0; j < wagonStatistics.length; j++)
            {
                if(wagonStatistics[j] + tempArray[0] <= maxPassengersPerWagon)
                {
                    wagonStatistics[j] = wagonStatistics[j] + tempArray[0];
                    break;
                }
            }
        }
    }
    console.log(wagonStatistics.join(' '));
}


train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])