function dungeon(array)
{
    let isDead = false;
    let rooms = 0;
    let health = 100;
    let gold = 0;
    let newArray = [];
    let finalArray = [];
    let tempArray = [];
    let counter = 0;
    for(let i = 0; i< array.length;i++)
    {
        newArray = array[i].split('|');
    }
    for(let i = 0; i < newArray.length; i++)
    {
        tempArray = newArray[i].split(' ');
        finalArray[counter] = tempArray[0];
        counter++;
        finalArray[counter] = tempArray[1];
        counter++;
    }
    for(let i = 0; i < finalArray.length; i = i+2)
    {
        switch(finalArray[i])
        {
            case 'potion':
                let healingAmount = Number(finalArray[i + 1]);
                health += healingAmount;
                if(health > 100)
                {
                    healingAmount = healingAmount - (health - 100);
                    health = 100;
                }
                console.log(`You healed for ${healingAmount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                let gatheredGold = Number(finalArray[i + 1]);
                gold += gatheredGold;
                console.log(`You found ${gatheredGold} coins.`);
                break;
            
            default:
                let damageTaken = Number(finalArray[i + 1]);
                health -= damageTaken;
                if(health <= 0)
                {
                    rooms++;
                    isDead = true;
                    console.log(`You died! Killed by ${finalArray[i]}.`);
                    console.log(`Best room: ${rooms}`);
                }
                else
                {
                    console.log(`You slayed ${finalArray[i]}.`);
                }
                break;
        }
        if(isDead)
        {
            break;
        }
        rooms++;
        if(rooms == finalArray.length / 2)
        {
            console.log(`You've made it!`);
            console.log(`Coins: ${gold}`);
            console.log(`Health: ${health}`);
        }
    }
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);