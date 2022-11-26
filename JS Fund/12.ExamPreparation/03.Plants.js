function pirates(input)
{
    let numberOfPlants = input.shift();

    let plantsRarity = {};
    let plantsRating = {};

    let plantArr = [];

    for(let i = 0; i < numberOfPlants; i++)
    {
        let currentArr = input.shift().split('<->');
        let name = currentArr.shift();
        let rarity = currentArr.shift();
        plantsRarity[name] = rarity;
        plantArr[i] = name;
    }
    
    let command = input.shift();

    while(command != 'Exhibition')
    {
        let commandArr = command.split(': ');
        let instruction = commandArr.shift();
        let args = commandArr[0].split(' - ');
        let plantName = args[0];
        if(plantsRarity[plantName])
        {
            switch(instruction)
            {
                case 'Rate':
                    let tempArr = commandArr.shift().split(' - ');
                    let plant = tempArr.shift();
                    let rating = tempArr.shift();
                    if(!plantsRating.hasOwnProperty(plant))
                    {
                        plantsRating[plant] = [];
                    }
                    plantsRating[plant].push(rating);
                    break;

                case 'Update':
                    let tempArr2 = commandArr.shift().split(' - ');
                    let plantNew = tempArr2.shift();
                    let ratingNew = tempArr2.shift();

                    plantsRarity[plantNew] = ratingNew;
                    break;

                case 'Reset':
                    let plantToReset = commandArr.shift();
                
                    plantsRating[plantToReset] = [];
                    break;
            }
        }
        else
        {
            console.log('error');
        }
        command = input.shift();
    }

    let plantsRatingEntries = Object.entries(plantsRating);

    for (let i = 0; i < plantsRatingEntries.length;i++) {
        let averageRating = 0;
        let divider = 0;
        for (const rating of plantsRatingEntries[i][1]) {
            averageRating += Number(rating);
            divider++;
        }
        if(plantsRatingEntries[i][1].length == 0)
        {
            plantsRatingEntries[i][1] = 0;
        }
        else
        {
            plantsRatingEntries[i][1] = averageRating/divider;
        }
    }

    plantsRating = {};

    for (const line of plantsRatingEntries) {
        plantsRating[line[0]] = line[1];
    }

    console.log(`Plants for the exhibition:`);
    for (const plant of plantArr) {
        let name = plant;
        let rarity = plantsRarity[name];
        let rating = plantsRating[name];

        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${rating.toFixed(2)}`);
    }

}

pirates(["3",

"Arnoldii<->4",

"Woodii<->7",

"Welwitschia<->2",

"Rate: Woodii - 10",

"Rate: Welwitschia - 7",

"Rate: Arnoldii - 3",

"Rate: Woodii - 5",

"Update: Woodii - 5",

"Reset: Arnoldii",

"Exhibition"])