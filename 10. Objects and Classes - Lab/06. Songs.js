function songs(arr) {
    Number(arr.shift());
    let typeAll = arr.pop();
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    arr.forEach(element => {
        let [typeList, name, age] = element.split('_');
        let song = new Songs(typeList, name, time);
        if (song.typeList == typeAll || typeAll == 'all') {
            console.log(song.name);
        }
    });
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)