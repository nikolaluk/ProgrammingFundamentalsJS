function process(array)
{
    let newArray = [];
    let newReversedArray =[];
    let counter = 0;
    let secondCounter = 0;
    for(let i = 0; i<array.length;i++)
    {
        if(i % 2 == 1)
        {
            newArray[counter] = array[i] * 2;
            counter++;
        }
    }
    for(let i = newArray.length - 1; i >= 0; i--)
    {
        newReversedArray[secondCounter] = newArray[i];
        secondCounter++;
    }
    console.log(newReversedArray.join(' '));
}

process([10,15,20,25])