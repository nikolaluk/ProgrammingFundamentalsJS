function amazing(number)
{
    numberAsSring = number.toString();
    let sum = 0;
    for(let i = 0; i < numberAsSring.length; i++)
    {
        sum += Number(numberAsSring[i]);
    }
    let result = sum.toString().includes('9') ? `${number} Amazing? True` : `${number} Amazing? False`
    console.log(result);
}

amazing(1233);