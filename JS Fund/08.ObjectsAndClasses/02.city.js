function printCity(city) 
{
    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}
