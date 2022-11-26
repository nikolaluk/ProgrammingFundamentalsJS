function decript(input)
{
    let code = input.shift();

    let command = input.shift();

    while(command !== 'Decode')
    {
        let argumentArray = command.split('|');
        let instruction = argumentArray.shift();

        switch(instruction)
        {
            case 'Move':
                let lettersToMove = argumentArray.shift();
                let codeAsArrayMove = code.split('');

                for (let i = 0; i < lettersToMove; i++) {
                    let currentLetter = codeAsArrayMove.shift();
                    codeAsArrayMove.push(currentLetter);
                }
                code = codeAsArrayMove.join('');

                break;

            case 'Insert':
                let index = argumentArray.shift();
                let value = argumentArray.shift();
                let codeAsArrayInsert = code.split('');
                codeAsArrayInsert.splice(index,0,value);
                code = codeAsArrayInsert.join('');

                break;

            case 'ChangeAll':
                let substring = argumentArray.shift();
                let replacement = argumentArray.shift();
                let codeAsArrayChange = code.split('');
                for (let i = 0; i < codeAsArrayChange.length; i++) {
                    if(codeAsArrayChange[i] == substring)
                    {
                        codeAsArrayChange[i] = replacement;
                    }
                }
                code = codeAsArrayChange.join('');

                break;
        }

        command = input.shift();
    }

    console.log(`The decrypted message is: ${code}`);
}



decript([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ])