function store(available, delivery)
{
    const storedProducts = {};
    const availableLength = available.length;
    const deliveryLength = delivery.length;

    for(let i = 0; i < availableLength; i += 2)
    {
        const currentProduct = available[i];
        storedProducts[currentProduct] = Number(available[i+1]);
    }
    for(let i = 0; i < deliveryLength; i += 2)
    {
        const currentProduct = delivery[i];
        if(!storedProducts.hasOwnProperty(currentProduct))
        {
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += Number(delivery[i+1]);
    }
    for(const product in storedProducts)
    {
        console.log(`${product} -> ${storedProducts[product]}`);
    }
}

store([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])