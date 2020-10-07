const Emitter = require('events');
const eventConfig = require('./168.Understanding_Event_Emitter2_2').events;
const em = new Emitter();

em.on(eventConfig.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

em.on(eventConfig.GREET, () => {
    console.log('A Greeting occurred!');
});
em.emit(eventConfig.GREET);
