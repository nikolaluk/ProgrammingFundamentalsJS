function users(input) {
    let result = {};

    for (const line of input) {
        let [company, id] = line.split(' -> ');
        if (!result.hasOwnProperty(company))
        {
            result[company] = [];
        }
        result[company].push(id)
    }

    let resultEntries = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));

    for (const kvp of resultEntries) {
        let companyName = kvp[0];
        let AllIds = kvp[1];
        let uniqueIds = new Set(AllIds)
        console.log(companyName);
        for (const id of uniqueIds) {
            if(id == '')
            {
                break;
            }
            console.log(`-- ${id}`);
        }
    }
}

users([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ])