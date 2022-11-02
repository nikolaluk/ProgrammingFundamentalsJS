function cats(array)
{
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    for(let i = 0; i < array.length; i++)
    {
        let tempArray = array[i].split(' ');
        let name = tempArray[0];
        let age = Number(tempArray[1]);

        let cat = new Cat (name, age);

        cat.meow();
    }
}