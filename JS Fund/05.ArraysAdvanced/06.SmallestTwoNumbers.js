function smallestOfTwo(array)
{
    let done = false;
    let answer = [];
    while(done == false)
    {
        done = true;
        for(let i = 0; i < array.length - 1; i++)
        {
            if(array[i] > array[i+1])
            {
                done = false;
                let saver = array[i];
                array[i] = array[i+1];
                array[i+1] = saver;
            }
        }
    }
    for(let i = 0; i < 2; i++)
    {
        answer[i] = array[i];
    }
    console.log(answer.join(' '));
}

smallestOfTwo([30, 15, 50, 5])