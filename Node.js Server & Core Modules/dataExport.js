let EventEmitter = require('events')

class BellRing extends EventEmitter{
    School(){
        this.emit("BellRing", {
            period:'First',
            text:'period ended'
        })
    }
}

module.exports = BellRing;