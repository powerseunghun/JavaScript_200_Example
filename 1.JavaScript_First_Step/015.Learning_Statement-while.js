var hometown = [
    {name: 'NamJun', place: 'ilsan', city: 'goyang'},
    {name: 'Jin', place: 'gwachun'},
    {name: 'Hosik', place: 'gwangju', city: 'jeonrado'},
    {name: 'Jimin', place: 'busan', city:'gyeongsangdo'}
];

var isHometown = function(h, name) {
    console.log(`Function is Exec.. find ${name} in ${h.city}`);

    if (h.name === name) {
        console.log(`${h.name }\'s hometown is ${h.city } ${h.place }` );
        return true;
    }
    return false;
}

var h;
while (h = hometown.shift()) {
    if (!h.name || !h.place || !h.city) continue;
    var result = isHometown(h, 'Hosik');
    if (result) break;
}

var i = 0;
var names = ['NamJun', 'Jin', 'Hosik', 'Jimin'];
var cities = ['gyeongki', 'busan', 'daegu', 'gwangju'];

do {
    hometown[i] = {name: names[i], city: cities[i]};
    i++;
} while(i < 4);

console.log(hometown);