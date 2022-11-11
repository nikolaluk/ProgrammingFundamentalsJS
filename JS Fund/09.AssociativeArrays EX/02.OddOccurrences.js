function occurrences(words) {

    let resultString = '';

    let resultObject = {};

    let allWords = words
        .split(' ')
        .map(word => word.toLowerCase());

    let allWordsLength = allWords.length;

    for (let i = 0; i < allWordsLength; i++) {
        if(!resultObject.hasOwnProperty(allWords[i]))
        {
            resultObject[allWords[i]] = [];
        }
        resultObject[allWords[i]].push(i);
    }

    let sorted = Object.entries(resultObject).sort((a,b) => a[1][0] - b[1][0]);


    for (const kvp of sorted) {
        let word = kvp[0];
        let times = kvp[1].length;
        if(times % 2 == 1)
        {
            resultString += word;
            resultString += ' ';
        }
    }

    console.log(resultString);

}

occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')