function book(input)
{
    let phoneBook = {};

    for (let el of input) {
        let tempArr = el.split(' ');
        let name = tempArr[0];
        let phone = tempArr[1];

        phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    } 

}

book(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])