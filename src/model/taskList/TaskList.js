const Task = require("../task/Task")

class TaskList {
    constructor() {
        this._tasks = []
    }

    get length() {
        return this._tasks.length
    }

    add(task) {
        if (task instanceof Task) {
            this._tasks.push(task)
        } else if (typeof task === "string") {
            this._tasks.push(new Task(task))
        } else {
            throw new TypeError("Must be instance of Task or string")
        }
    }

    get(description) {
        return this._tasks.filter(task => task.description === description)[0]
    }

    remove(task) {
        if (task instanceof Task) {
            this._tasks = this._tasks.filter(t => task !== t) 
            return task
        } else if(typeof task === "string") {
            const taskObject = this._tasks.filter(t => task === t.description)[0]
            this._tasks = this._tasks.filter(t => taskObject !== t)
            return taskObject
        } else {
            throw new TypeError("Must be instance of Task or string")
        }
    }

    search(description) {
        return this._tasks.filter(t => t.description.includes(description)) 
    }

    listAll() {
        return this._tasks
    }
}

module.exports = TaskList