function hunt(array)
{
    let list = array[0].split('!');
    array.shift();
    for(let i = 0; i < array.length; i++)
    {
        let tempArray = array[i].split(' ');
        let command = tempArray.shift();
        switch(command)
        {
            case "Urgent":
                let product = tempArray.shift();
                let check = false
                for(let i = 0; i < list.length; i++)
                {
                    if(list[i] == product)
                    {
                        check = true;
                        break;
                    }
                }
                if(check == false)
                {
                    list.unshift(product);
                }
                break;

            case "Unnecessary":
                for(let i = 0; i < list.length; i++)
                {
                    if(list[i] == tempArray[0])
                    {
                        for(let j = i; j < list.length - 1;j++)
                        {
                            list[j] = list[j+1];
                        }
                        list.pop();
                    }
                }
                break;

            case "Correct":
                for(let i = 0; i < list.length; i++)
                {
                    if(tempArray[0] == list[i])
                    {
                        list[i] = tempArray[1];
                    }
                }
                break;
            
            case "Rearrange":
                let saver = '';
                let counter = 0;
                for(let i = 0; i < list.length; i++)
                {
                    if(list[i] == tempArray[0])
                    {
                        counter++;
                        saver = list[i];
                        for(let j = i; j < list.length - 1;j++)
                        {
                            list[j] = list[j+1];
                        }
                        list.pop();
                    }
                    if(counter > 0)
                    {
                        list.push(saver);
                        counter = 0;
                    }
                }
                break;
        }
    }
    console.log(list.join(', '));

}

hunt((["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes", 
"Correct Tomatoes Potatoes", 
"Go Shopping!"]))