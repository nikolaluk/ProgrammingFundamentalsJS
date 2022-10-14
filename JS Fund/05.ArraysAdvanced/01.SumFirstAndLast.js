function sumFirstAndLast(array)
{
    let first = Number(array.shift());
    let last = Number(array.pop());
    let sum = first + last;
    console.log(sum);
}