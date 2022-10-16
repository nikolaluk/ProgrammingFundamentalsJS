function party(array)
{
    let counter = 0;
    let list = [];
    for(let i = 0; i < array.length; i++)
    {
        let currentString = array[i].split(' ');
        if(currentString[2] == 'going!')
        {
            if(list.includes(currentString[0]))
            {
                console.log(`${currentString[0]} is already in the list!`);
            }
            else
            {
            list[counter] = currentString[0];
            counter++;
            }
        }
        else
        {
            if(!list.includes(currentString[0]))
            {
                console.log(`${currentString[0]} is not in the list!`);
            }
            else
            {
                for(let j = 0; j < list.length;j++)
                {
                    if(list[j] == currentString[0])
                    {
                        for(let k = j; k < list.length; k++)
                        {
                            list[k] = list[k + 1];
                        }
                        list.pop();
                        counter--;
                    }
                }
            }
        }
    }
    for(let i = 0;i<list.length;i++)
    {
        console.log(list[i]);
    }
}

party(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])