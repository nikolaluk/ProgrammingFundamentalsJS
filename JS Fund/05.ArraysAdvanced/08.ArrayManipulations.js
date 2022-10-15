function manipulation(array)
{
    let counter = 0;
    let newArray = [];
    let numbers = array.shift();
    numbers = numbers.split(' ');
    numbers = numbers.map(Number);
    for(let i = 0; i < array.length; i++)
    {
        if(i == array.length - 1)
        {
            let tempArray = array[i].split(' ');
            newArray[counter] = tempArray[0];
            counter++;
            newArray[counter] = tempArray[1];
            counter++;
            newArray[counter] = tempArray[2];
            counter++;
        }
        else
        {
            let tempArray = array[i].split(' ');
            newArray[counter] = tempArray[0];
            counter++;
            newArray[counter] = tempArray[1];
            counter++;
        }
    }
    for(let i = 0; i < newArray.length;i = i+2)
    {
        let command = newArray[i];
        switch(command)
        {
            case 'Add':
                numbers.push(newArray[i+1]);
                break;
            
            case 'Remove':
                for(let j = 0; j < numbers.length;j++)
                {
                    if(numbers[j] == newArray[i+1])
                    {
                        for(let k = j; k < numbers.length; k++)
                        {
                            numbers[k] = numbers[k+1];
                        }
                        numbers.pop();
                    }
                }
                break;

            case 'RemoveAt':
                numbers.splice(newArray[i+1], 1);
                break;

            case 'Insert':
                numbers.splice(newArray[i+2], 0, newArray[i+1]);
                break;
        }
    }
    console.log(numbers.join(' '));
}


manipulation(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])