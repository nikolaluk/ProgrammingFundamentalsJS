function vacation(NumberOfPeople, TypeOfPeople, DayOfTheWeek)
{
    let totalPrice = 0;
    switch(TypeOfPeople)
    {
        case 'Students':
            if(DayOfTheWeek == 'Friday')
            {
                if(NumberOfPeople >= 30)
                {
                    totalPrice = (NumberOfPeople * 8.45) * 0.85;
                }
                else
                {
                    totalPrice = NumberOfPeople * 8.45;
                }
            }
            else if(DayOfTheWeek == 'Saturday')
            {
                if(NumberOfPeople >= 30)
                {
                    totalPrice = (NumberOfPeople * 9.80) * 0.85;
                }
                else
                {
                    totalPrice = NumberOfPeople * 9.80;
                }
            }
            else if(DayOfTheWeek == 'Sunday')
            {
                if(NumberOfPeople >= 30)
                {
                    totalPrice = (NumberOfPeople * 10.46) * 0.85;
                }
                else
                {
                    totalPrice = NumberOfPeople * 10.46;
                }
            }
            break;
        case 'Business':
            if(DayOfTheWeek == 'Friday')
            {
                if(NumberOfPeople >= 100)
                {
                    totalPrice = (NumberOfPeople-10) * 10.90
                }
                else
                {
                    totalPrice = NumberOfPeople * 10.90;
                }
            }
            else if(DayOfTheWeek == 'Saturday')
            {
                if(NumberOfPeople >= 100)
                {
                    totalPrice = (NumberOfPeople-10) * 15.60
                }
                else
                {
                    totalPrice = NumberOfPeople * 15.60;
                }
            }
            else if(DayOfTheWeek == 'Sunday')
            {
                if(NumberOfPeople >= 100)
                {
                    totalPrice = (NumberOfPeople-10) * 16
                }
                else
                {
                    totalPrice = NumberOfPeople * 16;
                }
            }
            break;
        case 'Regular':
            if(DayOfTheWeek == 'Friday')
            {
                if(NumberOfPeople >= 10 && NumberOfPeople<= 20)
                {
                    totalPrice = (NumberOfPeople * 15) * 0.95;
                }
                else
                {
                    totalPrice = NumberOfPeople * 15;
                }
            }
            else if(DayOfTheWeek == 'Saturday')
            {
                if(NumberOfPeople >= 10 && NumberOfPeople<= 20)
                {
                    totalPrice = (NumberOfPeople * 20) * 0.95;
                }
                else
                {
                    totalPrice = NumberOfPeople * 20;
                }
            }
            else if(DayOfTheWeek == 'Sunday')
            {
                if(NumberOfPeople >= 10 && NumberOfPeople<= 20)
                {
                    totalPrice = (NumberOfPeople * 22.5) * 0.95;
                }
                else
                {
                    totalPrice = NumberOfPeople * 22.5;
                }
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}