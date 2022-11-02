function convert(data)
{
    let info = JSON.parse(data);

    for(const el of Object.keys(info))
    {
        console.log(`${el}: ${info[el]}`);
    }
}