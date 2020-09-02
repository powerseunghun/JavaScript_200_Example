for (var i = 0; i < 10; i++) {
    console.log(i);
}

var hometown = [
    {name: 'NamJun', place: 'ilsan', city: 'goyang'},
    {name: 'Jin', place: 'gwachun'},
    {name: 'Hosik', place: 'gwangju', city: 'jeonrado'},
    {name: 'jimin', place: 'busan', city:'gyeongsangdo'}
];

for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;

    if (h.name == 'Hosik') {
        console.log(h.name + 's city is ' + h.city + ' ' + h.place);
    }
}