function matrix(number)
{
    let array =[];
    let arrayAsString = ' ';
        for(let i = 0; i < number; i++)
        {
            array[i] = number;
        }
        arrayAsString = array.join(' ');
        for(let i = 0; i < number; i++)
        {
            console.log(arrayAsString);
        }
}