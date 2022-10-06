function formatGrade(grade)
{
    let poor = 2;
    if(grade <= 2.99)
    {
        console.log(`Fail (${poor})`);
    }
    else if(grade >= 3 && grade < 3.50)
    {
        console.log(`Poor (${grade.toFixed(2)})`);
    }
    else if(grade >= 3.5 && grade < 4.5)
    {
        console.log(`Good (${grade.toFixed(2)})`);
    }
    else if(grade >= 4.5 && grade < 5.5)
    {
        console.log(`Very good (${grade.toFixed(2)})`);
    }
    else if(grade >= 5.5)
    {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}