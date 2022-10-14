function sequence(n, k)
{
    let finalArray = [];
    finalArray[0] = 1;
    for(let i = 1;i < n;i++)
    {
        let tempNumber = 0;
        let counter = 0;
        for(let j = i - 1; j >= 0 ;j--)
        {
            tempNumber += finalArray[j];
            counter++;
            if(counter == k)
            {
                break;
            }
        }
        finalArray[i] = tempNumber;
    }
    console.log(finalArray.join(' '));
}

sequence(6, 3)