function furniture(input)
{
    let index = 0;
    let totalMoney = 0;
    const pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g
    console.log('Bought furniture:');

    while(input[index] !== 'Purchase')
    {
        let productRow = input[index];
        let validProduct = pattern.exec(productRow);

        while(validProduct !== null)
        {
            const productName = validProduct.groups['name'];
            console.log(productName);

            const productPrice = validProduct.groups['price'];

            const productQuantity = validProduct.groups['quantity'];

            totalMoney += productPrice * productQuantity;

            validProduct = pattern.exec(productRow);
        }

        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}