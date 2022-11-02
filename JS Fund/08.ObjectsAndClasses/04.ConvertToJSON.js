function convert(firstName, lastName, hairColor)
{
    let object =
    {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    console.log(JSON.stringify(object));
}

convert('George', 'Jones', 'Brown');