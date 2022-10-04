function maxSequence(array)
{
    let resultArray = [];
    let answerArray = [];
    let compare = 0;
    let counter = 0;
    for(let i = 0;i < array.length; i++)
    {
        if(array[i] == array[i+1])
        {
            for(let j = i; j < array.length; j++)
            {
                resultArray[counter] = array[j];
                counter++;
                if(array[j+1] != array[j])
                {
                    break;
                }
            }
            if(counter > compare)
            {
                answerArray = [];
                for(let i = 0;i < resultArray.length; i++)
                {
                    answerArray[i] = resultArray[i];
                }
            }
            resultArray = [];
            compare = counter;
            counter = 0;
        }
    }
    console.log(answerArray.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])