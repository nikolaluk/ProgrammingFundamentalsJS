function adAstra(input)
{
    let text = input.shift();
    const foodPattern = /([#]|[|])[A-Z][a-z]+( [A-Z][a-z]+)*\1[\d]{2}\/[\d]{2}\/[\d]{2}\1[\d]+\1/g;
    let foodArrayMatcher = text.matchAll(foodPattern);
    let foodArray = [];
    let index = 0;
    for (const el of foodArrayMatcher) {
        foodArray[index] = el[0];
        index++;
    }

    let totalCalories = 0;
    for (const food of foodArray) {
        let tempArr;
        if(food[0] == '#')
        {
            tempArr = food.split('#');
        }
        else if(food[0] == '|')
        {
            tempArr = food.split('|');
        }
        tempArr.shift();
        tempArr.pop();
        let name = tempArr[0];
        let expDate = tempArr[1];
        let calories = tempArr[2];
        totalCalories += Number(calories);
    }

    let days = totalCalories/2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    for (const food of foodArray) {
        let tempArr;
        if(food[0] == '#')
        {
            tempArr = food.split('#');
        }
        else if(food[0] == '|')
        {
            tempArr = food.split('|');
        }
        tempArr.shift();
        tempArr.pop();
        let name = tempArr[0];
        let expDate = tempArr[1];
        let calories = tempArr[2];
        console.log(`Item: ${name}, Best before: ${expDate}, Nutrition: ${calories}`);
    }
}

adAstra([

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    
    ])