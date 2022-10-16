function twoCriteria(array)
{
    let sortedArray = array.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    for(let i = 0; i < sortedArray.length; i++)
    {
        console.log(sortedArray[i]);
    }
}