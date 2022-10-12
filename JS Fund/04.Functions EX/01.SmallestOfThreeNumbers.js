function smallest(first,second,third)
{
    let min = 9999999999;
    if(first < min)
    {
        min = first;
    }
    if(second < min)
    {
        min = second;
    }
    if(third < min)
    {
        min = third;
    }
    console.log(min);
}

smallest(600,342,123)