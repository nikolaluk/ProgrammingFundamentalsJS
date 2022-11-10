function createAdressBook(input)
{
    let adressBook = {};
    let sortedAdressBook = {};

    for (const line of input) {
        let [name, adress] = line.split(':');
        adressBook[name] = adress;
    }

    let adressBookEntries = Object.entries(adressBook);
    adressBookEntries.sort((a,b) => a[0].localeCompare(b[0]));

    for (const entry of adressBookEntries) {
         let name = entry[0];
         let adress = entry[1];
        console.log(`${name} -> ${adress}`);
    }
}

createAdressBook(
['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])