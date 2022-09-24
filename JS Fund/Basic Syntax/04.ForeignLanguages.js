function language(input)
{
    if(input == 'England' || input == 'USA')
    {
        console.log('English');
    }
    else if(input == 'Spain' || input == 'Argentina' || input == 'Mexico')
    {
        console.log('Spanish');
    }
    else
    {
        console.log("unknown");
    }
}

language('England');