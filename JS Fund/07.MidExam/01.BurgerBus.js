function bus(input)
{
    let cityCount = 0;
    let allProfit = 0
    let index = 0;
    let numberOfCities = input[index];
    index++;
    for(let i = 0; i < numberOfCities; i++)
    {
        cityCount++;
        let nameOfCity = input[index];
        index++;
        let ownersIncome = input[index];
        index++;
        let ownersExpenses = input[index];
        index++;
        if(cityCount % 3 == 0 && cityCount % 5 != 0)
        {
            ownersExpenses = 1.5 * ownersExpenses;
        }
        if(cityCount % 5 == 0)
        {
            ownersIncome = 0.9 * ownersIncome;
        }
        let profit = ownersIncome - ownersExpenses;
        console.log(`In ${nameOfCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
        allProfit += profit;
    }
    console.log(`Burger Bus total profit: ${allProfit.toFixed(2)} leva.`);
}