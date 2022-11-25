function plantDiscovery(input) {
    let plantCount = Number(input.shift());
    let plants = {};

    for (let i = 0; i < plantCount; i++) {
        let plant = input.shift();
        let [plantName, rarity] = plant.split('<->');

        plants[plantName] = {
            rarity: Number(rarity),
            ratings: [],
        };
    }

    let command = input.shift();
    while (command != 'Exhibition') {
        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');

        if (plants[plantName]) {
            switch (commandName) {
                case 'Rate':
                    let rating = Number(argument);
                    plants[plantName].ratings.push(rating)
                    break;
                case 'Update':
                    let rarity = Number(argument);
                    plants[plantName].rarity = rarity;
                    break;
                case 'Reset':
                    plants[plantName].ratings = [];
                    break;
            }
        } else {
            console.log('error');
        }

        command = input.shift();
    }
    
    let plantEntries = Object.entries(plants);
    plantEntries.sort((a, b) => {
        let result = b[1].rarity - a[1].rarity

        if (result == 0) {
            let averageA = calculateRating(a[1].ratings);
            let averageB = calculateRating(b[1].ratings);

            return averageB - averageA;
        }
        
        return result;
    });

    console.log('Plants for the exhibition:');
    for (const [plantName, plant] of plantEntries) {
        let averageRating = calculateRating(plant.ratings);
        console.log(`- ${plantName}; Rarity: ${plant.rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function calculateRating(ratings) {
        let sum = 0;
        for (const rating of ratings) {
            sum += rating;
        }

        let averageRating = sum / ratings.length;
        if (!averageRating) {
            averageRating = 0;
        }

        return averageRating;
    }
}
