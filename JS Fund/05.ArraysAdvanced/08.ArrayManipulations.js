function manipulation(array)
{
    let counter = 0;
    let newArray = [];
    let numbers = array.shift();
    numbers = numbers.split(' ');
    numbers = numbers.map(Number);
    console.log(numbers);
    for(let i = 0; i < array.length; i++)
    {
        let tempArray = array[i].split(' ');
        newArray[counter] = tempArray[0];
        counter++;
        newArray[counter] = tempArray[1];
        counter++;
    }
    for(let i = 0; i < newArray.length;i = i+2)
    {
        let command = newArray[i];
        let nu
    }
}


manipulation(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3'])