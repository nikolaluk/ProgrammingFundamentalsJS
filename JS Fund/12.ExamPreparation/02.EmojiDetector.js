function emojiDetector(input)
{
    //input
    let text = input.shift();
    let emojiCount = 0;
    let threshold = 1;

    //get all digits
    let digitsResults = text.matchAll(/\d/g);

    //calculate threshold  
    for (const digitResult of digitsResults) {
        let digit = Number(digitResult);
        threshold = threshold * digit;
    }
    console.log(`Cool threshold: ${threshold}`);

    //get all emojis
    let emojisResults = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    let emojis = [];
    let index = 0;
    for (const emojiMatch of emojisResults) {
        emojis[index] = emojiMatch[0];
        index++;
    }

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    //print cool emojis
    
    for (const emoji of emojis) {
        let coolnessValue = 0;
        for(let i = 3; i< emoji.length - 1;i++)
        {
            let ascciValue = emoji[i].charCodeAt();
            coolnessValue += ascciValue;
        }

        if(coolnessValue >= threshold)
        {
            console.log(emoji);
        }
    }

    
    
}

    

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])