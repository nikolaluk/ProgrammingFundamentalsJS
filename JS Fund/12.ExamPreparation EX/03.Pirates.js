function pirates(input)
{
    let command = input.shift();

    let cities = {};

    while(command != 'Sail')
    {
        let arguments = command.split('||');
        let name = arguments[0];
        let population = Number(arguments[1]);
        let gold = Number(arguments[2]);

        if(!cities[name])
        {
            cities[name] =
            {
                name: name,
                population: population,
                gold: gold,
            }
        }
        else
        {
            cities[name].population += population;
            cities[name].gold += gold;
        }
        command = input.shift();
    }

    command = input.shift();
    
    while(command != 'End')
    {
        let tempArr = command.split('=>');
        let instructions = tempArr.shift();
        let townName = tempArr.shift();
        let args = tempArr;

        switch(instructions)
        {
            case 'Plunder':
                let killedPopulation = args.shift();
                let stolenGold = args.shift();

                cities[townName].population -= killedPopulation;
                cities[townName].gold -= stolenGold;

                console.log(`${townName} plundered! ${stolenGold} gold stolen, ${killedPopulation} citizens killed.`);

                if(cities[townName].population <= 0 || cities[townName].gold <= 0)
                {
                    delete cities[townName];
                    console.log(`${townName} has been wiped off the map!`);
                }
                break;

            case 'Prosper':
                let givenGold = Number(args.shift());
                if(givenGold >= 0)
                {
                    cities[townName].gold += givenGold;
                    console.log(`${givenGold} gold added to the city treasury. ${townName} now has ${cities[townName].gold} gold.`);
                }
                else
                {
                    console.log(`Gold added cannot be a negative number!`);
                }
                break;
        }
        command = input.shift();
    }
    

    let citiesEntries = Object.entries(cities);
    if(citiesEntries.length == 0)
    {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
    else
    {
        console.log(`Ahoy, Captain! There are ${citiesEntries.length} wealthy settlements to go to:`);
        for (const line of citiesEntries) {
            let citiesEntriesInside = Object.entries(line[1]);
            for (let i = 0; i < citiesEntriesInside.length;i = i) {
                let name = citiesEntriesInside[i][1];
                i++;
                let pop = citiesEntriesInside[i][1];
                i++;
                let gold = citiesEntriesInside[i][1];
                i++;

                console.log(`${name} -> Population: ${pop} citizens, Gold: ${gold} kg`);
            }
        }
    }
}

pirates((["Tortuga||345000||1250",

"Santo Domingo||240000||630",

"Havana||410000||1100",

"Sail",

"Plunder=>Tortuga=>75000=>380",

"Prosper=>Santo Domingo=>180",

"End"]))