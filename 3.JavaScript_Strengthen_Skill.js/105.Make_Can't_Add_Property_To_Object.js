const album = {
    name: 'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'RM';

console.log(album);

// Can't add Property but Change Property is possible
Object.seal(album);

album.comment = 'Answer';
album.singer = 'JK';
delete album.name;

console.log(album);