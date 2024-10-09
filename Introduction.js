// console.log(window);
// console.log(this);

// require('node:events')
// import { log } from 'node:console'
import event, {EventEmitter} from 'node:events'

let emitter = new EventEmitter()

// console.log(emitter);

emitter.on('mansun', ()=>{
    console.log("Mansun Event Triggerred.....0");
})
emitter.on('abc', ()=>{
    console.log("Mansun Event Triggerred.....1");
})
emitter.on('xyz', ()=>{
    console.log("Mansun Event Triggerred.....2");
})
emitter.on('mia', ()=>{
    console.log("Mansun Event Triggerred.....3");
})
emitter.on('mia', (name)=>{
    console.log("Mansun Event Triggerred.....4", name);
})
// emitter.on('mia', ()=>{
//     console.log("Mansun Event Triggerred.....5");
// })
// emitter.on('mia', ()=>{
//     console.log("Mansun Event Triggerred.....6");
// })
// emitter.on('mia', ()=>{
//     console.log("Mansun Event Triggerred.....er46");
// })
// emitter.on('mia', ()=>{
//     console.log("Mansun Event Triggerred.....");
// })

emitter.addListener('johnny', ()=>{
    console.log("Johnny came here..");
    
})
emitter.once('login', ()=>{
    return "Success"
})

// emitter.off('event_name', "Callback/ Lisstener to that even");
// emitter.removeListener('event_name', "Callback/ Lisstener to that even");

// emitter.removeAllListeners('')


function myListener(){
    console.log("This is My Listener...");
    
}

// emitter.prependListener('mia', myListener)
// console.log(emitter.listeners('mia'));
emitter.setMaxListeners(40)
console.log(emitter.getMaxListeners());


emitter.emit('mia', "weds Johnny")