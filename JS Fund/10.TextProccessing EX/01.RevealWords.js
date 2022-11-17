function reveal(words, text) {
    let wordsArr = words.split(', ');

    for (const word of wordsArr) {
        let checker = `${'*'.repeat(word.length)}`;
        text = text.replace(checker, `${word}`)
    }
    console.log(text);
}

reveal('great','softuni is ***** place for learning new programming languages')