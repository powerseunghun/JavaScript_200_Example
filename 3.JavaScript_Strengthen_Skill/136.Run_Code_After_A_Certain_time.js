// const timer = {
//     run: function() {
//         if (this.t) console.log('Already Exec Timer');

//         this.t = setTimeout(function() {
//             console.log('Run After 1 Sec');
//         }, 1000);
//     },
//     cancel: function() {
//         if (this.t) clearTimeout(this.t);
//         this.t = undefined;
//     }
// };

// timer.run();
// timer.cancel();
// timer.run();

// 136-1
setTimeout(() => {
    console.log('JavaScript');
}, 0);

console.log('Good');