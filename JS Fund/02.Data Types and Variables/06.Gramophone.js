function gramophone(bandName, albumName, songName)
{
    let songLength = (albumName.length * bandName.length) * songName.length / 2;
    let timesRotated = songLength / 2.5;
    console.log(`The plate was rotated ${Math.ceil(timesRotated)} times.`);
}