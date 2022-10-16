function search(array, commands)
{
    let numberOfElements = commands[0];
    let elementsToDelete = commands[1];
    let desiredNumber = commands[2];

    let takenElements = [];

    let counter = 0;

    for(let i = 0; i < numberOfElements; i++)
    {
        takenElements[i] = array[i];
    }
    

    for(let i = 0; i < elementsToDelete; i++)
    {
        takenElements.shift();
    }


    for(let i = 0; i < takenElements.length;i++)
    {
        if(takenElements[i] ==  desiredNumber)
        {
            counter++;
        }
    }

    console.log(`Number ${desiredNumber} occurs ${counter} times.`);
}


search([5, 2, 3, 4, 1, 6], [5, 2, 3])