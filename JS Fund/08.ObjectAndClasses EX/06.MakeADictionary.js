function dictionary(array)
{
    let words = [];
    let arrayOfStrings = [];
    let numberOfStrings = 0;
    for(let i = 0; i < array.length; i++)
    {
        let currentObject = JSON.parse(array[i]);
        words.push(currentObject);
    }
    for (const el of words) 
    {
        arrayOfStrings[numberOfStrings] = `Term: ${Object.keys(el)[0]} => Definition: ${Object.values(el)[0]}`
        numberOfStrings++;
    }
    arrayOfStrings.sort((a,b) => a.localeCompare(b))
    for (const el of arrayOfStrings) 
    {
        console.log(el);
    }
}

dictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ])