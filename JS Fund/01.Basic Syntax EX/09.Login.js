function login (input)
{
    let index = 0;
    let username = (input[index]);
    index++;
    let reverseString = "";
    for (var i = username.length - 1; i >= 0; i--) 
    { 
        reverseString += username[i];
    }
    for(let i = 1; i <= 4; i++)
    {
        if((input[index]) == reverseString)
        {
            console.log(`User ${username} logged in.`);
            break;
        }
        else if(i == 4)
        {
            console.log(`User ${username} blocked!`);
            break;
        }
        else
        {
            console.log(`Incorrect password. Try again.`)
            index++;
        }
    }
}



login("roberto", "sanches", "cabron", "otrebor")