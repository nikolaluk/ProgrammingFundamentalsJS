function centuriesToMinutes(numberOfCenturies)
{
    let years = 100 * numberOfCenturies;
    let days =  Math.trunc(years*365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${numberOfCenturies} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesToMinutes(5);