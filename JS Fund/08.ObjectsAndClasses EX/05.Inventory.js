function inventory(input)
{
    let heroes = [];

    class Hero
    {
        constructor(name, level, items)
        {
            this.name = name;
            this.level = Number(level);
            this.items = items;
        }
    }
    for(let i = 0; i < input.length; i++)
    {
        let [name, level, items] = input[i].split(' / ');
        heroes.push(new Hero(name, level, items));
    }
    heroes.sort((a,b) => a.level - b.level);

    for (const el of heroes) 
    {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])