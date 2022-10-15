function solve(commands)
{
    let numbers = commands
        .shift()
        .split(' ')
        .map(Number);

        for(let i = 0; i < commands.length; i++)
        {
            let [command, firstNum, secondNum]
                = commands[i].split(' ');

            firstNum = Number(firstNum);
            secondNum = Number(secondNum);

            switch(command)
            {
                case 'Add':
                    numbers.push(firstNum);
                    break;
            
                case 'Remove':
                    for(let j = 0; j < numbers.length;j++)
                    {
                        if(numbers[j] == firstNum)
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
                    numbers.splice(firstNum, 1);
                    break;

                case 'Insert':
                    numbers.splice(secondNum, 0, firstNum);
                    break;
            }
        }
        console.log(numbers.join(' '));
}