function employees(input)
{
    class Employee
    {
        constructor(name, number)
        {
            this.name = name;
            this.number = number;
        }
    }

    for(let i = 0; i < input.length; i++)
    {
        let name = input[i];
        let number = Number(input[i].length);

        let newEmployee = new Employee(name, number);
        console.log(`Name: ${newEmployee.name} -- Personal Number: ${newEmployee.number}`);
    }
}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])