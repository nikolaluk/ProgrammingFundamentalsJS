function encrypt(input)
{
    let numberOfInputs = input.shift();
    let passwordPattern = /(?<symbols>\S+)>\S{3}[|]\S{3}[|]\S{3}[|]\S{3}<\1/g;
    let passwordPatternWithoutSymbols = /\S{3}[|]\S{3}[|]\S{3}[|]\S{3}/g;


    for(let i = 0; i < numberOfInputs;i++)
    {
        let currentPassword = input[i];
        let rightPassword = currentPassword.matchAll(passwordPattern);
        let rightPasswordArr = [];
        let broi = 0;
        for (const el of rightPassword) {
            rightPasswordArr[broi] = el[0];
            broi++;
        }
        let realPassword = rightPasswordArr.join('');
        if(currentPassword == realPassword)
        {
            let currentPasswordWithoutSymbols = currentPassword.matchAll(passwordPatternWithoutSymbols);
            let currentPasswordWithoutSymbolsArr = [];
            let index = 0;
            for (const el of currentPasswordWithoutSymbols) {
                currentPasswordWithoutSymbolsArr[index] = el[0];
                index++;
            }
            let finalStringWithPipes = currentPasswordWithoutSymbolsArr.shift();
            let splitArr = [];
            let counter = 0;
            for(let i = 0; i < finalStringWithPipes.length; i++)
            {
                if(i%4 != 3)
                {
                    splitArr[counter] = finalStringWithPipes[i];
                    counter++;
                }
            }
            
            finalStringWithPipes = splitArr.join('');
            console.log(`Password: ${finalStringWithPipes}`);
        }
        else
        {
            console.log('Try another password!');
        }
    }
}

encrypt(["3",
"##>00|no|NO|!!!?<###",
"#>12||yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
