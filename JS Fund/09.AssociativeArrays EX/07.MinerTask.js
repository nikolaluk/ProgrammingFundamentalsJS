function task(input)
{
    let collectedResourses = {};
    for(let i = 0; i < input.length;i = i+2)
    {
        let resourse = input[i];
        let quantity = Number(input[i+1]);
        if(!collectedResourses[resourse])
        {
            collectedResourses[resourse] = 0;
        }
        collectedResourses[resourse] += quantity;
    }
    
    for (const resourse in collectedResourses) {
     console.log(`${resourse} -> ${collectedResourses[resourse]}`);   
    }
}
task([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])