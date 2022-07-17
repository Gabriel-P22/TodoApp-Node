const TaskStatus = require("./TaskStatus")

class Task {
    constructor(description) {
        this._description = description
        this._status = TaskStatus.PENDING
    } 

    get status() {
        return this._status
    }

    set status(status) {
        this._status = status
    }

    get description() {
        return this._description
    }

    set description(description) {
        this._description = description
    }
    
}

module.exports = Task