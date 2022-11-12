function cardGame(input) {
    let result = {};

    for (const line of input) {
        let [name, cards] = line.split(': ');
        if (!result.hasOwnProperty(name)) {
            result[name] = [];
        }
            result[name].push(cards);
    }

    let resultEntries = Object.entries(result);

    for (const kvp of resultEntries) {
        let name = kvp[0];
        let cards =[];
        let counter = 0;
        
        for (const cardLine of kvp[1]) {
            let cardLineArray = cardLine.split(', ');
            for (const card of cardLineArray) {
                cards[counter] = card;
                counter++;
            }
        }
        let uniqueCards = new Set(cards);
        
        let value = 0;
        for (const card of uniqueCards) {
            let powerIndicator;
            let multiplierIndicator;
            if (card === '10S' || card === '10H' || card === '10D' || card === '10C')
            {
                powerIndicator = '10';
                multiplierIndicator = card[2];
            }
            else
            {
                powerIndicator = card[0];
                multiplierIndicator = card[1];
            }

            let power;
            let multiplier;

            if (powerIndicator >= 2 && powerIndicator <= 10) {
                power = Number(powerIndicator);
            }
            else {
                switch (powerIndicator) {
                    case 'J':
                        power = 11;
                        break;

                    case 'Q':
                        power = 12;
                        break;

                    case 'K':
                        power = 13;
                        break;

                    case 'A':
                        power = 14;
                        break;
                }
            }

            switch(multiplierIndicator)
            {
                case 'S':
                    multiplier = 4;
                    break;

                case 'H':
                    multiplier = 3;
                    break;

                case 'D':
                    multiplier = 2;
                    break;

                case 'C':
                    multiplier = 1;
                    break;
            }

            let cardValue = power * multiplier;
            value += cardValue;
        }
        console.log(`${name}: ${value}`);
    }
}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])