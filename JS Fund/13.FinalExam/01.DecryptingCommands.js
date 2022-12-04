function decrypt(input)
{
    let startingString = input.shift();
    
    let command = input.shift();

    let startingStringArr = startingString.split('');

    while(command !== 'Finish')
    {
        let tempArr = command.split(' ');
        let instruction = tempArr.shift();

        switch(instruction)
        {
            case 'Replace':
                let currentChar = tempArr.shift();
                let newChar = tempArr.shift();
                
                for(let i = 0; i < startingStringArr.length; i++)
                {
                    if(startingStringArr[i] == currentChar)
                    {
                        startingStringArr[i] = newChar;
                    }
                }
                startingString = startingStringArr.join('');
                console.log(startingString);
                
                break;
                
            case 'Cut':
                let startIndex = Number(tempArr.shift());
                let endIndex = Number(tempArr.shift());
                if(startIndex < 0 || startIndex >= startingStringArr.length || endIndex < 0 || endIndex >= startingStringArr.length)
                {
                    console.log(`Invalid indices!`);
                    break;
                }
                startingStringArr.splice(startIndex, endIndex - startIndex + 1);
                startingString = startingStringArr.join('');
                console.log(startingString);
                
                break;

            case 'Make':
                let upperLower =  tempArr.shift();
                for(let i = 0; i < startingStringArr.length; i++)
                {
                    if(upperLower == 'Upper')
                    {
                        startingStringArr[i] = startingStringArr[i].toUpperCase();
                    }
                    else if(upperLower == 'Lower')
                    {
                        startingStringArr[i] = startingStringArr[i].toLowerCase();
                    }
                }
                startingString = startingStringArr.join('');
                console.log(startingString);

                break;

            case 'Check':
                let string = tempArr.shift();
                if(startingString.includes(string))
                {
                    console.log(`Message contains ${string}`);
                }
                else
                {
                    console.log(`Message doesn't contain ${string}`);
                }
                break;

            case 'Sum':
                let startIndexSum = tempArr.shift();
                let endIndexSum = tempArr.shift();
                if(startIndexSum < 0 || startIndexSum >= startingStringArr.length || endIndexSum < 0 || endIndexSum >= startingStringArr.length)
                {
                    console.log(`Invalid indices!`);
                    break;
                }
                let sum = 0;

                for(let i = startIndexSum; i <= endIndexSum; i++)
                {
                    let ascciValue = startingStringArr[i].charCodeAt();
                    sum += ascciValue;
                }
                console.log(sum);

                break;

        }
        


        command = input.shift();
    }

}


decrypt(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])
