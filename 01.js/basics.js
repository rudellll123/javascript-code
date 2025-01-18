const map = newMap()
map.set ('IN',"india")
map.set ('Ru',"RUSSIA")
    map.set ('FR',"FRANCE")
    console.log(map);
    for (const [key ,value]of map){
        console.log(key,':-',value);
    }