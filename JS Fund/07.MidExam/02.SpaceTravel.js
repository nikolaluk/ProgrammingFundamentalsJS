function travel(array)
{
    let failed = false;
    let fuel = Number(array[1]);
    let ammo = Number(array[2]);
    let commands = array.shift();
    commands = commands.split('||');
    for(let i = 0; i < commands.length; i++)
    {
        let tempArray = commands[i].split(' ');
        let task = tempArray[0];
        let intager = Number(tempArray[1]);

        switch(task)
        {
            case 'Travel':
                if(fuel >= intager)
                {
                    console.log(`The spaceship travelled ${intager} light-years.`);
                    fuel -= intager;
                }
                else
                {
                    console.log(`Mission failed.`);
                    failed = true;
                }
                break;

            case 'Enemy':
                if(ammo >= intager)
                {
                    console.log(`An enemy with ${intager} armour is defeated.`);
                    ammo -= intager;
                }
                else if(fuel >= intager*2)
                {
                    console.log(`An enemy with ${intager} armour is outmaneuvered.`);
                    fuel -= intager*2;
                }
                else
                {
                    console.log(`Mission failed.`);
                    failed = true;
                }
                break;

            case 'Repair':
                let addedFuel = intager;
                let addedAmmo = intager*2;
                fuel += addedFuel;
                ammo += addedAmmo;
                console.log(`Ammunitions added: ${addedAmmo}.`);
                console.log(`Fuel added: ${addedFuel}.`);
                break;

            case 'Titan':
                console.log(`You have reached Titan, all passengers are safe.`);
                break;
        }
        if(failed == true)
        {
            break;
        }
    }
}

travel(([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ]))	
