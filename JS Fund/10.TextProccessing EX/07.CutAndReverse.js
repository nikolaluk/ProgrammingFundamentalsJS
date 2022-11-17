function cutAndReverse(string)
{
    let list = string.split('');

    const middleIndex = Math.ceil(list.length / 2);

    const firstHalf = list.splice(0, middleIndex);   
    const secondHalf = list.splice(-middleIndex);

    let firstString ='';
    let secondString = '';

    for (let i = firstHalf.length - 1; i >= 0; i--) {
        firstString += firstHalf[i];
    }
    for (let i = secondHalf.length - 1; i >= 0; i--) {
        secondString += secondHalf[i];
    }

    console.log(firstString);
    console.log(secondString);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')