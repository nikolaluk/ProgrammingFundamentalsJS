function validator(password)
{
    let counter1 = 0;
    let counter2 = 0;
    let valid = true;
    for(let i = 0;i < password.length;i++)
    {
        let charAsAsci = password[i].charCodeAt(0);
        if(charAsAsci >= 48 && charAsAsci <=57)
        {
            counter1++;
            counter2++;
        }
        if(charAsAsci >= 65 && charAsAsci <=90 || charAsAsci >= 97 && charAsAsci <= 122)
        {
            counter1++;
        }
    }
    if(password.length < 6 || password.length > 10)
    {
        console.log(`Password must be between 6 and 10 characters`);
        valid = false;
    }
    if(counter1 != password.length)
    {
        console.log(`Password must consist only of letters and digits`);
        valid = false;
    }
    if(counter2 < 2)
    {
        console.log(`Password must have at least 2 digits`);
        valid = false;
    }
    


    if(valid == true)
    {
        console.log(`Password is valid`);
    }
}