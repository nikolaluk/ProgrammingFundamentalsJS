function activationKeys(input)
{
    let rawActivationKey = input.shift();
    
    let command = input.shift();

    while(command !== 'Generate')
    {
        let commandArr = command.split('>>>');
        let instruction = commandArr.shift();

        switch(instruction)
        {
            case 'Contains':
                let substring = commandArr[0];
                if(rawActivationKey.includes(substring))
                {
                    console.log(`${rawActivationKey} contains ${substring}`);
                }
                else
                {
                    console.log(`Substring not found!`);
                }
                break;

            case 'Flip':
                let upperOrLower = commandArr[0];
                let firstNumFlip = commandArr[1];
                let secondNumFlip = commandArr[2];

                let part = rawActivationKey.substring(firstNumFlip, secondNumFlip);
                if(upperOrLower == 'Upper')
                {   
                    rawActivationKey = rawActivationKey.replace(part, part.toUpperCase());
                }
                else
                {
                    rawActivationKey = rawActivationKey.replace(part, part.toLowerCase());
                }

                console.log(rawActivationKey);

                break;

            case 'Slice':
                let firstNum = commandArr[0];
                let secondNum = commandArr[1];

                let rawActivationKeyArray = rawActivationKey.split('');
                rawActivationKeyArray.splice(firstNum, secondNum-firstNum);
                rawActivationKey = rawActivationKeyArray.join('');

                console.log(rawActivationKey);

                break;
        }
        

        command = input.shift();
    }

    console.log(`Your activation key is: ${rawActivationKey}`);
}


activationKeys((["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>def",

"Contains>>>deF",

"Generate"]))