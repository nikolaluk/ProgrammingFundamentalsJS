function cone(radius, height)
{
    let area = 3.1415926535898 * radius*(radius+Math. sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
    let volume = 3.1415926535898 * Math.pow(radius, 2) * (height/3);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3,

    5)