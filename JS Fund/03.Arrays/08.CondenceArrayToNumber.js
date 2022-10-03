function condence(nums)
{
    let condenced = [];
    let counter = 0;
    for(let i = 0; i < nums.length;i++)
    {
        if(counter > 0)
        {
            i -= 1;
            counter = 0;
        }
        condenced[i] = Number(nums[i] + nums[i+1]);
        if(i  == nums.length - 2)
        {
            nums = condenced;
            condenced = [];
            if(nums.length - 1 > 0)
            {
                i = 0;
            }
            else
            {
                break;
            }
            counter++;
        }
    }
    console.log(nums.toString());
}

condence([5,0,4,1,2])