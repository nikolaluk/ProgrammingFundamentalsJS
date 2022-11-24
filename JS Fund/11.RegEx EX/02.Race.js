function race(raceDataArray)
{
    let racersArray = raceDataArray.shift().split(', ');
    let raceObject = {};
    const patternName = /[A-Za-z]+/g;
    const patternDistance =/[\d]+/g;

    let command = raceDataArray.shift();

    while(command !== 'end of race')
    {
        const currentName = command.match(patternName).join('');
        const currentDistance = command.match(patternDistance).join('');

        if(racersArray.includes(currentName))
        {
            let distance = 0;

            for (const digit of currentDistance) {
                distance += Number(digit);
            }

            if(!raceObject.hasOwnProperty(currentName))
            {
                raceObject[currentName] = distance;
            }
            else
            {
                raceObject[currentName] += distance;
            }
        }
        command = raceDataArray.shift();
    }

    let raceObjectEntries = Object.entries(raceObject).sort((a,b) => b[1] - a[1]);
    console.log(`1st place: ${raceObjectEntries[0][0]}`);
    console.log(`2nd place: ${raceObjectEntries[1][0]}`);
    console.log(`3rd place: ${raceObjectEntries[2][0]}`);
}

race(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])