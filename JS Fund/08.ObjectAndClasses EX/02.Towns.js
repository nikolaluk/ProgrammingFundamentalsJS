function towns(input)
{
    for(let i = 0; i < input.length; i++)
    {
        let tempArray = input[i].split(' | ');
        let name = tempArray[0];
        let lat = Number(tempArray[1]).toFixed(2);
        let long = Number(tempArray[2]).toFixed(2);
        let currentTown = 
        {
            town: name,
            latitude: lat,
            longitude: long,
        }
        console.log(currentTown);
    }
}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])