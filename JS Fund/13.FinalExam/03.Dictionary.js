function dictionary(input)
{
    let allWords = input.shift();
    let onlyWords = input.shift();
    let command = input.shift();

    let definitions = {};

    let allWordsArr = allWords.split(' | ');
    for (const el of allWordsArr) {
        let tempArr = el.split(': ');
        let word = tempArr.shift();
        let definition = tempArr.shift();
        if(!definitions[word])
        {
            definitions[word] = [];
        }
        definitions[word].push(definition);
    }

    let onlyWordsArr = onlyWords.split(' | ');

    let definitionsEntries = Object.entries(definitions);
    
    switch(command)
    {
        case 'Test':
            for (const el of onlyWordsArr) {
                if(definitions[el])
                {
                    console.log(`${el}:`);
                    for (const def of definitions[el]) {
                        console.log(`-${def}`);
                    }
                }
            }

            break;

        case 'Hand Over':
            let arrayOfWords = [];
            let indexOfArray = 0;
            for (const kvp of definitionsEntries) {
                    arrayOfWords[indexOfArray] = kvp[0];
                    indexOfArray++;
            }
            
            console.log(arrayOfWords.join(' '));
            break;

    }
}

dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
"programmer | domino",
"Hand Over"])
