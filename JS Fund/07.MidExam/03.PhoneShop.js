function phoneShop(array)
{
    let list = array.shift().split(', ');
    
    let currentLine = array.shift();
    while(currentLine != 'End')
    {
        let lineAsArray = currentLine.split(' - ');
        let command = lineAsArray.shift();
        let firstPhone = lineAsArray.shift();
        
        

        switch(command)
        {
            case 'Add':
                let exists = false;
                for(let i = 0 ;i < list. length; i++)
                {
                    if(list[i] == firstPhone)
                    {
                        exists = true;
                    }
                }
                if(exists == false)
                {
                    list.push(firstPhone);
                }
                break;

            case 'Remove':
                list = list.filter(x => x !== firstPhone);
                break;

            case 'Bonus phone':
                let indexOfPhone = -1;
                let phoneArray = firstPhone.split(':');
                let oldPhone = phoneArray.shift();
                let newPhone = phoneArray.shift();
                for(let i = 0; i < list.length;i++)
                {
                    if(list[i] == oldPhone)
                    {
                        indexOfPhone = i;
                    }
                }
                if(indexOfPhone >= 0)
                {
                    list.splice(indexOfPhone + 1, 0, newPhone)
                }
                break;

            case 'Last':
                for(let i = 0; i<list.length; i++)
                {
                    if(list[i] == firstPhone)
                    {
                        list.splice(i,1);
                        list.push(firstPhone);
                    }
                }
                break;
        }
        

        currentLine = array.shift();
    }
    console.log(list.join(', '));
}



phoneShop(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])

