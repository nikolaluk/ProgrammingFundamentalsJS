function movingTarget(array)
{
    let targets = array.shift();
    targets = targets.split(' ').map(x => Number(x));
    for(let i = 0; i < array.length; i++)
    {
        let tempArray = array[i].split(' ');
        let command = tempArray.shift();
        switch(command)
        {
            case "Shoot":
                if(tempArray[0] >= 0 && tempArray[0] < targets.length)
                {
                    targets[tempArray[0]] -= tempArray[1];
                    if(targets[tempArray[0]] <= 0)
                    {
                        for(let i = Number(tempArray[0]); i < targets.length; i++)
                        {
                            targets[i] = targets[i+1];
                        }
                        targets.pop();
                    }
                }
                break;

            case "Add":
                if(targets[tempArray[0]])
                {
                    targets.splice(tempArray[0], 0, tempArray[1])
                    
                }
                else
                {
                    console.log("Invalid placement!");
                }
                break;

            case "Strike":
                let index = Number(tempArray[0]);
                let radius = Number(tempArray[1]);
                if(index + radius < targets.length && index - radius > 0)
                {
                    for(let i = index - radius; i <= index + radius;i++)
                    {
                        targets[i] = "#";
                    }
                    targets = targets.filter(element => element != "#");
                }
                else
                {
                    console.log(`Strike missed!`);
                }
                break;

            case "End":
                console.log(targets.join('|'));
                break;
        }
    }
}

movingTarget((["52 74 23 44 96 110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"]))