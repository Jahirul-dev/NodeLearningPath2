// const EventEmitter = require("events")
// const emitter = new EventEmitter();

// emitter.on('BellRing',()=>{
//     console.log("We need to run");
// })

// emitter.emit('BellRing')



// let EventEmitter = require('events')
// let emitter = new EventEmitter();
// emitter.on("BellRing", (period)=>{
//     console.log(`Hi student of all class ${period}`);
// })

// emitter.emit("BellRing", ' last period is over, so we can go home now')


// let EventEmitter = require('events')
// let emitter = new EventEmitter();

let School = require('./dataExport')
const schoolData = new School()
schoolData.on("BellRing", ({period,text})=>{
    console.log(`Hi student of all class ${period} ${text}`);
})

schoolData.School()


