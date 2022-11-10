function occurr(input)
{
    let words = {};

    for (const word of input) {
        if(!words[word])
        {
            words[word] = 0;
        }
        words[word]++;
    }

    let wordsEntries = Object.entries(words).sort((a,b) => b[1] - a[1]);

    for (const line of wordsEntries) {
        console.log(`${line[0]} -> ${line[1]} times`);
    }
}

occurr(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])