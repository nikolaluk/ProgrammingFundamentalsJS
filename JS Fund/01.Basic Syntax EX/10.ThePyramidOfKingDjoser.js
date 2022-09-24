function pyramid(base, increment)
{
    let requiredStone = 0;
    let requiredMarble = 0;
    let requiredLapis = 0;
    let requiredGold = 0;
    let stoneBlocks = 0;
    let floorCounter = 0;
    let pyramidheight = 0;
    for(let i = base; i >= 2; i -= 2)
    {
        floorCounter++;
        if(i > 2)
        {
            stoneBlocks = (i-2)*(i-2);
            requiredStone += stoneBlocks*increment;
        }
        if(floorCounter % 5 != 0 && i > 2)
        {
            requiredMarble += ((i*i) - stoneBlocks) *increment;
        }
        if(floorCounter % 5 == 0)
        {
            requiredLapis += ((i*i) - stoneBlocks) *increment;
        }
        if(i <= 2)
        {
            requiredGold = ((i*i)*increment);
        }
    }
    pyramidheight = floorCounter*increment;
    console.log(`Stone required: ${Math.ceil(requiredStone)}`);
    console.log(`Marble required: ${Math.ceil(requiredMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(requiredLapis)}`);
    console.log(`Gold required: ${Math.ceil(requiredGold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidheight)}`);
}

pyramid(11,
    1
    )