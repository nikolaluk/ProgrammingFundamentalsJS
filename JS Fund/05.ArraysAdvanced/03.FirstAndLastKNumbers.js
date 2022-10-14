function firstAndLastKNubers(array)
{
    let k = array.shift();
    let firstK = array.slice(0, k);
    let lastK = array.slice(array.length - k,array.length);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}