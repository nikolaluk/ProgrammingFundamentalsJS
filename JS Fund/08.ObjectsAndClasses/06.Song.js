function song(array)
{
    let songs = [];
    let numberOfSongs = array.shift();
    let typeSong = array.pop();

    class Song
    {
        constructor(typeList, name, time)
        {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for(let i = 0; i < numberOfSongs; i++)
    {
        let tempArray = array[i].split('_');
        let typeList = tempArray[0];
        let name = tempArray[1];
        let time = tempArray[2];

        let newSong = new Song(typeList, name, time);
        songs.push(newSong);
    }

    for(let i = 0; i < songs.length; i++)
    {
        if(typeSong === 'all')
        {
            console.log(songs[i].name);
        }
        else
        {
            if(typeSong == songs[i].typeList)
            {
                console.log(songs[i].name);
            }
        }
    }
}

song([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])