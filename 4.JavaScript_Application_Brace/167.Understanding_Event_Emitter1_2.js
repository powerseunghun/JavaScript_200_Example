const Emitter = require('./167.Understanding_Event_Emitter1');
const em = new Emitter();

em.on('greet', () => {
    console.log('Hello First');
});

em.on('greet', () => {
    console.log('Hello Second');
});

em.emit('greet');