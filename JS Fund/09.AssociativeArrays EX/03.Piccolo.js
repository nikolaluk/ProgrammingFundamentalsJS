function piccolo(input)
{
    let numberArray = [];

    for(let i = 0 ; i < input.length; i++)
    {
        let [direction, number] = input[i].split(', ');
        if(direction == 'IN')
        {
            numberArray.push(number);
        }
        else
        {
            let indexOfNumber = numberArray.indexOf(number);
            numberArray.splice(indexOfNumber,1);
        }
    }

    numberArray.sort((a,b) => a.localeCompare(b));
    if(numberArray.length == 0)
    {
        console.log(`Parking Lot is Empty`);
    }
    else
    {
    for (const number of numberArray) {
        console.log(number);
    }
    }
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])