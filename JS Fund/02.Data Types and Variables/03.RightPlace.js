function rightPlace(str, char, result)
{
    let finalResult = str.replace('_',char);
    let output = finalResult === result? "Matched":"Not Matched";
    console.log(output);
}