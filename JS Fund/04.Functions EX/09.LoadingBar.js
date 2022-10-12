function loadingBar(number)
{
    let percentLoaded = number/10;
    let visualPersents = '';
    let visualDots = '';
    for(let i = 0; i < percentLoaded; i++)
    {
        visualPersents += '%';
    }
    for(let i = 0; i < 10 - percentLoaded; i++)
    {
        visualDots += '.';
    }
    if(number < 100)
    {
    console.log(`${number}% [${visualPersents}${visualDots}]`);
    console.log("Still loading...");
    }
    else
    {
        console.log(`${number}% Complete!`);
    }
}