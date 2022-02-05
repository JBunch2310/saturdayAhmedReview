/* Objects are to store data. [ ]
Arrays are a form to store a list of data. { }
Arrays and objects can be use together with arrays, by making an array of objects.
*/

// Example of a 
// TV Show object on Netflix
const tvShowObjectA = {
    title: 'Squid Game',
    genre: 'Thriller',
    // Epoch UNIX Timestamp
    // Counts seconds from 
    // Jan 1s, 1970 12:00AM GMT (Greenwich Timezone).
    release_date: 1630517205,
    is_series: true,
    thumbnail_url: 'https://occ-0-3934-990.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYH5uxnERtKat2CUKkivszXpZ9VVdqVFwwuybN2vnWEIH7bC7OXYFudDxccEyTDmJeJtarUDLotJAppvai6TgaL97klI6V4XOTXITKaosUC2y2tf-VwcnzM2eyks.jpg?r=216'
}

const tvShowObjectB = {
    title: 'Coded Bias',
    genre: 'Documentary',
    release_date: 1630517305,
    is_series: false,
    thumbnail_url: 'https://occ-0-3934-990.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYH5uxnERtKat2CUKkivszXpZ9VVdqVFwwuybN2vnWEIH7bC7OXYFudDxccEyTDmJeJtarUDLotJAppvai6TgaL97klI6V4XOTXITKaosUC2y2tf-VwcnzM2eyks.jpg?r=216'
}

const tvShowObjectC = {
    title: 'Ozark',
    genre: 'Thriller',
    release_date: 1630517205,
    is_series: true,
    thumbnail_url: 'https://occ-0-3934-990.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYH5uxnERtKat2CUKkivszXpZ9VVdqVFwwuybN2vnWEIH7bC7OXYFudDxccEyTDmJeJtarUDLotJAppvai6TgaL97klI6V4XOTXITKaosUC2y2tf-VwcnzM2eyks.jpg?r=216'
}

const tvShowList = [
    tvShowObjectA,
    tvShowObjectB,
    tvShowObjectC
]

console.log(tvShowList)

//Access title from show C
//Dot notation
console.log(tvShowObjectC.title)

//Bracket notation
console.log(tvShowObjectC['title'])

// Checking if name exists
// if key `name` exist in the objects.
//or if there is a value under key 'name'
if (tvShowObjectC.name){
    console.log(tvShowObjectC.name)
}