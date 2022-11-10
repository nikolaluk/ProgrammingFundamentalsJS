function storage(input)
{
    let list = {};
    for (const line of input) {
        let [product, amount] = line.split(' ');
        amount = Number(amount);

        if(list[product])
        {
            list[product] = list[product] + amount;
        }
        else
        {
            list[product] = amount;
        }
    }

    let listEntries = Object.entries(list);

    for (const entry of listEntries) {
        let product = entry[0];
        let amount = entry[1];

        console.log(`${product} -> ${amount}`);
    }
}